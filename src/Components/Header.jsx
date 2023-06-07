import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <header className="header Wrap-false">
            <Link className="Nav-item" to="">My Blog</Link>
            <div className="Wrap-false">
                <Link to="/" className="Nav-item">Home</Link>
                <Link to="/addPost" className="Nav-item">Post</Link>
            </div>
        </header>
    )
}
export default Header;