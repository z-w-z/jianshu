import React from "react"
import { connect } from 'react-redux'
import { HeaderWrapper,Logo,Nav,NavItem,NavSearch ,Addition,Button ,SearchWrapper} from  './style'
const  Header = (props) =>{
    return (
        <HeaderWrapper>
            <Logo href={"/"}/>
            <Nav>
                <NavItem className='left active '>首页</NavItem>
                <NavItem className='left'>下载APP</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <NavSearch
                        className = {props.focused ? 'focused ' : ''}
                        onFocus={props.handleFocused}
                        onBlur = {props.handleBlur}
                    ></NavSearch>
                    <span className = {props.focused ? 'focused iconfont' : 'iconfont'}>&#xe64d;</span>
                </SearchWrapper>
                <Addition >
                    <Button className='reg'>注册</Button>
                    <Button className='writting'>
                        <i className="iconfont">&#xe62b;</i>
                        写文章
                    </Button>
                </Addition>
            </Nav>
        </HeaderWrapper>
    );
}

const mapStateToProps = (state) => {
    return {
        focused:state.focused,
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        handleFocused(){
          const action = {
              type:'search_fucsed'
          }
          dispatch(action)
        },
        handleBlur(){
            const action = {
                type:'search_blur'
            }
            dispatch(action)
    }
    }
}
export default connect( mapStateToProps, mapDispathToProps)(Header);