import React from 'react';

//Stateless functional components
const NavBar = (props) => {
console.log("NavBAr rendered"); 
return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar <span className="badge badge-pill badge-secondary">{props.totalCounters}</span></a>
        </nav>
     );
};
export default NavBar;