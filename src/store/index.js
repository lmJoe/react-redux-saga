import { createStore, applyMiddleware, compose} from 'redux';//引入 createStore方法
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import todoSagas from './sagas'
const sagaMiddleware = createSagaMiddleware()
//以下为redux的配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__({}):compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  //创建一个redux-saga的js文件用于防止异步逻辑
);
const store = createStore(
  reducer,enhancer
);//实例化这个方法，传入参数reducer
sagaMiddleware.run(todoSagas)
export default store