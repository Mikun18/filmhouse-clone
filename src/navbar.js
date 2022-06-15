import React from 'react'
import { useState, useEffect, createContext, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './index.css'
import './mediaqueries.css'
import { movie } from './movie'
import Signin from './signin'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark, faBars, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'

 export const SearchContext = createContext();

const Navbar = () => {

  const [navbar, setNavbar] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, [])
  const changeBackground = () => {
     if(window.scrollY >= 10){
       setNavbar(true);
     }else{
       setNavbar(false);
     }
  }


  return (
    <SearchContext.Provider value={{setshowSearch, setShowSignIn}}>
            {showSearch && <Search />}
              <div className={navbar ? 'nav active': 'nav'} id='navbar'>
                  <Link to='/'><img src="./filmhouse-clone/logo.png" style={{width:'120px'}}/></Link>
                  <Link to='/' className='nav-item' style={{marginLeft:'100px'}}>Get Tickets</Link>
                  <Link to='/subscribe' className='nav-item'>Subscribe Now</Link>
                  <Link to='/food' className='nav-item'>Food and Drinks</Link>          
                  <Link to='/bookings' className='nav-item'>Bookings</Link>
                  <motion.button 
                  className='nav-item' 
                  style={{marginLeft:'150px', backgroundColor:'transparent', cursor:'pointer'}} 
                  whileHover={{scale:1.1}} 
                  whileTap={{scale:0.9}}
                  onClick={() => setShowSignIn(true)}
                  >Sign in</motion.button>
                  <Link to='/cart' className='nav-item'>Cart</Link>
                  <FontAwesomeIcon icon={faMagnifyingGlass} style={{cursor:'pointer', marginLeft:'20px', fontSize:'18px'}} onClick={() => setshowSearch(true)} />
              </div>

       <div>
          {showSignIn && <Signin setShowSignIn={setShowSignIn}/>}
          <Smallernav />
        </div>

        <div>
           <Outlet />
        </div>

    </SearchContext.Provider>
  )
};

  const Smallernav = () => {

   const {setshowSearch, setShowSignIn} = useContext(SearchContext);
   const [showSideBar, setShowSideBar] = useState(false);
   
   const clickBars = () => {
    setShowSideBar(true);
  }

 return (

  <section>
   <div className='smaller-navbar'>
      <FontAwesomeIcon icon={faBars} style={{marginLeft:'3%', cursor:'pointer'}} onClick={clickBars} />
      <Link to='/'><img src="./filmhouse-clone/logo.png" style={{width:'120px', height:'80px'}} className='smallernav-logo'/></Link>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{cursor:'pointer'}} onClick={() => setshowSearch(true)} className='smallernav-search'/>
      <FontAwesomeIcon icon={faUser} className='smallernav-user'style={{cursor:'pointer'}} onClick={() => setShowSignIn(true)}/>
      <FontAwesomeIcon icon={faCartShopping} style={{marginLeft:'15%'}}/>        
    </div> 

    <div>
      {showSideBar && <SideBar setShowSideBar={setShowSideBar}/>}
    </div>
  </section>
 )
};

const SideBar = ({setShowSideBar}) => {

  // const control = useAnimation();

  const boxVariant = {
    hidden: {
      x: "-100vw"
    },
    visible: {
      x: 0,
      transition: {delay: 0.1, when: 'beforeChildren', delayChildren: 0.1,
      staggerChildren: 0.2}
    },
    close: {
      x: "-100vw",
      transition: {delay: 1}
    }
  }

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      }
    }

    const closeSideBar = () => {
      setShowSideBar(false)
    }

  return(
    <article className='sidebar-bg'>
      <motion.div className='sidebar' variants={boxVariant} animate='visible' initial='hidden' exit='close'>
        <FontAwesomeIcon icon={faXmark} onClick={closeSideBar} style={{marginTop:'10%', fontSize:'50px', padding:'40px 20px', cursor:'pointer'}} />
        <Link to='/' className='side-item' variants={listVariant}>Get Tickets</Link>
        <Link to='subscribe' className='side-item' variants={listVariant}>Subscribe Now</Link>
        <Link to='food' className='side-item' variants={listVariant}>Food and Drinks</Link>
        <Link to='bookings' className='side-item' variants={listVariant}>Bookings</Link>
      </motion.div>
    </article>
  )
}


const Search = () => {

  const control = useAnimation();

  const {setshowSearch} = useContext(SearchContext)

  const [searchValue, setsearchValue] = useState('');

  const boxVariant = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.5}
    },
    hidden: {
      y: -100,
      opacity: 0
    }
  }

  return(
    <article className='searchmodal-bg'>
        <motion.div className='searchmodal' variants={boxVariant} animate='visible' initial='hidden'>
          <form className='searchmodal-form'>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{padding:'0px 10px', paddingTop:'10px', fontSize:'30px'}} />
            <input type="text" name='search' value={searchValue} onChange={(e) => setsearchValue(e.target.value)} placeholder='search for movies'/>
            <FontAwesomeIcon icon={faXmark} onClick={() => setshowSearch(false)} style={{padding:'0px 10px', paddingTop:'10px', fontSize:'40px', cursor:'pointer'}}/>
          </form>
        </motion.div>
    </article>
  )
};


export default Navbar