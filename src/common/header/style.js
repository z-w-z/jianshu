import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
 export  const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom : 1px solid  #f0f0f0;
`
export  const Logo = styled.a`
    position:absolute;
    top:0px;
    left;0px;
    display:block;
    width:100px;
     height:56px;
    border-bottom : 1px solid  #f0f0f0;
    background: url(${logoPic});
    background-size:contain
`
export  const Nav = styled.div`
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin: 0 auto;
`
export const  NavItem = styled.div`
    line-height:56px;
    padding: 0px 15px;
    font-size:17px;
    color:#333;
    &.left {
        float:left;
    }
    &.right {
        float:right;
    }
    &.active{
        color: #ea6f5a;
    }
`

export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	.iconfont{
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
	}
`;
export const NavSearch = styled.input.attrs({placeholder:"搜索"})`
   width:160px;
   height:38px;
   padding:0 20px;
   margin-top:9px;
   margin-left:20px;
   box-sizing:border-box;
   border:none;
   outline:none;
   border-radius:19px;
   background:#eee; 
   font-size:15px;
   &::placeholder{
    color:#999;
   }
`
export const Addition = styled.div`
    position:absolute;
    right:0px;
    top:0px;
    height:56px; 
`
export const Button = styled.div`
    float:right;
    margin-top;9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    font-size:14px;
    border:1px solid #ec6149;
    &.reg{
    color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`