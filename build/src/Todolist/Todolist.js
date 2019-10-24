import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';
import Tofinish from './Tofinish';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo: localStorage.getItem('todo')?localStorage.getItem('todo').split(','):[],
            todo1: localStorage.getItem('todo1')?localStorage.getItem('todo1').split(','):[]
        }

    }  
    addItem = (msg)=>{
        this.setState({
            todo: [...this.state.todo,msg]
        },()=>{
            localStorage.setItem('todo',this.state.todo);
        })
    }
    delItem = (a)=>{
        
        var todo = [...this.state.todo];
        todo.splice(a,1);

        this.setState(
            {todo:todo},()=>{
                localStorage.setItem('todo',this.state.todo);
            }
        )

    }
   
    delItem1 = (a)=>{
        
        var todo1 = [...this.state.todo1];
        todo1.splice(a,1);

        this.setState(
            {todo1:todo1},()=>{
                localStorage.setItem('todo1',this.state.todo1);
            }
        )

    }
    checkebox=(a)=>{
        var todo = [...this.state.todo];
        var todo1={...this.state.todo1};
        var msg=todo[a];
        todo.splice(a,1);

        this.setState({
            todo:todo,
            todo1: [...this.state.todo1,msg]
        },()=>{
            localStorage.setItem('todo',this.state.todo);
            localStorage.setItem('todo1',this.state.todo1);
        })

    }
    checkebox1=(a)=>{
        var todo = [...this.state.todo];
        var todo1 = [...this.state.todo1];
        var msg=todo1[a];
        todo1.splice(a,1);
        this.setState({
            todo1:todo1,
            todo: [...this.state.todo,msg]
        },
        ()=>{
            localStorage.setItem('todo1',this.state.todo1);
            localStorage.setItem('todo',this.state.todo);
        
        }
        )

    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem} todo={this.state.todo} />
                <div className="content">
                    <Todoing  delTodo={this.delItem} checkeBox={this.checkebox} todo={this.state.todo} todo1={this.state.todo1}/>
                    <Tofinish delTodo1={this.delItem1} checkeBox1={this.checkebox1} todo1={this.state.todo1} todo={this.state.todo}/>
                    </div>
            </div>
        )
    }
}
