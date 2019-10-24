import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super();

    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
            e.target.value = ''
        }
    }
   
    render() {
        return (
            <div className="header">
          <div className="header-content">
              <div className="header-title">ToDoList</div>
              <input type="text" style={{marginTop: 15,width:300,marginLeft:50,borderRadius: 5}} id='inp'  onKeyDown={(e)=>this.handleInput(e)} className="search" placeholder="添加ToDo" required="required" ></input>
          </div>
      </div>
        )
    }
}