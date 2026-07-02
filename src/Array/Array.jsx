import React, { useState } from 'react'

function Array() {

    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"])

    function handleClick() {
        const addItem = document.getElementById("inputItem").value
        document.getElementById("inputItem").value = ""
        setFoods([...foods, addItem])
    }

    return (
        <div>
            <h2>List of Fruits</h2>
            <ul>
                {foods.map((food, id) => <li key={id}>{food}</li>)}
            </ul>
            <input type="text" id='inputItem' placeholder='Enter your food' />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Array