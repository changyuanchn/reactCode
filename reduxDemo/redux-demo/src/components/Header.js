import React, {Component} from 'react'
import PropTypes from 'prop-types'


export default class Header extends Component {
    // 添加访问共享状态store的一些前提
    static contextTypes = {
        themeColor: PropTypes.string
    }

    render(){
        return (
            <h1 style={{color:this.props.themeColor}}>React Header</h1>
        )
    }
}