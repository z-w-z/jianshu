import React from "react"
import { connect } from 'react-redux'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch ,
    Addition,
    Button ,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
} from  './style'
import {actionCreators} from './store'
const  Header = (props) =>{

       const getList =(show) =>{
        if(show){
            return(
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfo>
            )

        }else {
            return null;
        }
    }
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
                    { getList(props.focused) }
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
        focused:state.get("header").get("focused"),
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        handleFocused(){
          dispatch(actionCreators.searchFocus())
        },
        handleBlur(){

            dispatch(actionCreators.searchBlur())
    }
    }
}
export default connect( mapStateToProps, mapDispathToProps)(Header);