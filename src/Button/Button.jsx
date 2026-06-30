import React from 'react'

function Button() {

    // const handleClick = () => (console.log("Ouch😖") ) 
    const handleClick = () => {console.log("Ouch😖") }  // use {} more than 1 line

    // -------------------------------------------------------------------------------------

    let count = 0
    const handleClick2 = (name) => {
        if (count < 3) {
            count++
            console.log(`${name} You clicked ${count} times `)
        }
        else {
            alert("Stop  clicking me")
        }
    }
    // ----------------------------------------------------------------------------------------

    const handleClick3 = (e) => {
        e.target.textContent = "SUBSCRIBED😊"
        e.target.style.backgroundColor = "red" 
    }

    return (
        <div>
            <button onClick={() => { console.log("Stop clicking me") }}>Click Me🔴</button>
            <br />

            <button onClick={() => handleClick2("Bro")}>Click</button>
            <br />
            
            <button onClick={handleClick3}>SUBSCRIBE</button>
        </div>
    )
}

export default Button