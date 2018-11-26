import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import './index.css'

class Index extends Component{

    // 标准写法，才能使子组件能够访问到共享状态store
    static childContextTypes = {
        store : PropTypes.object
    }
    getChildContext(){
        return {store}
    }

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

ReactDOM.render(<Index />, document.getElementById('root'));
