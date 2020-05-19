import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import { Switch } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class CustomLayout extends React.Component {
   state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };


    render() {

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div style ={{height: '32px',background: 'orange',margin: '16px', textAlign:'center'}}>
                  <div style={{marginTop:'20px', padding: '4px', color:'white', fontSize:'20px', fontFamily:'cursive'}}>
                    <i>RedBlogs</i>
                  </div>
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      
                {
                    this.props.isAuthenticated ?
    
                    <Menu.Item key="2" onClick={this.props.logout}>
                       <Icon type="logout" /> {this.state.collapsed? '' : 'logout'}
                    </Menu.Item>
    
                    :
    
                    <Menu.Item key="2">
                        <Link to="/login"><Icon type="login" /> {this.state.collapsed? '' : 'login'}</Link>
                    </Menu.Item>
                }
    
                    <Menu.Item key="1">
                        <Link to="/"><Icon type="read" />{this.state.collapsed? '' : 'Posts'}</Link>
                    </Menu.Item>
                    
                </Menu>
               </Sider>
              <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 , textAlign:'center', background:'white'}} >
                  <span style={{fontSize:'30px', fontFamily:'cursive', color:'orange'}}><i>Dark mode</i></span>

                  <Switch defaultChecked onChange={this.onChange} />
                  <span style={{fontSize:'30px', fontFamily:'cursive', color:'orange'}}><i>light mode</i></span>
                </Header>
                  <Content style={{ padding: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/">List</Link></Breadcrumb.Item>
                </Breadcrumb>
                
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                 Made by Sundaram Dubey
                </Footer>
            </Layout>
          </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));