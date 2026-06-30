import React from 'react'

function Greet(props) {
    return (
        <div>
            {props.isLoggedIn ? <h2>Hello {props.userName}</h2>
                : <h2>Please login</h2>}
        </div>
    )
}

export default Greet