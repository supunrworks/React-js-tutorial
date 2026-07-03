// The useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect runs on every render. That means that when the count changes, a render happens

import React, { useEffect, useState } from 'react'

function Count() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("red")

    useEffect(() => {
        document.title = `Count: ${count} ${color}`   //this code run
    }, [count, color])   // When this change/render
 
    const handleButton = () => {
        setCount(c => c + 1)
    }

    const changeColor = () => {
        setColor(c => c === "red" ? "blue" : "red")
    }

    return (
        <div>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={handleButton}>Add +</button>
            <button onClick={changeColor}>Change color</button>
        </div>
    )
}

export default Count