import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Header from './containers/Header'
import Content from './containers/Content'
import './index.css'

// 引入官方的react-redux, 删除自己实现的createStore,connect,Provider
// 在工程目录下使用 npm 安装 Redux 和 React-redux 模块：
// npm install redux react-redux --save

class Index extends Component{
    
    render(){
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

const themeReducer = (state, action) =>{
    if(!state) return {
        themeColor:'red'
    }
    switch(action.type){
        case 'CHANGE_COLOR' :
          return {
              ...state,
              themeColor:action.themeColor
          }
        default:
          return state
    }
}

// 这里定义一下共享状态store
const store = createStore(themeReducer)

ReactDOM.render(
    <Provider store={store}>
      <Index />
    </Provider>,
     document.getElementById('root'));
