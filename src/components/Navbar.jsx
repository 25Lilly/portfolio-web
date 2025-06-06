import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button } from './Button'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <=960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => { 
        window.addEventListener('resize', showButton)
        showButton() 
    }, [])

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={() => { 
                closeMobileMenu(); 
                window.scrollTo({top: 0, behavior: 'smooth'}); 
                }}>
                <img src={`${process.env.PUBLIC_URL}/images/flowerIcon.png`} alt="L" width="40" height="40"></img>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
            </div> 
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={() => {
                        closeMobileMenu(); 
                        window.scrollTo({top: 0, behavior: 'smooth'}); 
                        }}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Games" className="nav-links" onClick={closeMobileMenu}>
                        Games
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Projects" className="nav-links-mobile" onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline' buttonLink='/Projects' onClick={closeMobileMenu}>See Projects!</Button>} 
        </div>
    </nav>
    </>
  )
}

export default Navbar
