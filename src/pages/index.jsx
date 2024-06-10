import './style.css';
import 'antd/dist/reset.css';
import { Button, Result } from 'antd';
import { BrowserRouter, Routes, Route,Navigate,Outlet,Link } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import Profile from './Profile';

const App = () => {
  return (
   <BrowserRouter>

     <Routes>
        <Route path='/' element={<Outlet/>}>
            <Route index element={<Home/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='profile' element={<Profile/>} />
        </Route>

        <Route path='*' element={<Navigate to='/404'/>}/>
        <Route path='404' element={ <Result
    status="404"
    title="Error 404"
    subTitle="Xahis edirik ki,biraz sonra yeniden cehd edin."
    extra={<Link to='/contact'><Button type="primary">Ana Sehife</Button></Link>}
  />}/>
        
     </Routes>
   
   

   </BrowserRouter>
  )
}

export default App;
