import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Todoing extends Component {
    
    render() {
        return (
            <div className="List">
                <h2 className="list-title">正在进行
                <span className="title-numb">{this.props.todo.length}</span></h2> 
                <ul className="list">
                    {
                        this.props.todo.map((item,idx)=>
                        <li key={idx}><input type='checkbox' key={idx} checked={false} onChange={()=>{this.props.checkeBox(idx)}}></input><p>{item}</p><span onClick={()=>{this.props.delTodo(idx)}}>-</span></li>)
                    }
                </ul>
            </div>
        )
    }
}
