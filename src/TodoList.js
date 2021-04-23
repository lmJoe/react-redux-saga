//该组件内容为一个编写组件
import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem';
import TodoListUI from './TodoListUI';
// import axios from 'axios';
// import store from './store/index.js';
// import Test from './Test';
import './style.css' 
import 'antd/dist/antd.css';
import store from './store/index.js';
import { prettyDOM } from '@testing-library/react';
import { Button ,Input, List } from 'antd';
import { getInputChangeAction , getAddItemAction , getDeleteItemAction, getInitList} from './store/actionCreators';
class TodoList extends Component{
  constructor(props){
    super(props);
    //获取从store中传递过来的state值
    this.state = store.getState();
    console.log("store传递过来的值",this.state)
    //定义数据
    // this.state = {
    //   inputValue:'',//input中的数据
    //   list:[],//列表数据
    // }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render(){
    // return (
    //   //Fragment是一个占位符
    //   <Fragment>
    //     <div>
    //     {/* htmlFor光标聚焦 */}
    //       <label htmlFor="insertArea">输入内容</label>
    //       <input
    //         id="insertArea"
    //         className="input" 
    //         value = {this.state.inputValue}
    //         onChange = {this.handleInputChange}
    //       />
    //       <button onClick={this.handleButtonClick}>按钮</button>
    //     </div>
    //     <ul>
    //       {this.getTodoItem()}
    //     </ul>
    //     {/* <Test  content={this.state.inputValue}/> */}
    //   </Fragment>
    // )
    return (
      <TodoListUI  
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange = {this.handleInputChange}
        handleBtnClick = {this.handleButtonClick}
        handleItemDelete = {this.handleItemDelete}
      />
    )
  }
  componentDidMount(){
    //将返回结果传给store
    const action = getInitList();
    store.dispatch(action);
    console.log("11",action);
  }
  getTodoItem () {
    return this.state.list.map((item,index)=>{
      return (
        <TodoItem 
          key={index}
          content={item} 
          index={index}
          deleteItem = {this.handleItemDelete.bind(this,index)}
        />
      )
    })
  }
  //输入功能
  handleInputChange(e){
    const value = e.target.value
    this.setState(() => ({
      inputValue:value,
    }));
    console.log("e",e.target.value)
    //改变state中inputValue的值
    // const action = {
    //   type:CHANGE_INPUT_VALUE,//type描述做的事情
    //   value:e.target.value,
    // }
    //上面的方法封装在actionCreators文件中
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);
  }
  handleStoreChange(){
    this.setState(store.getState());
  }
  //新增功能
  handleButtonClick(){
    this.setState((prevState)=>({
      list :[...prevState.list,prevState.inputValue],//...this.state.list是一种ES6展开运算符的写法，把之前已经有的数据展开显示出来
      inputValue:'',
    }))
    // const action = {
    //   type:ADD_TODO_ITEM,
    // }
    //上面的方法封装在actionCreators文件中
    const action = getAddItemAction()
    store.dispatch(action);
  }
  //删除功能
  handleItemDelete(index){
    // const list = [...this.state.list];
    // list.splice(index,1);
    // this.setState({
    //   list:list
    // })
    //优化同上方两个事件,此处使用接收一个函数,prevState作用同上
    this.setState((prevState)=>{
      const list = [...prevState.list];
      list.splice(index,1);
      return {list}
    });
    //删除store中的值
    // const action = {
    //   type:DELETE_TODO_ITEM,
    //   index:index,
    // }
    //上面的方法封装在actionCreators文件中
    const action = getDeleteItemAction(index)
    store.dispatch(action);
  }
}
export default TodoList;