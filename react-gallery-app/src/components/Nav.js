import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';


class Nav extends React.Component {

  render() {
    return (
        <nav className="main-nav">
        <ul>
        <BrowserRouter forceRefresh = {true}> 
          <li><Link to="/search/planes"  >Planes</Link></li>
          <li><Link to="/search/flowers" >Flowers</Link></li>
          <li><Link to="/search/computers" >Computers</Link></li>
        </BrowserRouter>
         
        </ul>
      </nav>
    );
    }
}



export default Nav

// Router here