import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import { movie } from "./movie";
import "./index.css";
import './mediaqueries.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Show from "./show";
import Movieslist from "./movieslist";
import Promotions from "./promotions";
import ImageSlider from "./components/ImageSlider";

const Homepage = () => {
  const [number, setNumber] = useState(4);

  useEffect(() => {
<<<<<<< HEAD
    setInterval(() => {
      setNumber((prev) => {
        return prev + 1;
      });
    }, 4000);
  }, []);

  if (number == movie.length) {
    return setNumber(0);
  }
=======
   const interval= setInterval(() => {
      setNumber((prev) => {
        if (prev===movie.length-1){
          return 0
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

>>>>>>> 7067a5e9a516b774d3061b43b03f30ae64876442

  return (
    <section>
      <article className="hero-page">
        <img src={movie[number].image} className="backg-img" />
        <div style={{ position: "sticky", top: "0px" }}>
          <Navbar />
        </div>

        <section className="about">
          <h2 className="about-title">{movie[number].title}</h2>
          <p className="about-genre">{movie[number].genre}</p>
          <p className="about-plot">{movie[number].text}</p>
          <button className="ticket-btn">BUY TICKET</button>
        </section>

        <div className="about-footer">
          <div className="my-list">
            <FontAwesomeIcon
              icon={faPlus}
              style={{
                padding: "20px",
                borderRadius: "50%",
                background: "rgba(90, 0, 90, 0.4)",
                cursor: "pointer",
              }}
            />
            <p>My List</p>
          </div>
          <div className="trailer">
            <FontAwesomeIcon
              icon={faPlay}
              beatFade
              style={{
                marginLeft: "15px",
                padding: "20px",
                borderRadius: "50%",
                background: "rgba(90, 0, 90, 0.3)",
                position: "relative",
                zIndex: "-1",
                cursor: "pointer",
              }}
            />
            <p>Watch Trailer</p>
          </div>

          <div className="get-ticket">
            <a href="#">YOU CAN GET THIS MOVIE FOR FREE CLICK HERE!!!</a>
            <p
              style={{
                fontSize: "smaller",
                color: "lightgray",
                padding: "5px 15px",
              }}
            >
              T's and C's apply
            </p>
          </div>
        </div>
        <ImageSlider no={number} />

        {/* <section className="sub-image-con">
          <img src={movie[number].image} className="sub-image" />
        </section> */}

        <div>
          <SmallerAbout />
          <Show />
          <Movieslist />
          <Promotions />
        </div>
      </article>

      <div>
        <Outlet />
      </div>
    </section>
  );
};

const SmallerAbout = () => {
  return (
    <section className="smaller-about">
      <img src="./logo.png" alt="" style={{width:'100px'}}/>

      <div className="sub-smaller-about">
        <p>Get Unlimited Ticket for Free</p>
        <button>Subscribe <span><FontAwesomeIcon icon={faArrowRightLong} /></span></button>
      </div>
    </section>
  )
}

export default Homepage;
