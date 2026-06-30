import React from 'react'

function List() {
    const fruits = ["Apple", "Banana", "Orange", "Mango"]
    const newList = fruits.map(fruit => <li>{fruit}</li>)

    return (
        <div>
            <ul>{newList}</ul>
        </div>
    )
}

export default List