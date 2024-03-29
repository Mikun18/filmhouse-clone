import React from 'react'
import { useRef } from 'react'
import './signin.css'
import './mediaqueries.css'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Signin = ({setShowSignIn}) => {

    const refContainer = useRef(null);

    const boxVariant = {
        hidden: {
            y: "-100vw"
        },
        visible: {
            y: 0,
            transition: {  when: 'beforeChildren'}
        },
        close: {
            y: "-100vw",
            transition: {duration: 1}
        }
    }

  return (
    <section>
        <article className='signin-modal-bg'>
            <motion.div className='signin-modal' variants={boxVariant} animate='visible' initial='hidden' exit='close'>
                <div>
                    <FontAwesomeIcon icon={faXmark} onClick={() => setShowSignIn(false)} style={{float:'right', fontSize:'larger', cursor:'pointer', borderRadius:'50%', boxShadow:'0px 1px 1px black', padding:'5px 10px'}} />          
                </div>
                <img src="./home-logo.png" width={80}/>
                <div className='signin-con'>
                    <h2>Sign In</h2>
                    <form>
                        <div className='signin-form'>
                            <label>EMAIL</label>
                            <input type="email" name='email' ref={refContainer}/>
                        </div>

                        <div className='signin-form'>
                            <label>PASSWORD</label>
                            <input type="password" name='password' ref={refContainer}/>
                        </div>

                        <div style={{display:'flex', alignItems:'center'}}>
                            <input type="checkbox" />
                            <p style={{padding:'0 10px'}}>Remember Me</p>
                        </div>

                        <button className='signin-btn'>PROCEED</button>
                    </form>

                    <div>
                        <p style={{textAlign:'center', fontSize:'small', color:'gray', paddingBottom:'5px'}}>Don't have an account yet? <span style={{color:'aqua'}}>Join now</span></p>
                        <p style={{textAlign:'center', fontSize:'small', color:'gray'}}>Already registered in the cinema? <span style={{color:'aqua'}}>Click Here</span></p>
                    </div>
                </div>
            </motion.div>
        </article>
    </section>
  )
}

export default Signin