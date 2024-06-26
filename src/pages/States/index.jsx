import React, {useState} from 'react';
import './style.css';

const States = () => {


  const [count,setCount] = useState(40);
  const [faiz,setFaiz] = useState(10);

  const faizDeyis=(e)=>{
        setFaiz(e.target.value)
  }

    const azalt=()=>{
   
        setCount(n=>n-1)
      
    }

    const artir=()=>{
     
       setCount(n=>n+1)
       
    }


  return (
    <div className='stat'>
      <h1>Count : {count}</h1>
      <button onClick={azalt}>-</button>
      <button onClick={artir}>+</button>

     

      <input type="number" value={faiz} onChange={faizDeyis}/>
      <h2>Faiz: {(count * faiz)/100} </h2>

    </div>
  )
}

export default States;