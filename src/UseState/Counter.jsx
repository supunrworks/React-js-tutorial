// React hook = Special function that allows functional components
//                         to use React features without writing class components 
//                         (useState, useEffect, useContext, useReducer, and more...)                

// useState() = A React hook that allows the creation of a stateful variable
//                       AND a setter function to update its value in the Virtual DOM.
//                       [name, setName]


import React, { useState } from 'react'

function Counter() {

    const [name, setName] = useState()
    const [isMarried, setIsMarried] = useState(false)


    const updateName = () => {
        setName("Supun")
    }

    const updateStatus = () =>{
        setIsMarried(!isMarried)
    }
    

    return (
        <div>
            <p>Your name:{name}</p>
            <button onClick={updateName}>Update name</button>

            <p>Status:{isMarried ? "Yes" : "No"}</p>
            <button onClick={updateStatus}>Update status</button>
        </div>
    )
}

export default Counter