import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Card from './Cards/Card'
import Greet from './UserAuth/Greet'
import List from './List/List'
import Objects from './Objects/Objects'
import Button from './Button/Button'
import Counter from './Counter/Counter'
import Updater from './Updater/Updater'
import Array from './Array/Array'
import Count from './UseEffect/Count'


function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Card para = "I Code & Design" age={21}/> */}
      {/* <Greet userName="Supun" isLoggedIn ={false} /> */}
      {/* <List/> */}
      {/* <Objects topic="Products"/> */}
      {/* <Button/> */}
      {/* <Counter/> */}
      {/* <Updater/> */}
      {/* <Array/> */}
      <Count/>
      {/* <Footer /> */}
    </div>
  )
}

export default App