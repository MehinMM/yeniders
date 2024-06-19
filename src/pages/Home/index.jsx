import './style.css';

// import nature from '../../sekil/nature.jpg';
import {nature,orta} from '../../sekil/sekilE/index';
import { Layout, Row, Col,Menu} from 'antd';
import {InfoCircleOutlined,MailOutlined,SettingOutlined} from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

const items = [
  {
    label: 'Haqqimizda',
    key: 'mail',
    icon: <InfoCircleOutlined />
  },
  {
    label: 'Elaqe',
    key: 'app',
    icon: <MailOutlined />,
    // disabled: true,
  },
  {
    label: 'Xidmetlerimiz',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Nurane',
            key: 'setting:3',
          },
          {
            label: 'Nermin',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
    ),
  },
];

const Home = () => {

  return (

    <Layout>
      <Header style={{
      
        backgroundColor:'beige'
      }} >
          <Row>
            <Col span={3} >
            
            <img src={nature} alt="" className='home-sekil1' />
        
            </Col>
            
            <Col span={21}>
            
            
            
             <Menu mode="horizontal" items={items}
              style={{
              backgroundColor:'red',
              display:'flex',
              justifyContent:'flex-end'
              }}/>;
            
            
            
            </Col>

          </Row>

      </Header>

      <Content>
  
         <img src={orta} alt="" className='orta1' />
      
      </Content>
      
      <Footer>
        Footer
      </Footer>
    </Layout>
  );
};
export default Home;