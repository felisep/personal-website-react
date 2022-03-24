import React, { useState } from 'react';

const Increase_Btn = () => {
    const [count, setCount] = useState(10);

    return(
    <div>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        <p>You clicked {count} times</p>
    </div>
    );
}
export default Increase_Btn;