import React, {Component} from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateToProps,mapDispatchToProps) =>(WrappedComponent) =>{
    class Connect extends Component{
        static contextTypes = {
            store: PropTypes.object
        }

        constructor(){
            super()
            this.state = { allProps:{} }
        }

        // 添加监听数据变化然后进行渲染
        componentWillMount(){
            const {store} = this.context
            this._updateProps()
            store.subscribe(()=> this._updateProps())
        }

        _updateProps(){
            const {store} = this.context
            let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props): {} //防止mapStateToProps没有传入
            let dispatchProps = mapDispatchToProps? mapDispatchToProps(store.dispatch, this.props) : {}
            this.setState({
                allProps:{
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            })
        }

        render(){
            return <WrappedComponent {...this.state.allProps} />
        }
    }
    return Connect
}

// 添加Provider类，来清理index.js，这样就把context从index里面割离开来了
// Provider 做的事情也很简单，它就是一个容器组件，会把嵌套的内容原封不动作为自己的子组件渲染出来。它还会把外界传给它的 props.store 放到 context，这样子组件 connect 的时候都可以获取到。
export class Provider extends Component{
    static propTypes = {
        store : PropTypes.object,
        children: PropTypes.any
    }

    static childContextTypes = {
        store:PropTypes.object
    }

    getChildContext(){
        return {
            store: this.props.store
        }
    }

    render (){
        return (
            <div>{this.props.children}</div>
        )
    }

}