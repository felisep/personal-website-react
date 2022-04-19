import React from 'react';
import './increase_btn.scss'

const IncreaseBtn = ({increaseNumber}: any) => {
    

    return(
    <div>
        <button className='button1' onClick={increaseNumber}>
            Click me
        </button>
    </div>
    );
}
export default IncreaseBtn;