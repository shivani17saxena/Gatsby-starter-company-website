import * as React from "react"
import { Link } from "gatsby"
import logo from "../../static/logo2.png"
function Navbar() {
  return (
    <nav>
        <h1><span><img src={logo} alt='logo' style={{ width: `127px`, position: `absolute`,top: `8px`}} /></span></h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link> 
            <Link to="/projects">Projects</Link>  
        </div>
    </nav>
  )
}
export default Navbar