import React, { Component } from "react";
import PropTypes from 'prop-types'
import List from '../List/List'
import './Item.css'

export default class Item extends Component {
    static propTypes={
        todos:PropTypes.array.isRequired,
        updatetodos:PropTypes.func.isRequired,
        deletetodosfn:PropTypes.func.isRequired,
    }
  render() {
      const {todos,updatetodos,deletetodosfn}=this.props
    return (
      <ul className="todo-main">
          {todos.map(item=>{
              return <List key={item.id} {...item}  updatetodosfn={updatetodos} deletetodosfn={deletetodosfn} />
          })}
     
      
      </ul>
    );
  }
}
