import React, { Component } from "react";
import callApi from "../../apiCaller";

import { Link } from 'react-router-dom'
class ProductAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtImage: '',
            txtPrice: '',
            txtDes: '',
            chkbStatus: '',
            category: 1,
            data: []
        }
    }
    componentDidMount() {
        var { match } = this.props;

        if (match) {
            var id = match.params.id;
            var category = match.url.substr(1, 2);
            console.log("message", category);
            callApi(`http://5b42e42263839a00144c0186.mockapi.io/Categories/${category}/products/${id}`, 'GET', null).then(res => {
                var data = res.data;
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtImage: data.image,
                    txtPrice: data.price,
                    txtDes: data.description,
                    chkbStatus: data.status,
                    category: data.CategoryId
                });
            });
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    onSave = (e) => {
        e.preventDefault();
        var { history } = this.props;
        var { id, txtName, txtPrice, txtImage, txtDes, chkbStatus, category } = this.state;
        if (id) {
            callApi(`http://5b42e42263839a00144c0186.mockapi.io/Categories/${category}/products/${id}`, 'PUT', {
                CategoryId: category,
                name: txtName,
                image: txtImage,
                price: txtPrice,
                description: txtDes,
                status: chkbStatus
            }).then(res => {
                history.goBack();
            })
        } else {
            callApi(`http://5b42e42263839a00144c0186.mockapi.io/Categories/${category}/products`, 'POST', {
                CategoryId: category,
                name: txtName,
                image: txtImage,
                price: txtPrice,
                description: txtDes,
                status: chkbStatus
            }).then(res => {
                history.goBack();
            })
        }

    }
    render() {

        var { id,txtName, txtPrice, txtImage, txtDes, chkbStatus, category } = this.state;
        return (
            <div className="block-action">
                <div className="container">
                {id ? <h1>Edit product</h1>:<h1>Add product</h1>}
                
                    <div className="content clearfix">
                    
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">

                        </div>
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                            <form onSubmit={this.onSave} className="form-horizontal">
                                <div className="form-group">
                                    <label className="col-sm-3 control-label">Tên sản phẩm:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control " name="txtName" value={txtName} onChange={this.onChange} />
                                    </div>
                                    
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-3 control-label">Hình ảnh:</label>
                                    <div className="col-sm-9">
                                        {txtImage !== '' ? 
                                            <input type="text" className="form-control" name="txtImage" value={txtImage} onChange={this.onChange} /> 
                                            : 
                                            <input type="file" className="form-control" name="txtImage" value={txtImage} onChange={this.onChange} />}
                                    </div>
                                    
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-3 control-label">Giá:</label>
                                    <div className="col-sm-9">
                                        <input type="number" className="form-control" name="txtPrice" value={txtPrice} onChange={this.onChange} />
                                    </div>
                                    
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-3 control-label">Mô tả</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" name="txtDes" value={txtDes} onChange={this.onChange} />    
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-3 control-label">Danh muc:</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" name="category" value={category} onChange={this.onChange}>
                                            <option value={1}>Fresh vegetable</option>
                                            <option value={2}>Fresh meat</option>
                                            <option value={3}>Frest fruit</option>
                                            <option value={4}>Mango</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-sm-3 control-label">Trạng thái:</label>
                                    <div className="checkbox col-sm-9">
                                    
                                        <input
                                            type="checkbox"
                                            name="chkbStatus"
                                            value={chkbStatus}
                                            onChange={this.onChange}
                                            checked={chkbStatus}
                                        />
                                        New
                                </div>
                                </div>

                                <div className="text-center">
                                    <Link to="/manage" className="btn btn-danger mr-10">Back</Link>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                                
                            </form>

                        </div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">

                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
export default ProductAction;