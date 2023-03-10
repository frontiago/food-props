import './NavbarStyles.css'
import {FaHamburger, FaBars, FaTimes} from 'react-icons/fa'
import {useState} from 'react'

export function Navbar() {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState(false)
  const handleNav = () => setNav(!nav)

  const changeColor = () => {
    if(window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)
    
  return (
    <div className={color ? 'navbar navbar-bg' : 'navbar'} >
        <div className="container">
            <div><FaHamburger size={40} /></div>
            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <li><a href="#home">Home</a></li>
                <li><a href="#home">Order</a></li>  
                <li><a href="#home">Menu</a></li>
                <li><a href="#home">Delivery</a></li>
                <li><a href="#home">Contact</a></li>
            </ul>
            <div className="hamburger" onClick={handleNav}>
                {nav ? <FaTimes size={30} color="#fff" /> : <FaBars size={30}/>}
            </div>
        </div>
    </div>
  )
}