import Navbar from './Navbar'
import Datos from './data.json'
import './Serie.css';
import { useEffect, useState } from 'react';

function Serie(){
    const [ series,setSeries ]= useState([]);
    useEffect (() => {
        const datos= Datos[0].entries.filter((item) => item.programType === 'series');
        if(datos) {
            setSeries(datos); 
        }
    }, []);
    return(
        <>
        <Navbar />
        <div className="sub-navbar">
            <h3 className='popular'>Popular Series</h3>
        </div>
        <div className='watch-series-container'>
          {series.length === 0 ? (
            <li>Cargando...</li>
          ) : (
            series.map((item) => (
              <article key={item.title} className='watch-series'>
                <img src={item.images['Poster Art'].url } alt={item.title} className='poster-serie' width={300} height={300} />
                <h3>{item.title}</h3>
              </article>
            ))
          )}
      </div>
      </>
    )
}
export default Serie;