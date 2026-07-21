import React from 'react'
import { useForm } from 'react-hook-form'

function RHFex() {                                   // register → Connects an input to the form.
    const { register, handleSubmit } = useForm()     //handleSubmit → Collects and validates the form data when you submit.

    const submit = (data) => {                     // data is an object containing all the form values. values in ("email")/("password") inside the input
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>   {/* handleSubmit calls onSubmit only after the form is valid. */}
                <div>
                    <label htmlFor="email">Email: </label>
                    <input {...register("email")} placeholder='Enter your email...' />
                    <br />
                    <label htmlFor="pass">Password: </label>
                    <input type="password" {...register("password")} placeholder='Enter your password...' />
                    <br />
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default RHFex