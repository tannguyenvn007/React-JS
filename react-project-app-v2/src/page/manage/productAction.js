import React, { Component } from "react";
import callApi from "../../apiCaller";

import {Link} from 'react-router-dom'
class ProductAction extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtImage: '',
            txtPrice:'',
            txtDes:'',
            chkbStatus:'',
            category:1,
            data: []
        }
    }
    componentDidMount(){
        var {match} = this.props;
        
        if(match){
            var id = match.params.id;
            var category = match.url.substr(1,2);
            console.log("message", category);
            callApi(`http://5b42e42263839a00144c0186.mockapi.io/Categories/${category}/products/${id}`,'GET',null).then(res => {
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
            [name] : value
        })
    }
    onSave = (e) =>{
        e.preventDefault();
        var {history} = this.props;
        var {txtName,txtPrice,txtImage,txtDes,chkbStatus,category}=  this.state; 
        callApi(`http://5b42e42263839a00144c0186.mockapi.io/Categories/${category}/products`,'POST',{
            CategoryId:category,
            name: txtName,
            image: txtImage.substr(12),
            price: txtPrice,
            description: txtDes,
            status: chkbStatus
        }).then(res => {
            history.goBack();
        })
    }
    render() {
        
        var {txtName,txtPrice,txtImage,txtDes,chkbStatus,category,data}=  this.state;
        return (
            <div className="container">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label >Tên sản phẩm:</label>
                        <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Hình ảnh:</label>
                        { txtImage !== '' ? <input type="text" className="form-control" name="txtImage" value={txtImage} onChange={this.onChange}/>: <input type="file" className="form-control" name="txtImage" value={txtImage} onChange={this.onChange}/> }
                    </div>
                    <div className="form-group">
                        <label>Giá:</label>
                        <input type="number" className="form-control" name="txtPrice" value={txtPrice} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Mô tả</label>
                        <input type="text" className="form-control" name="txtDes" value={txtDes} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Danh muc:</label>
                        <select className=" -control" name="category" value={category} onChange={this.onChange}>
                            <option value={1}>Grapefruit</option>
                            <option value={2}>Lime</option>
                            <option value={3}>Coconut</option>
                            <option value={4}>Mango</option>
                        </select>
                        
                    </div>
                    
                    <div className="form-group">
                        <label>Trạng thái:</label>
                    </div>

                    <div className="checkbox">
                        <label>
                            <input 
                                type="checkbox" 
                                name="chkbStatus" 
                                value={chkbStatus}
                                onChange={this.onChange}
                                checked={chkbStatus}
                                />
                            New
                        </label>
                    </div>
                    <Link to="/manage" className="btn btn-danger mr-10">Back</Link>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>

            </div>
            </div>
        )
    }
}
export default ProductAction;