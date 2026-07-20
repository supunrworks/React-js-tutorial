import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Card from './Cards/Card'
import Greet from './UserAuth/Greet'
import List from './List/List'
import Objects from './Objects/Objects'
import Button from './Button/Button'
import Updater from './Updater/Updater'
import Array from './Array/Array'
import Count from './UseEffect/Count'
import Counter from './UseState/Counter'
import BoxA from './UseContext/BoxA'
import Example from './UseRef/Example'
import Ex02 from './UseRef/Ex02'
import ControlledForms from './ControlledForms/ControlledForms'


function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Card para = "I Code & Design" age={21}/> */}
      {/* <Greet userName="Supun" isLoggedIn ={false} /> */}
      {/* <List/> */}
      {/* <Objects topic="Products"/> */}
      {/* <Button/> */}
      {/* <Counter /> */}
      {/* <Updater/> */}
      <ControlledForms/>
      {/* <Array/> */}
      {/* <BoxA/> */}
      {/* <Example/> */}
      {/* <Ex02/> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App