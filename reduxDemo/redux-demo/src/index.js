import React, { Component } from 'react'

import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import './index.css'
import { Provider } from './react-redux';

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

function createStore(reducer){
    let state=null
    const listeners = []
    const getState = ()=> state
    const subscribe = (listener) => listeners.push(listener)
    const dispatch = (action) =>{
        state = reducer(state,action)
        listeners.forEach( (listener) => listener() )
    }
    dispatch({}) // initialise state
    return {getState, dispatch, subscribe}
}

// 这里定义一下共享状态store
const store = createStore(themeReducer)

ReactDOM.render(
    <Provider store={store}>
      <Index />
    </Provider>,
     document.getElementById('root'));
