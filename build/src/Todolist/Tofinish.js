import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Tofinish extends Component {
    render() {
        return (
            <div>
                <h2 className="list-title">已完成<span className="title-numb">{this.props.todo1.length}</span></h2>
                <ul className="list1">
                    {
                        this.props.todo1.map((item,idx)=><li key={idx}>
                        <input type='checkbox' checked={true} key={idx} onChange={()=>{this.props.checkeBox1(idx)}} />
                        <p>{item}</p><span onClick={()=>{this.props.delTodo1(idx)}}>-</span></li>)
                    }
                </ul>
            </div>
        )
    }
}
