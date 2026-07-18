// onChange = Event handler used primarily with form elements.
//            Triggers a function every time the value of the input changes.

import React from 'react'

function Forms() {
    return (
        <>
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" placeholder='Enter Your Name...' name='name' id='name' />
                <br /> <br />
                <label htmlFor="male">Male</label>
                <input type="radio" name='gender' id='male' value= 'male'/> 
                <br />
                <label htmlFor="female">Female</label>
                <input type="radio" name='gender' id='female' value= 'female'/>
                <br /><br />
                <label htmlFor="sub1">ICT</label>
                <input type="checkbox" name="sub1" id="sub1" value='ict' /> 
                <br />
                <label htmlFor="sub2">Maths</label>
                <input type="checkbox" name="sub2" id="sub2" value='maths' />
                <br />
                <label htmlFor="sub3">Science</label>
                <input type="checkbox" name="sub3" id="sub3" value='science' />
            </form>
        </>

    )
}

export default Forms