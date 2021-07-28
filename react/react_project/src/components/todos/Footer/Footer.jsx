import React, { Component } from "react";
import PropTypes from 'prop-types'
import './Footer.css'

export default class Footer extends Component {
  static propTypes={
    checkAll:PropTypes.func.isRequired,
    todos:PropTypes.array.isRequired
  }
  checkallfn=(e)=>{
      this.props.checkAll(e.target.checked)
    
  }
  claerAllfn=()=>{
    this.props.claerAllfn()
  }
  render() {
    const {todos}=this.props
    console.log(todos,'foooter')

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.checkallfn} checked={todos.length===todos.filter(item=>item.done).length&&todos.length!==0?true:false} />
        </label>
        <span>
          <span>{todos.filter(item=>item.done).length}</span> / {todos.length}
        </span>
        <button className="btn btn-danger" onClick={this.claerAllfn}>清除已完成任务</button>
      </div>
    );
  }
}
