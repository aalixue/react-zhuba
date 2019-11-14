import React from 'react'
import { TabBar } from 'antd-mobile';
import AppHome from './Home/AppHome';
import AppInspiration from './Inspiration/AppInspiration';
import AppMarket from './Market/AppMarket';
import AppMy from './My/AppMy';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: false,
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0,backgroundColor:'#ffffff' }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i style={{fontSize:20}} className='iconfont icon-home'></i>
            }
            selectedIcon={<i style={{fontSize:20}} className='iconfont icon-home'></i>
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
            <AppHome/>
          </TabBar.Item>
         
          <TabBar.Item
            icon={<i style={{fontSize:20}} className='iconfont icon-linggan'></i>
            }
            selectedIcon={<i style={{fontSize:20}} className='iconfont icon-linggan'></i>
            }
            title="灵感"
            key="Friend"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <AppInspiration/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:20}} className='iconfont icon-shouye'></i>
            }
            selectedIcon={<i style={{fontSize:20}} className='iconfont icon-shouye'></i>
            }
            title="商城"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
            <AppMarket />
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:20}} className='iconfont icon-wode'></i>}
            selectedIcon={<i style={{fontSize:20}} className='iconfont icon-wode'></i>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <AppMy />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
