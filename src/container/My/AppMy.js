import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';

export default class My extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#ffffff'}}>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#ffff'}}
                    rightContent={[
                        <i style={{fontSize:22,marginRight: '16px'}} className='iconfont icon-shezhi'></i>
                    ]}
                >我的</NavBar>
            </div>
        )
    }
}
