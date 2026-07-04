import React from 'react'
import { useContext } from "react"
import { UserContext } from './BoxA'


function BoxC() {
    const user = useContext(UserContext)
    return (
        <div className='box'>
            BoxC 
            <h2>Hi {user}</h2>
        </div>
    )
}

export default BoxC