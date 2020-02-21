import React,{ Component } from 'react'
import List from  './components/List'
import Recommend from  './components/Recommend'
import Topics from  './components/Topics'
import Writers from  './components/Writers'
import { HomeWrapper,
    HomeLeft,
    HomeRight,
    HomeTopics,
    HomeList,
    HomeRecommend,
    HomeWriters,
} from "./styled"

class Home extends Component{
    render() {
        return(
                <HomeWrapper>
                    <HomeLeft>
                        <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4897/ffa31eee56eb87af5d1074a395c55ca816450738.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                        <Topics></Topics>
                        <List></List>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend></Recommend>
                        <Writers></Writers>
                    </HomeRight>
                </HomeWrapper>
        )
    }

}
export default Home;