import StyledMovie from '../ui/StyledMovie/index';
import { Link } from 'react-router-dom'

function Movie(props) {
    //Melakukan destruting props 
    const {movie}= props;

    return (
      <StyledMovie>
         <Link to={`/movie/${movie.id}`}>  
            <img src={movie.poster || `https://image.tmdb.org/t/p/original${movie.poster_path}`} 
            alt={movie.title}/>
            <h3>{movie.title}</h3>
          </Link>
          <p>{movie.year || movie.release_date}</p>
      </StyledMovie>

                
    );
}
export default Movie;