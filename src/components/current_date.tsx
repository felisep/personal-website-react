import { cleanup } from '@testing-library/react'
import React, { useState, useEffect } from 'react'

const CurrentDate = () => {
    var [date, setDate] = useState(new Date())

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)     
        }
    });

    return (
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    );
}

export default CurrentDate