import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Card from './Cards/Card'
import Greet from './UserAuth/Greet'
import List from './List/List'
import Objects from './Objects/Objects'
import Button from './Button/Button'
import Counter from './Counter/Counter'


function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Card para = "I Code & Design" age={21}/> */}
      {/* <Greet userName="Supun" isLoggedIn ={false} /> */}
      {/* <List/> */}
      {/* <Objects topic="Products"/> */}
      {/* <Button/> */}
      <Counter/>
      {/* <Footer /> */}
    </div>
  )
}

export default App