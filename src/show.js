import React from "react";
import { useState , createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCaretDown,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import './mediaqueries.css'
import { movie } from "./movie";
import Navbar from "./navbar";

const ShowContext = createContext();

const Show = () => {
  const [list, setList] = useState({
    state: false,
    city: false,
    date: false,
  });

  const exitDropDown = () => {
    if (list.state === true || list.city === true || list.date === true) {
      setList(false);
    }
  };

  return (
    <section>
      <div>
        <h1 style={{ margin: "5% 12%", letterSpacing: "2px" }}>
          CURRENTLY SHOWING
        </h1>

        <div className="location-con">
          <h3>CHOOSE WHERE TO WATCH FROM</h3>

          <article className="locations">
            <div
              className="where"
              onClick={() => setList({ state: !list.state })}
            >
              <FontAwesomeIcon icon={faLocationDot} className="icon" style={{color:'purple'}}/>
              <p>Lagos</p>
              <FontAwesomeIcon
                icon={faCaretDown}
                className='caretdown'
              />
            </div>
            <div
              className="where"
              onClick={() => setList({ city: !list.city })}
            >
              <FontAwesomeIcon icon={faLocationDot} style={{color:'purple'}}/>
              <p>Lekki</p>
              <FontAwesomeIcon
                icon={faCaretDown}
                className='caretdown-city'
              />
            </div>
            <div
              className="where"
              onClick={() => setList({ date: !list.date })}
            >
              <FontAwesomeIcon icon={faCalendarDay} style={{color:'purple'}}/>
              <p>Today</p>
              <FontAwesomeIcon
                icon={faCaretDown}
                className='caretdown'
              />
            </div>
          </article>

          <section onMouseLeave={exitDropDown} className='dropdown'>
            <AnimatePresence>
              {list.state && <State />}
            </AnimatePresence>
            <AnimatePresence>
              {list.city && <City /> }
            </AnimatePresence>
            <AnimatePresence>
              {list.date && <Date /> }
            </AnimatePresence>
          </section>
        </div>
      </div>

      <div>
        {/* <img src="./Black Man.jpg" style={{ width: "100%" }} /> */}
      </div>
    </section>
  );
};

const State = () => {

  const boxVariant = {
    hidden: {
      y: -5
    },
    visible: {
      y: 0,
      transition: {delay: 0.1, when: 'beforeChildren', delayChildren: 0.1,
      staggerChildren: 0.2}
    },
    close: {
      opacity: 0,
      transition: {duration: 0.3}
    }
  }
  
  const listVariant = {
    hidden: {
      y: -10,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      }
    }

  return (
    <ShowContext.Provider value={{boxVariant, listVariant}}>        
        <motion.section className="state-list" variants={boxVariant} animate='visible' initial='hidden' exit='close'>
          <ul>
            <motion.li variants={listVariant} >Lagos</motion.li>
            <motion.li variants={listVariant}>Rivers</motion.li>
            <motion.li variants={listVariant}>Oyo</motion.li>
            <motion.li variants={listVariant}>Kano</motion.li>
            <motion.li variants={listVariant}>Ondo</motion.li>
            <motion.li variants={listVariant}>Edo</motion.li>
          </ul>
        </motion.section>
    </ShowContext.Provider>
  );
};

const City = () => {

  // const {boxVariant, listVariant} = useContext(ShowContext);

  const boxVariant = {
    hidden: {
      y: -5
    },
    visible: {
      y: 0,
      transition: {delay: 0.1, when: 'beforeChildren', delayChildren: 0.1,
      staggerChildren: 0.2}
    },
    close: {
      opacity: 0,
      transition: {duration: 0.3}
    }
  }
  
  const listVariant = {
    hidden: {
      y: -10,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      }
    }

  return (
    <motion.section className="city-list" variants={boxVariant} animate='visible' initial='hidden' exit='close'>
      <ul>
        <motion.li variants={listVariant}>Surulere</motion.li>
        <motion.li variants={listVariant}>Circle Mall</motion.li>
        <motion.li variants={listVariant}>Twinwaters</motion.li>
        <motion.li variants={listVariant}>Landmark</motion.li>
        <motion.li variants={listVariant}>Lekki</motion.li>
      </ul>
    </motion.section>
  );
};

const Date = () => {

  const boxVariant = {
    hidden: {
      y: -5
    },
    visible: {
      y: 0,
      transition: {delay: 0.1, when: 'beforeChildren', delayChildren: 0.1,
      staggerChildren: 0.2}
    },
    close: {
      opacity: 0,
      transition: {duration: 0.3}
    }
  }
  
  const listVariant = {
    hidden: {
      y: -10,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      }
    }

  return (
    <motion.section className="date-list" variants={boxVariant} animate='visible' initial='hidden' exit='close'>
      <ul>
        <motion.li variants={listVariant}>TODAY</motion.li>
        <motion.li variants={listVariant}>Jun, Wed 01</motion.li>
        <motion.li variants={listVariant}>Jun, Thur 02</motion.li>
        <motion.li variants={listVariant}>Jun, Fri 03</motion.li>
        <motion.li variants={listVariant}>Jun, Sat 04</motion.li>
        <motion.li variants={listVariant}>Jun, Sun 05</motion.li>
      </ul>
    </motion.section>
  );
};

export default Show;
