import React from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Promotions = () => {
  return (
    <section className='promotion-con'>
        <div className='promotion-logo'>
          <FontAwesomeIcon icon={faPlus} style={{fontSize:'medium', float:'right'}}/>
          <p style={{fontWeight:'900', letterSpacing:'0.01em', fontStretch:'50%'}}>film<span style={{fontWeight:'100'}}>house</span></p>
        </div>

        <div className='promotion-text'>
          <h2>Join <span style={{color:'orchid'}}>now</span> & get UNLIMITED movie tickets FREE every weekday</h2>
          <p>Watch for free for up to 2 months when you subscribe to an annual plan</p>
          <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}}>Get Started <span><FontAwesomeIcon icon={faArrowRightLong} className='arrow'/></span></motion.button>
        </div>
    </section>
  )
}

export default Promotions 