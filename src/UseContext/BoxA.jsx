import React, { useState, useContext, createContext } from 'react'
import BoxB from './BoxB'

export const UserContext = createContext()

function BoxA() {

    const [user, setUser] = useState("Bro👋")

    return (
        <div className='box'>
            BoxA
            <h2>{`Hello ${user}`}</h2>
            < UserContext.Provider value={user}>
                <BoxB user={user} />
            </UserContext.Provider>


        </div>
    )
}

export default BoxA