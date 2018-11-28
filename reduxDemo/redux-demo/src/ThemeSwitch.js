import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class ThemeSwitch extends Component{
    static contextTypes={
        themeColor:PropTypes.string,
        onSwitchColor:PropTypes.func
    }
    constructor(){
        super()
        this.state = {themeColor : ''}
    }

    handleSwitchColor(color){
        if(this.props.onSwitchColor){
            this.props.onSwitchColor(color)
        }
    }
    render(){
        return(
            <div>
                <button style={{color:this.props.themeColor}} 
                onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
                <button style={{color:this.props.themeColor}} 
                onClick={this.handleSwitchColor.bind(this, 'blue')}>blue</button>
            </div>
        )
    }
}

// 在这里不仅要获取context的内容，还要修改，所以之前的connect是不够用的，因此需要多加一个修改函数
const mapDispatchToProps = (dispatch)=>{
    return {
        onSwitchColor:(color)=>{
            dispatch({type:'CHANGE_COLOR', themeColor:color})
        }
    }
}

const mapStateToProps = (state) =>{
    return {
        themeColor: state.themeColor
    }
}

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch