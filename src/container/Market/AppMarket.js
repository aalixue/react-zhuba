import React, { Component } from 'react'
import { NavBar, Carousel, Flex, SearchBar } from 'antd-mobile';
import './AppMarket.css'

export default class AppMarket extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#ffffff', position: 'relative' }}>
                <NavBar
                    style={{ backgroundColor: '#3fcccb', color: '#ffff' }}
                    rightContent={[
                        <i style={{ fontSize: 22, marginRight: '16px' }} className='iconfont icon-icon-test'></i>
                    ]}
                >商城</NavBar>
                <div style={{ position: 'absolute', zIndex: 1, left: 0, width: '100%', height: '18%' }}>
                    <SearchBar placeholder="输入关键字搜索" maxLength={8} style={{ background: '#000', opacity: '0.5' }} />
                </div>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >

                    {[1, 2, 3, 4].map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%' }}
                        >
                            <img
                                src={require(`../images/store-banner1.png`)}
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
                <div style={{ marginTop: 20,paddingBottom: 20 }}>
                    <img className='cfirst' src={require('../images/circle_03.jpg')} />
                    <img className='csecond' src={require('../images/circle_05.jpg')} />
                    <img className='cthird' src={require('../images/circle_07.jpg')} />
                    <img className='cfourth' src={require('../images/circle_09.jpg')} />
                    <img className='cfifth' src={require('../images/circle_11.jpg')} />
                </div>
                <Flex>
                    <Flex.Item className='desk'>桌</Flex.Item>
                    <Flex.Item className='bed'>床</Flex.Item>
                    <Flex.Item className='chair'>椅</Flex.Item>
                    <Flex.Item className='table'>几</Flex.Item>
                    <Flex.Item className='cupboard'>柜</Flex.Item>
                </Flex>

                <div style={{ marginTop: 20 }}>
                    <img className='cfirst' src={require('../images/circle_18.jpg')} />
                    <img className='csecond' src={require('../images/circle_19.jpg')} />
                    <img className='cthird' src={require('../images/circle_21.jpg')} />
                    <img className='cfourth' src={require('../images/circle_22.jpg')} />
                    <img className='cfifth' src={require('../images/circle_23.jpg')} />
                </div>
                <Flex>
                    <Flex.Item className='shelf'>书架</Flex.Item>
                    <Flex.Item className='sofa'>沙发</Flex.Item>
                    <Flex.Item className='gear'>家居饰品</Flex.Item>
                    <Flex.Item className='outdoor'>户外家具</Flex.Item>
                    <Flex.Item className='classify'>全部分类</Flex.Item>
                </Flex>

                <div style={{ backgroundColor: '#eeeeee' }}>
                    <img className='next1' src={require('../images/next_03.jpg')} />
                    <img className='next2' src={require('../images/next_05.jpg')} />
                    <div className='left'>
                        <p style={{ color: '#686868' }}>Top Art Studio 欧式风格精细...</p>
                        <p>￥ 39.95</p>
                    </div>
                    <div className='right'>
                        <p style={{ color: '#686868' }}>顺顺工艺欧式风格塑料外框黑...</p>
                        <p>￥ 83.99</p>
                    </div>

                </div>

                <Flex>
                    <Flex.Item>
                        <img className='store' src={require('../images/store-d3.png')} />
                    </Flex.Item>
                </Flex>

            </div>
        )
    }
}
