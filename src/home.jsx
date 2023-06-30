import "./stylesheets/home.css";
import React, {useState, useEffect} from "react"
import imageLeft from "./assets/images/main-left.jpg";

function Home() {

  const [carousel, setCarousel] = useState(1);

  useEffect(() => {
    console.log(carousel)
  }, [carousel])

  const carouselUp = () => {
    if (carousel === 5) {
      setCarousel(1)
    } else {
      setCarousel(carousel + 1)
    }
  }

  const carouselDown = () => {
    if (carousel === 1) {
      setCarousel(5)
    } else {
      setCarousel(carousel - 1)
    }
  }

  return (
    <>
      <div className="home-top">
        <div className="home-top-left">
          <div className="home-top-left-buttons">
            <i className="fa-solid fa-caret-left fa-2xl" onClick={() => carouselDown()}></i>
            <i className="fa-solid fa-caret-right fa-2xl" onClick={() => carouselUp()}></i>
          </div>
          <div className='home-top-left-circles'>
            {
              carousel === 1 ? <i className="fa-solid fa-circle"></i> : <i className="fa-regular fa-circle" onClick={() => setCarousel(1)}></i>
            }
            {
              carousel === 2 ? <i className="fa-solid fa-circle"></i> : <i className="fa-regular fa-circle" onClick={() => setCarousel(2)}></i>
            }
                        {
              carousel === 3 ? <i className="fa-solid fa-circle"></i> : <i className="fa-regular fa-circle" onClick={() => setCarousel(3)}></i>
            }
                        {
              carousel === 4 ? <i className="fa-solid fa-circle"></i> : <i className="fa-regular fa-circle" onClick={() => setCarousel(4)}></i>
            }
                        {
              carousel === 5 ? <i className="fa-solid fa-circle"></i> : <i className="fa-regular fa-circle" onClick={() => setCarousel(5)}></i>
            }
          </div>
          <div className="home-top-left-text">
            <h3>Grand Opening Special</h3>
            <h2> 20% off scans </h2>
          </div>
          <img src={imageLeft} alt="main-left" />
        </div>
        <div className="home-top-right"></div>
      </div>
      <div className="home-bottom">
        <div className="home-bottom-left"></div>
        <div className="home-bottom-right"></div>
      </div>
    </>
  );
}

export default Home;
