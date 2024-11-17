import * as React from 'react';
import { Link} from 'react-router-dom';
import './Navbar.css';


function Nav (){
    return(
        <div className="App">
          <header>
              <div className="nav">
              <Link to="/" className='name'>Demo Streaming</Link>
              <ul className='logout'>
              <li><Link to="/" className='login'>Log in</Link></li>
               <li><input  className='start' type="submit" value={"Start your free trial"} /></li>
              </ul> 
              </div>
          </header>
        </div>
      )
}
export default Nav;