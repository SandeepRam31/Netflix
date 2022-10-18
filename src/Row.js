import React,{ useState, useEffect} from 'react';
import axios from './axios';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title})
{
    //state is a way to write variables in react
    const [movies, setMovies] = useState([]);

    //snippet of code which runs based on a specific condition/variable
    useEffect(() => {
    //if [], run once when the row loads, and dont run again
    async function fetchData(){
        const request = await axios.get(fetchUrl);
    console.log(request.data.results);
    return request;
    }
    fetchData();
    },[fetchUrl]);



    return(
        <div className='row'>
            <h2>{title}</h2>

            <div className='row__posters'> 
            {/*container->posters*/}

            {movies.map(movie => (
                <img 
                key={movie.id} //its to like to render like each movie with its own url so that its faster to scroll
                classname="row__poster"
                src={'${base_url}${movie.poster_path}'} 
                alt={movie.name} />
            ))}
            </div>
        </div>
    )
}

export default Row