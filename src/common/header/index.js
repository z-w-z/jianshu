import React, { Component } from "react"
import { HeaderWrapper,Logo,Nav,NavItem,NavSearch ,Addition,Button ,SearchWrapper} from  './style'
class Header extends Component{
    render() {
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
                        <NavSearch ></NavSearch>
                        <span className="iconfont">&#xe64d;</span>
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
        )

     }



}
export  default  Header;