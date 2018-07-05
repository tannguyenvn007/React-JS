import React, { Component } from 'react';

import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/taskList'
// import _ from 'lodash';//all
import { findIndex, filter } from 'lodash'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayForm: false,
            taskEditing: null,
            filter: {
                name: '',
                status: -1
            },
            keyword: '',
            sortBy: 'name',
            sortValue: 1
        }
    }



    onToggleForm = () => {
        if (this.state.isDisplayForm && this.state.taskEditing !== null) {
            this.setState({
                isDisplayForm: true,
                taskEditing: null
            });
        } else {
            this.setState({
                isDisplayForm: !this.state.isDisplayForm, //nguoc lai
                taskEditing: null
            });
        }

    }
    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        })
    }
    onShowForm = () => {
        this.setState({
            isDisplayForm: true
        })
    }
    onSubmit = (data) => {
        var { task } = this.state;
        if (data.id === '') {
            data.id = this.generateID();
            task.push(data);
        } else {
            var index = this.findIndex(data.id);
            task[index] = data;
        }

        this.setState({
            task: task,
            taskEditing: null
        });
        localStorage.setItem('task', JSON.stringify(task));
    }
    onUpdateStatus = (id) => {
        var { task } = this.state;
        // var index = this.findIndex(id);
        var index = findIndex(task, (task) => { //function in lodash
            return task.id === id
        })
        if (index !== -1) {
            task[index].status = !task[index].status;
            this.setState({
                task: task
            })
        }
        localStorage.setItem('task', JSON.stringify(task));

    }
    findIndex = (id) => {
        var { task } = this.state;
        var result = -1;
        task.forEach((task, index) => {
            if (task.id === id) {
                result = index;
            }
        })
        return result;
    }
    onDelete = (id) => {
        var { task } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            task.splice(index, 1);// xoa data tai vi tri index va xoa 1 data
            this.setState({
                task: task
            })
        }
        localStorage.setItem('task', JSON.stringify(task));
        this.onCloseForm();
    }
    onUpdate = (id) => { //nhan id from con tra ve
        var { task } = this.state;
        var index = this.findIndex(id);
        var taskEditing = task[index];
        this.setState({
            taskEditing: taskEditing
        });
        this.onShowForm();
    }
    onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus, 10);
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        })
    }
    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        })
    }
    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        })
    }
    render() {

        var {

            isDisplayForm,
            taskEditing,
            filter,
            keyword,
            sortBy,
            sortValue
        } = this.state;

        // if(filter){
        //     if(filter.name){
        //         // task = task.filter((task) => {
        //         //     return task.name.toLowerCase().indexOf(filter.name) !== -1;
        //         // })
        //         task = filter(task,(task) =>{ //lodash
        //             return task.name.toLowerCase().indexOf(filter.name) !== -1;
        //         })
        //     }
        // task = task.filter((task) => {
        //     if(filter.status === -1){
        //             return task;
        //     }else{
        //             return task.status === (filter.status === 1 ? true:false);
        //     }

        // })
        // }
        // if(keyword){
        //     task = task.filter((task) => {
        //         return task.name.toLowerCase().indexOf(keyword) !== -1;
        //     })

        // }
        // if (sortBy === 'name') {

        //     task.sort((a,b) => {
        //         if (a.name > b.name) {
        //             return sortValue; //1
        //         } else if(a.name < b.name){
        //             return -sortValue;//-1
        //         }else {
        //             return 0;
        //         }
        //     })
        // } else {
        //     task.sort(( a, b) => {
        //         if (a.status > b.status) {
        //             return -sortValue
        //         } else if (a.status < b.status) {
        //             return sortValue
        //         } else {
        //             return 0;
        //         }
        //     })
        // }
        var elmTaskForm = isDisplayForm ? <TaskForm
            onSubmit={this.onSubmit}
            onCloseForm={this.onCloseForm}
            task={taskEditing}
        /> : '';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
                        {elmTaskForm}
                    </div>
                    <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.onToggleForm}
                        >
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                    </button>
                        {/* <button type="button" className="btn btn-danger ml-5" onClick={this.onGenerateData}>
                        Generate Data
                    </button> */}
                        <Control
                            onSearch={this.onSearch}
                            onSort={this.onSort}
                            sortBy={sortBy}
                            sortValue={sortValue}
                        />
                        <TaskList

                            onUpdateStatus={this.onUpdateStatus}
                            onDelete={this.onDelete}
                            onUpdate={this.onUpdate}
                            onFilter={this.onFilter}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
