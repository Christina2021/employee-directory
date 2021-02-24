import React from 'react';
import "./style.css";

function Header() {
    return (
        <div className="jumbotron text-center header-container">
            <h1>Employee Directory <i className="fas fa-briefcase"></i></h1>
            <p>Sort the employees by the name column, or further search for employees by using the search box!</p>
        </div>
    );
}

export default Header;