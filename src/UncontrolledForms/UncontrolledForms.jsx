// Uncontrolled Forms: A form where the input values are managed by the DOM instead of React state, 
// typically accessed using ref.

import React from 'react'
import { useRef } from 'react'

function UncontrolledForms() {

    const mailRef = useRef()
    const passRef = useRef()

    const handlSubmit = (e) => {
        e.preventDefault()

        const data = {
            Email: mailRef.current.value,
            Password: passRef.current.value
        }
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handlSubmit}>
                <label htmlFor="name">Email: </label>
                <input type="text" placeholder='Enter your email' ref={mailRef} />
                <br />
                <label htmlFor="name">Password: </label>
                <input type="password" placeholder='Enter your password' ref={passRef} />
                <br /> <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UncontrolledForms
