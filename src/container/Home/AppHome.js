import React, { Component } from 'react'
import { Tabs, NavBar, Icon, Carousel, Flex, WhiteSpace } from 'antd-mobile';
import './AppHome.css';

export default class AppHome extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#ffffff' }}>
                <NavBar
                    style={{ backgroundColor: '#3fcccb', color: '#ffff' }}
                    rightContent={[
                        <Icon key="0" type="text" style={{ marginRight: '16px' }} />,
                    ]}
                >住吧家局</NavBar>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {[1, 2].map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%' }}
                        >
                            <img
                                src={require(`../images/banner-${val}.png`)}
                                alt=""
                                style={{ width: '100%', height: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <div style={{ paddingTop: 20,paddingBottom:20,background:'#eeeeee'}}>
                    <img className='first' src={require('../images/home-1.png')} />
                    <img className='second' src={require('../images/home-2.png')} />
                    <img className='third' src={require('../images/home-3.png')} />
                </div>

                <div className='recommend'>
                    <span className='blue'></span>
                    <span className='word'>热门推荐</span>
                </div>

                <Flex>
                    <Flex.Item>
                        <img className='hot' src={require('../images/hot.jpg')} />
                    </Flex.Item>
                </Flex>

            </div>
        )
    }
}
