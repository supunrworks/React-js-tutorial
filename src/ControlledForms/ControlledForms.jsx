// onChange = Event handler used primarily with form elements.
//            Triggers a function every time the value of the input changes.

// Controlled Form: React manages the form data using state (useState).

import React, { useState } from 'react'

function ControlledForms() {

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState()
    const [err, serErr] = useState("")

    const handleClick = (e) => {
        e.preventDefault()

        if (pass.length < 5) {
            serErr("Password should have more than 5 characters ")
            return;
        }
        serErr("")

        console.log({ name }, { mail }, { pass })
    }
    return (
        <>
            <form onSubmit={handleClick}>

                <label htmlFor="name">Name: </label>
                <input type="text" placeholder='Enter Your Name...' name='name' id='name' value={name}
                    onChange={(e) => { setName(e.target.value) }} />

                <p>Your name is: {name}</p>
                <br />

                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" placeholder='Enter Your Email...' onChange={(e) => { setMail(e.target.value) }} value={mail} />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="passsword" id="password" placeholder='Enter Your Password...' onChange={(e) => { setPass(e.target.value) }} value={pass} />
                
                <p style={{color:"red"}}>{err}</p>
                <br /> <br />
                {/* <label htmlFor="male">Male</label>
                <input type="radio" name='gender' id='male' value='male' />
                <br />
                <label htmlFor="female">Female</label>
                <input type="radio" name='gender' id='female' value='female' />
                <br /><br />
                <label htmlFor="sub1">ICT</label>
                <input type="checkbox" name="sub1" id="sub1" value='ict' />
                <br />
                <label htmlFor="sub2">Maths</label>
                <input type="checkbox" name="sub2" id="sub2" value='maths' />
                <br />
                <label htmlFor="sub3">Science</label>
                <input type="checkbox" name="sub3" id="sub3" value='science' /> */}

                <button type='submit '>Submit</button>

            </form>
        </>
    )
}

export default ControlledForms