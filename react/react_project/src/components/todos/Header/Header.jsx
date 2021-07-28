import React, { Component } from "react";
import './Header.css'

export default class Header extends Component {
  handleKeyUpfn=(e)=>{
    const {keyCode,target}=e
    if(keyCode!==13) return
    if(target.value.trim()===''){
      alert('输入不能为空！')
      return
    } 
    const todoObj={id:new Date(),name:target.value,done:false}
    console.log(this.props,'this.props')
    this.props.addtodos(todoObj)
  }
  render() {
    return (
      <div>
        <div className="todo-header">
          <input type="text" onKeyUp={this.handleKeyUpfn} placeholder="请输入你的任务名称，按回车键确认" />
        </div>
      </div>
    );
  }
}
