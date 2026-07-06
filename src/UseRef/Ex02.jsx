import React, { useEffect, useRef, useState } from 'react'

function Ex02() {
  const [name, setName] = useState("")

  // const [render, setRender] = useState(0)         
  const nameRef = useRef(0)                       // for useEffect
  const inputRef = useRef ("")


  useEffect(() => {
    nameRef.current = nameRef.current + 1
    inputRef.current.style.backgroundColor = "red"
    inputRef.current.focus()  // Keep the input section selected
  })

  const inputHandle = (e) => {
    setName(e.target.value)
  }
  const color = () =>{
    inputRef.current.style.backgroundColor = "blue"   //Accesing DOM
  }

  return (
    <div>
      <p>Your name:{name}</p>
      <input onChange={inputHandle} type="text" />
      {/* <p>Renderd:{render}</p> */}
      <p>Renderd:{nameRef.current}</p>

      <input type="text" ref={inputRef}/>
      <button onClick={color}>Change Color</button>

    </div>
  )
}

export default Ex02