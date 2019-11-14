import React, { Component } from 'react'
import { Tabs, NavBar, Icon } from 'antd-mobile';
import './AppInspiration.css';

const tabs = [
    { title: '推荐' },
    { title: '冬季' },
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户外' },
    { title: '个性色彩' }
];
export default class AppInspiration extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#ffffff' }}>
                <NavBar
                    style={{ backgroundColor: '#3fcccb', color: '#ffff' }}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                >灵感</NavBar>

                <Tabs style={{ float: 'left' }} tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ backgroundColor: '#eeeeee' }}>
                        <div>
                            <img className='left1' src={require('../images/one_06.jpg')} />
                            <img className='right1' src={require('../images/two_03.jpg')} />
                            <img className='left1' src={require('../images/three_11.jpg')} />
                            <img className='right1' src={require('../images/four_12.jpg')} />
                            <img className='left1' src={require('../images/one_06.jpg')} />
                            <img className='right1' src={require('../images/two_03.jpg')} />
                        </div>
                        <div className='left2'>
                        </div>
                        <div className='right2'>
                        </div>
                        <div className='left3'>
                        </div>
                        <div className='right3'>
                        </div>

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>

                    </div>
                </Tabs>

            </div>
        )
    }
}
