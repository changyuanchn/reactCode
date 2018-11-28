import { connect } from 'react-redux'
import ThemeSwitch from '../components/ThemeSwitch'

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

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)