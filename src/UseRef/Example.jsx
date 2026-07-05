// useRef()   = "use Reference" Does not cause re-renders when its value changes like useState.
//                     1. Accessing/Interacting with DOM elements
//                     2. Handling Focus, Animations, and Transitions
//                     3. Managing Timers and Intervals

import React, { useEffect, useRef, useState } from 'react'

function Example() {
  const [num, setNum] = useState(0)

  // const [count,setCount] = useState(0)   => Render infinitly in useEffect
  const countRef = useRef(0)

  useEffect(() => {
    countRef.current = countRef.current + 1
  })

  const handleClick = () => {
    setNum(num + 1)
  }


  return (
    <div>
      <p>Number:{num}</p>
      <button onClick={handleClick}>Add+</button>
      <p>Renderd:{countRef.current}</p>
    </div>
  )
}

export default Example