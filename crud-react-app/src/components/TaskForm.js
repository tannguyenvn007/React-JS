import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            status: false
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name] : value // name ở dưới form, không phải name ở constructor
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);// truyền data ra ngoài(truyền đến thằng cha onSubmit bên APP)
        
    }
    render() {
        return (
            <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                    Thêm Công Việc
                    <span 
                        className="fa fa-times-circle text-right ml-193"
                        onClick={this.props.onCloseForm}
                    ></span>
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select 
                        className="form-control" 
                        required="required" 
                        name="status"
                        value={this.state.status}
                        onChange={this.onChange}
                    >
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                        <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}

export default TaskForm;
