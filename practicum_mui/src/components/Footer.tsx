import React from 'react'
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-copyright">
                    &copy; Михайлов К. Н, Б9122-09.03.04(4)
                </p>
                <nav className="footer-nav">
                    <a href="#">✉ Контакты</a>
                </nav>
            </div>
        </footer>
    )
}


export default Footer;