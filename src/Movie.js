import {useState, useEffect} from 'react';
import Data from './data.json';
import Nav from './Navbar';
import './movie.css';
import './Navbar.css';
import './modal.css';
import Modal from './Modal';

function Movie (){
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const datos = Data[0].entries.filter((item) => item.programType === 'movie');
        if (datos) {
            setMovies(datos);
        }
      },[]);
      const [Modalopen, setModalopen] = useState(false);
      const [selectedMovie, setSelectedMovie] = useState(null);

      const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
        setModalopen(true);
      };
      const onClose =()=>{
        setModalopen(false);
        setSelectedMovie(null);
      }

    return(
        <>
        <Nav/>
        <div className="sub-navbar">
            <h3 className='popular'>Popular Movies</h3>
        </div>
        <div className='watch-movie-container'>
          {movies.length === 0 ? (
            <li>Cargando...</li>
          ) : (
            movies.map((item) => (
              <article 
                key={item.title}
                className='watch-movie'
                >
                <img src={item.images['Poster Art'].url } 
                alt={item.title} 
                className='poster-movie' 
                width={300}
                 height={300} 
                 onClick={() => handleMovieClick(item)}
                 />
                <h3> {item.title}</h3>
                <Modal 
                 isOpen={Modalopen}
                 close={onClose}
                 item={selectedMovie}
                 />
              </article>
            ))
          )}
      </div> 
        </>
    )
}
export default Movie;

