import './FooterStyles.css'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

export function Footer() {
  return (
    <div className="footer">
        <div className="container">

            <div className="col">
                <h3>Explore Our Menu</h3>
                <p><a href="#menu">Menu</a></p>
                <p><a href="#nutrition">Nutrition</a></p>
                <p><a href="#ingredients">Ingredients</a></p>
                <p><a href="#drink">Drink Menu</a></p>
            </div>

            <div className="col">
                <h3>Get to know us</h3>
                <p><a href="#menu">About us</a></p>
                <p><a href="#menu">Franchising</a></p>
                <p><a href="#menu">Foundation</a></p>
                <p><a href="#menu">Mission Statement</a></p>
            </div>

            <div className="col">
                <h3>Get in touch</h3>
                <p><a href="#menu">Press</a></p>
                <p><a href="#menu">Carrers</a></p>
                <p><a href="#menu">Contact us</a></p>
                <p><a href="#menu">Get Social</a></p>
            </div>

            <div>
                <h3>Let's Connect</h3>
                <div className="social">
                    <a href="https://facebook.com"><FaFacebookSquare className="icon" /></a>
                    <a href="https://facebook.com"><FaInstagramSquare className="icon" /></a>
                    <a href="https://facebook.com"><FaTwitterSquare className="icon" /></a>
                </div>
            </div>

        </div>
    </div>
  )
}
