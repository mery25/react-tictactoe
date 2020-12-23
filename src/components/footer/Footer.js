import React from "react"
import "./Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer>
            <div className="links">
                <div className="col">
                    <h3>TIC TAC TOE</h3>
                    <p>Interactive game developed with React.</p>
                    <a className="sourcecode" href="https://github.com/mery25/react-tictactoe">View source code</a>
                </div>
                <div className="col">
                    <h4>Quick links</h4>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/maria-t-43563946">                
                                <FontAwesomeIcon  icon={ faLinkedin } />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/mery25">                
                            <FontAwesomeIcon icon={ faGithub } />
                            </a>
                        </li>                    
                    </ul>
                </div>
            </div>
            <div className="copyright">Copyright © {new Date().getFullYear()} Maria Tibau Aynes. All rights reserved.</div>
        </footer>
    );
}

export default Footer;