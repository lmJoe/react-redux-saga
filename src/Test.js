import React,{Component} from 'react';
class Test extends Component{
  //当父组件的render的函数被执行时，他的子组件的render都将被重新运行
  //父组件的props的内容发生改变时，子组件的props的内容也会发生改变
  render() {
    console.log('test.render');
    return <div>{this.props.content}</div>
  }
 
}
export default Test;