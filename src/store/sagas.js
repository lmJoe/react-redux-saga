import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';
import store from '.';
//takeEvery是redux-saga提供的方法
//generator函数
function* getInitList(){
  
  const res = yield axios.get('http://t.yushu.im/v2/movie/subject/26683723');
  const action  = initListAction(res);
  console.log("111",action);
  yield put(action);
  //以上为ajax请求成功
  //请求失败处理结果
  try {
    //成功
    const res = yield axios.get('http://t.yushu.im/v2/movie/subject/26683723');
    const action  = initListAction(res);
    yield put(action);
  } catch(e) {
    console.log("请求失败")
  }
}
//一定要导出一个generator函数todoSagas
function* todoSagas() {
  //此处为当此处接收到一个action的类型为GET_INIT_LIST的时候，调用一个名为getInitList()的generator函数，这个函数会渠道数据后把这个数据结果再创建一个action,派发给store,然后store指给了reducer,reducer中判断派发过来的action的类型为INIT_LIST_ACTION，则reducer.js中list中的内容替换为异步获取过来的action的内容
  yield takeEvery(GET_INIT_LIST, getInitList);
  
}

export default todoSagas;