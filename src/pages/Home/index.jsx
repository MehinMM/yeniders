import './style.css';
import { nurane } from './style';
import { Layout} from 'antd';
import {PhoneOutlined,MailOutlined,SettingOutlined} from '@ant-design/icons';

import { Nav } from '../../components';
const { Content, Footer } = Layout;
const {cnt} = nurane;


const items = [
  {
    label: 'Haqqimizda',
    key: '0',
    icon: <PhoneOutlined />
  },
  {
    label: 'Elaqe',
    key: '1',
    icon: <MailOutlined />,
    disabled: false,
  },
  {
    label: 'Xidmetlerimiz',
    key: '2',
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
     
     <Nav nav={items}/>

      <Content style={cnt}> </Content>

      <Footer>
        Footer
      </Footer>

    </Layout>
  );
};

export default Home;