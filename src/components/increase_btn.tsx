import React, { useState } from 'react';
import './increase_btn.scss'

const Increase_Btn = ({increaseNumber}: any) => {
    

    return(
    <div>
        <a className='button1' onClick={increaseNumber}>
            Click me
        </a>
    </div>
    );
}
export default Increase_Btn;