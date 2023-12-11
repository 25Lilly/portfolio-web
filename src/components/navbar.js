import { click } from '@testing-library/user-event/dist/click'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button } from './Button'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <=960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => { showButton() }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                LHC <img src="sandwich.png" alt="sand" width="22" height="17"></img>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
            </div> 
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Contact" className="nav-links" onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Games" className="nav-links-mobile" onClick={closeMobileMenu}>
                        Games! 
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Games!</Button>} 
        </div>
    </nav>
    </>
  )
}

export default Navbar
