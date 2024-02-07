import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import './style.scss'

const HeroContent = () => {
  return (
    <div className='hero-content'>

       <h3 className='hero-header'>Rent The Perfect Set <br/>
       From Local Golfers on Demand</h3>
       <p className='hero-desc'>Discover and book golf sets and clubs from local golfers
       
       <br></br>
       who share your passion for the game & a quality set of clubs</p>
       <div className='field'>
          <input type={'text'} placeholder='Search by State, City or Course'  className='search-input'/>
          <span className='search-icon'><IoSearchOutline className='search' /></span>
       </div>
       <div className='hero-brand'>
          <p className='hero-brand-header'>As seen on:</p>
          <div className='hero-brand-content'>
          <span>Golf Digest</span>
          <span>LINKS Magazine</span>
          <span>LIV Golf</span>
          <span>Golf Monthly</span>
          <span>TaylorMade</span>
          </div>
       </div>
    </div>
  )
}

export default HeroContent