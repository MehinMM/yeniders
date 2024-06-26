import './style.css';
import {Nav,Box} from '../../components/index';
import {InfoCircleOutlined,MailOutlined} from '@ant-design/icons';

const items = [
  {
    label: 'Haqqimizda',
    key: '0',
    icon: <InfoCircleOutlined />
  },
  {
    label: 'Elaqe',
    key: '1',
    icon: <MailOutlined />,
    // disabled: true,
  }

];


const Contact = () => {
  return (

    <div className='contact'>
       <Nav nav={items} reng='green' menurng='purple'>
        QrupB
      </Nav> 

   

      <h1>Contact Page</h1>
      <Box/>
    </div>
  )
}

export default Contact;
