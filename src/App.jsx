import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <div className="container mx-auto">
        <div className="row">
          <div className="home-container col-10 col-md-8 mx-auto">
            <Home></Home>
          </div>

          <div className="cart-container col-10 col-md-4 mx-auto">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
