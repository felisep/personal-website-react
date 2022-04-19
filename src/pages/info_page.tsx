import React, { useState } from 'react';
import './info_page.scss'
import IncreaseBtn from '../components/increase_btn'

const InfoPage = () =>{
  const [count, setCount] = useState(0);

  const counter = () => setCount(count + 1)

  return (
    <div className='info_container'>
      <p>Welcome to the information page</p>
      <div>
        <p>This is a button element created with function</p>
        <IncreaseBtn 
          increaseNumber={ counter }
        />
        <p>You clicked {count} times</p>
      </div>
    </div>
  );
}

export default InfoPage;