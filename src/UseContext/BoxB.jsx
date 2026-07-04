import React from 'react'
import BoxC from './BoxC'

function BoxB() {
    return (
        <div className='box'>
            BoxB
            <BoxC />
        </div>
    )
}

export default BoxB