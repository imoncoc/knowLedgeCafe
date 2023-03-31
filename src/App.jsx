import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'

function App() {
  const [watchTime, setWatchTime] = useState("");
  const handleWatchTime = (time) =>{
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));

    if(previousWatchTime){
      const sum = previousWatchTime + time;
      localStorage.setItem("watchTime", sum);
      setWatchTime(sum)
    }
    else{
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  }

  

  return (
    <div className="App">
      <Header></Header>
      <div className="container mx-auto">
        <div className="row">
          <div className="home-container col-10 col-md-9 mx-auto">
            <Home handleWatchTime={handleWatchTime}></Home>
          </div>

          <div className="cart-container col-10 col-md-3 mx-auto">
            <Cart watchTime={watchTime}></Cart>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
