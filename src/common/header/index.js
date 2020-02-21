import React ,{ Component }from "react"
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

class Header extends Component{

    getList(){
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];

        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if( focused  || mouseIn ){
            return(
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() => handleChangePage(page, totalPage)}>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )

        }else {
            return null;
        }

    }
    render() {
        const { focused,handleFocused,handleBlur,list } = this.props
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
                            className = {focused ? 'focused ' : ''}
                            onFocus={()=>handleFocused(list)}
                            onBlur = {handleBlur}
                        ></NavSearch>
                        <span className = {focused ? 'focused iconfont' : 'iconfont'}>&#xe64d;</span>
                        { this.getList() }
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

}

const mapStateToProps = (state) => {
    return {
        focused:state.get("header").get("focused"),
        list:state.getIn(['header',"list"]),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        handleFocused(list){
            console.log(list)
            if(list.size == 0){
                dispatch(actionCreators.getList())
            }
          dispatch(actionCreators.searchFocus())
        },
        handleBlur(){
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalPage){
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1))
            }else if(page = totalPage){
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}
export default connect( mapStateToProps, mapDispathToProps)(Header);