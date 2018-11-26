import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
    // 添加访问共享状态store的一些前提
    static contextTypes = {
        store: PropTypes.object
    }

    constructor(){
        super()
        this.state = {themeColor:''}
    }

    _updateThemeColor(){
        const {store} = this.context
        const state = store.getState()
        this.setState(
            {
                themeColor: state.themeColor
            }
        )
    }
    componentWillMount(){
        const {store} = this.context
        this._updateThemeColor()
        store.subscribe(()=>this._updateThemeColor())
    }

    render(){
        return (
            <h1 style={{color:this.state.themeColor}}>React Header</h1>
        )
    }
}

export default Header