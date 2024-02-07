import React from 'react'
import { FaBell } from "react-icons/fa";
import './style.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
         <div className='navbar-wrapper'>
             <div className='left-nav'>
                <div className='logo'>
                   <span className='logo-img'>Wedge away</span>
                </div>
             </div>
             <div className='right-nav'>
                <ul className='right-nav-container'>
                     <li className='right-nav-item list-btn'>
                        <a className='right-nav-item_link' href='#'>
                           List my clubs
                        </a>
                     </li>
                     <li className='right-nav-item'>
                        <a className='right-nav-item_link list-btn' href='#'>
                        Why #RentLocal
                        </a>
                     </li>
                     <li className='right-nav-item'>
                        <a className='right-nav-item_link list-btn' href='#'>
                            Help
                        </a>
                     </li>
                     <li className='right-nav-item'>
                        <a className='right-nav-item_link list-btn' href='#'>
                            Inbox
                        </a>
                     </li>
                     <li className='right-nav-item notification'>
                        <a className='right-nav-item_link list-btn' href='#'>
                            <FaBell />
                        </a>
                     </li>
                     <li className='right-nav-item profile'>
                     <a className='right-nav-item_link list-btn' href='#'>
                         AT
                     </a>
                  </li>
                </ul>
             </div>
         </div>
    </div>
  )
}

export default Navbar