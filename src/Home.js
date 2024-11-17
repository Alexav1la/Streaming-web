import { Link} from 'react-router-dom';
import './Navbar.css';
import movie from './images/Movies.png';
import serie from './images/Serie.png';
import Nav from './Navbar';
import Sub from './Subnav';


const Serie =() => {
    return (
        <div className='Serie'>
        <Link to="/Serie">
        <img  
        src={serie}
        alt="Portada de la serie"
        width={200}
        height={300}
        />
        </Link>
        <Link to="/Serie" className='name-serie'>Popular Serie</Link>
        </div>
    )
}
const Movie =() => {
    return (
        <div className='movie'>
        <Link to="/movie">
        <img  
        src={movie}
        alt="Portada de la serie"
        width={200}
        height={300}
        />
        </Link>
        <Link to="/movie" className='name-movie'>Popular Movie</Link>
        </div>
    )
}

function Navbar() {
  return (
    <>
    <Nav/>
    <Sub/>
    <div className='Stand'>
    <Movie/>
    <Serie/> 
    </div>
   </>
  )
}

export default Navbar;
