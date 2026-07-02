import React, { useState } from 'react'

function Updater() {

    const [phone, setPhone] = useState({
        name: "iPhone",
        model: "17 pro max",
        year: 2025
    });

    function handleNameChange(event) {
        setPhone(c => ({ ...c, name: event.target.value }))   //Updater function way
    }
    function handleModelChange(event) {
        setPhone({ ...phone, model: event.target.value })    //Normal way
    }
    function handleYearChange(event) {
        setPhone({ ...phone, year: event.target.value })
    }

    return (
        <div>
            <p>Your phone is: {phone.name} {phone.model} {phone.year}</p>

            <label>Name: </label><input type="text" value={phone.name} onChange={handleNameChange} /> <br />
            <label>Model: </label><input type="text" value={phone.model} onChange={handleModelChange} /> <br />
            <label >Year:</label> <input type="number" value={phone.year} onChange={handleYearChange} />


        </div>
    )
}

export default Updater