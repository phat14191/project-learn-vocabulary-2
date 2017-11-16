import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return(
            <div className ="navbar-wrapper">
                <div classname="nav-link"><Link to="/">About</Link></div>
                <div classname="nav-link"><Link to="/signup">Sign Up</Link></div>
                <div classname="nav-link"><Link to="/signin">Sign In</Link></div>
                <div classname="nav-link"><Link to="/selector">Selector</Link></div>
                <div classname="nav-link"><Link to="/profile">Profile</Link></div>
                <div classname="nav-link"><Link to="/learn">Learn</Link></div>
                <div classname="nav-link"><Link to=""><button>Logout</button></Link></div>
            </div>

        )
    }
}

export default Navbar;
