import react, {Component} from 'react';
import { Button ,Input, List } from 'antd';
//当一个组件中只有一个render函数，可以用无状态组件来定义，无状态组件其实就是一个函数
//当使用无状态组件来定义的时候，这个函数中的props参数（从父组件传递过来的参数），此时，this.props.的方法就可以用props代替
//无状态组件优势：性能较高（不会多执行生命周期函数等）
//当当前组件没有复杂的逻辑可以选择使用无状态组件
const TodoListUI = (props) =>{
  return (
    <div>
        <div>
          <Input 
            value={props.inputValue}//
            placeholder="todo info"
            onChange={props.handleInputChange}
          />
          <Button type="primary" onClick={props.handleBtnClick}>按钮</Button>
        </div>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item,index) => (<List.Item onClick={(index)=>{props.handleItemDelete(index)}}>{item}</List.Item>)}
        
        />
      </div>
  ) 
}
//普通组件
// class TodoListUI extends Component {
//   render(){
//     return (
//       <div>
//         <div>
//           <Input 
//             value={this.props.inputValue}
//             placeholder="todo info"
//             onChange={this.props.handleInputChange}
//           />
//           <button type="primary" onClick={this.props.handleBtnClick}></button>
//         </div>
//         <List
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item,index) => (<List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
        
//         />
//       </div>
//     )
//   }
// }
export default TodoListUI;