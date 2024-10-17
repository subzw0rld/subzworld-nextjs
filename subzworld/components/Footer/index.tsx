import "./footer.css";

/**
 * Footer component that renders the footer section of the application.
 * 
 * @returns {JSX.Element} The JSX code for the footer.
 * 
 * @example
 * <Footer />
 * 
 * @remarks
 * This component displays the Footer if the website
 */
const Footer = () => {
    return (
        <footer className="footer-container">
            <ul className="social-media">
                <li>Find me on</li>
                <li>
                    <a href="https://www.instagram.com/subzeye/" target="_blank" rel="noreferrer">
                        <img width='16px' height='20px' src="/icons/instagram.svg" alt="LinkedIn" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/subrotomukherjee/" target="_blank" rel="noreferrer">
                        <img width='16px' height='20px' src="/icons/linkedin.svg" alt="LinkedIn" />
                    </a>
                </li>
            </ul>
            <div className="footer-section">
                <p>&copy; {new Date().getFullYear()} Subzworld. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;