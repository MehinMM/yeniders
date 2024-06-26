import './style.css';
import './style.jsx';
import {nature} from '../../sekil/sekilE/index';
import { Row, Col,Menu,Layout}from 'antd';
import { nurane } from '../../pages/Home/style.jsx';
import { Children } from 'react';
const { Header} = Layout;
const {hdr,mn} = nurane;



const Nav = ({nav,reng,menurng,children}) => {
  return (
    <Header style={hdr}>
    <Row>
      <Col span={3} style={{backgroundColor:reng}}>

    {children ? children : <img src={nature} alt="" className='home-sekil1'  />}
   
   
  
      </Col>
      
      <Col span={21} style={{backgroundColor:menurng}}>
    
      
      
       <Menu style={mn}
       mode="horizontal" items={nav} selectedKeys={['1']} className='menu-home'
       />
      
      
      
      </Col>

    </Row>

</Header>

  )
}

export default Nav;
