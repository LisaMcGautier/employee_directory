import React from "react";

const Header = () => (
    <div>
        <div className="jumbotron bg-info text-white text-center" >
            <h1 className="display-4">Employee Directory</h1>
        </div>

        Employee Directory returns a list of 50 employees, with images and contact information.
        <ul>
            <li>Sort employees by first name or last name at the click of a button.</li>
            <li>Slice button returns a list of 25 employees.</li>
            <li>Refresh the page to return a new list of 50 employees.</li> 
        </ul>

    </div>
);

export default Header;