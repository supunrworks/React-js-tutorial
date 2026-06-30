import React from 'react'

function Objects(props) {
    const topicName = props.topic 
    const items = [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Phone", price: 500 },
        { id: 3, name: "Headset", price: 100 },
        { id: 4, name: "Watch", price: 50 }]

    // items.sort((a, b) => a.name.localeCompare (b.name))
    items.sort((a, b) => a.price - b.price)

    const expensiveItems = items.filter(items => items.price >= 500)


    // key  = unique id (key = {item.name}) -> When we add item with same name this cause an error. So we can use id
    const newItem = items.map(item => <li key={item.id}> {item.name} - ${item.price} </li>)
    const newExItem = expensiveItems.map(expensiveItem => <li key={expensiveItem.id}> {expensiveItem.name} - {expensiveItem.price}</li>)

    return (
        <div>
            <h1 className='topic'>{topicName}</h1>
            <ul>{newItem}</ul>
            <ul>{newExItem}</ul>
        </div>
    )
}

export default Objects



