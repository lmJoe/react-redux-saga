import React,{Component,Fragment} from 'react';
import PropTypes from 'prop-types';//引入propTypes的强校验工具
class TodoItem extends Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render(){
    const {content} = this.props;
    //JSX先生成一个js对象(即虚拟DOM)，再渲染一个真实的DOM，下方的div标签不是一个真实DOM 只是一个js对象
    return (
      <div onClick={this.handleClick}>
        {content.channelName}
      </div>
    )
  }
  handleClick(){
    const { deleteItem,index } = this.props;
    //子组件删除父组件数组的功能
    deleteItem(index);
  }
}
//对TodoItem的对象做属性校验
TodoItem.propTypes = {
  content:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),//校验content的类型是否为括号中数组中的任意一个
  deleteItem:PropTypes.func,//校验deleteItem必须是一个function函数
  index:PropTypes.number,//校验index必须是一个number
}
export default TodoItem;