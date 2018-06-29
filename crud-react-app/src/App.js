import React, { Component } from 'react';

import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/taskList'
class App extends Component {
    constructor(props){
        super(props);
        this.state =  {
        task: [] // id, name, status
        }
    }
    
    componentWillMount(){
        
        if(localStorage && localStorage.getItem('task')){
            var tasks = JSON.parse(localStorage.getItem('task'
            ))
            this.setState({
                task: tasks
            })
        }
    }
  
    onGenerateData = () => {
        var tasks = [
            {
                id: this.generateID(),
                name:' Học lập trình',
                status :true
            },
            {
                id: this.generateID(),
                name:' Đi bơi',
                status: false
            },
            {
                id: this.generateID(),
                name:'Ngủ',
                status:true
            }
        ]
        // this.setState ({
        //     task: tasks
        // });
        localStorage.setItem('task', JSON.stringify(tasks));//JSON.stringify: chuyển data từ object sang String
        
    }
    

  s4(){
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    generateID(){
        return this.s4()+ '-' + this.s4() + '-' + this.s4() + '-' + this.s4();
    }
  render() {
      var { task } = this.state;
    return (
      <div className="container">
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <TaskForm />
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <button type="button" className="btn btn-primary">
                    <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
                <button type="button" className="btn btn-danger ml-5" onClick={this.onGenerateData}>
                    Generate Data
                </button>
                <Control />
                <TaskList task={task}/>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
