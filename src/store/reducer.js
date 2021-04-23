import { CHANGE_INPUT_VALUE , ADD_TODO_ITEM , DELETE_TODO_ITEM ,INIT_LIST_ACTION} from './actionTypes'
//当前文件为存储整个项目中应用的数据
const defaultState = {
  inputValue:'123',
  list:[1,2,3],
};
//reducer是一个纯函数：纯函数是指：给固定的输入，就一定会有固定的输出，并且没有任何副作用
//reducer可以接收state，但是绝不能修改state
export default (state = defaultState,action) =>{
  //state存放的为整个存储数据中某个类别的信息,
  if(action.type === CHANGE_INPUT_VALUE){
    //对state做一个深拷贝的处理
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;//对原来的state中的inputValue进行改变为传进来的value得值
    return newState;//此处的newState返回给了store,store接收到了store使用新的数据替换老的数据
  }
  
  if(action.type === ADD_TODO_ITEM){
    //对state做一个深拷贝的处理
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === DELETE_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);//删除下标
    return newState;
  }
  if(action.type === INIT_LIST_ACTION){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
}