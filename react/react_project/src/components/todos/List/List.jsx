import React, { Component } from "react";
import './List.css'

export default class List extends Component {
  state={mouse:false}
  handleMouse=(val)=>{
    return ()=>{
        this.setState({mouse:val})
    }
  }
  hanleChange=(id)=>{
    return (event)=>{
         this.props.updatetodosfn(id,event.target.checked)
    }
  }
  hanledeletefn=(id)=>{
    if(window.confirm('确定删除吗？')){
      this.props.deletetodosfn(id)
    }
  }
  render() {
    const {name,done,id}=this.props
    const {mouse}=this.state
    return (
      <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox"  checked={done} onChange={this.hanleChange(id)} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" onClick={()=>this.hanledeletefn(id)} style={{display:mouse?'block':'none'}}>
          删除
        </button>
      </li>
    );
  }
}
