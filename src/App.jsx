import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FAQ from './components/FAQ/FAQ'

function App() {
  const [watchTime, setWatchTime] = useState("");
  const [bookMark, setBookMark] = useState([]);
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
    toast.success("\xa0\xa0Successfully added in spent time !", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  const handleBookMark = (book) => {
      let newBookMark = [];

  const isBookMarkAvailable = JSON.parse(localStorage.getItem('bookMark'));
  if (isBookMarkAvailable && isBookMarkAvailable.length > 0) {
    if(isBookMarkAvailable.includes(book)){
      // console.log("All Ready added");
      toast.error("\xa0\xa0All Ready added to the Book Mark !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
      else{
        newBookMark.push(...isBookMarkAvailable, book);
        setBookMark(newBookMark);
      }
  } else {
    newBookMark.push(book);
    setBookMark(book);
  }

  toast.success(`\xa0\xa0Successfully added in bookmark blog !`, {
    position: toast.POSITION.TOP_CENTER,
  });

  localStorage.setItem("bookMark", JSON.stringify(newBookMark));
};

  return (
    <div className="App">
      <Header></Header>
      <div className="container mx-auto">
        <div className="row">
          <div className="home-container col-10 col-md-9 mx-auto">
            <Home
              handleWatchTime={handleWatchTime}
              handleBookMark={handleBookMark}
            ></Home>
            <FAQ></FAQ>
          </div>

          <div className="cart-container col-10 col-md-3 mx-auto">
            <Cart watchTime={watchTime} bookMark={bookMark}></Cart>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
