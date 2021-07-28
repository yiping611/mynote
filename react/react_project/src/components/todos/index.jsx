import React, { Component } from "react";
import Header from "./Header/Header";
import Item from "./Item/Item";
import Footer from "./Footer/Footer";
import "./index.css";

export default class Todos extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: false },
      { id: "004", name: "逛街", done: false },
    ],
  };
  addtodosfn=(todosobj)=>{
      const {todos}=this.state
      const newtodos=[todosobj,...todos]

     this.setState({todos:newtodos})
  }
  updatetodosfn=(id,done)=>{
    const {todos}=this.state
    const newtodos=todos.map(todoobj=>{
        if(todoobj.id===id)return {...todoobj,done}
        // 修改对象其实也是合并对象，只不过是：当几个对象中含有同名参数时，后面的会把前面同名属性值覆盖掉。
        else return todoobj
    })
    console.log(newtodos,'newtodos')
    this.setState({todos:newtodos})
  }
  deletetodosfn=(id)=>{
    const {todos}=this.state
    const newtodos=todos.filter(item=>item.id!==id)
    this.setState({todos:newtodos})
  }
  checkAllfn=(done)=>{
      console.log(done,'done')
      const {todos}=this.state
      const newtodos=todos.map(item=>{
          return {...item,done}
      })
      this.setState({todos:newtodos})
  }
  claerAllfn=()=>{
    const {todos}=this.state
    const newtodos=todos.filter(item=>!item.done)
    this.setState({todos:newtodos})
  }
  render() {
      const {todos}=this.state
    return (
      <div id="root">
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addtodos={this.addtodosfn} />
            <Item todos={todos} updatetodos={this.updatetodosfn} deletetodosfn={this.deletetodosfn}/>
            <Footer todos={todos}  checkAll={this.checkAllfn} claerAllfn={this.claerAllfn}/>
          </div>
        </div>
      </div>
    );
  }
}
