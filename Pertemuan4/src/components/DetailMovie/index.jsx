import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../ui/button";
import StyledDetailMovie from "./StyledDetailMovie";


function DetailMovie() {
    /* 
    *TODO :
    * - Ambil ID dari parsmeter URL
    * - Fetch Detail Movie by ID
     */
    const { id } = useParams();
    const [movie, setMovie] = useState("");
    const genres = movie && movie.genres.map((genre)=> genre.name).join(", ");
    
    useEffect (() => {
        async function getDetailMovie(){
            const API_KEY = import.meta.env.VITE_API_KEY;
            const params = `?api_key=${API_KEY}&append_to_response=videos`;
            const URL =`https://api.themoviedb.org/3/movie/${id}${params}`; 
            const response = await axios(URL);
            setMovie(response.data);
        }
        getDetailMovie();
    }, []);

    return (
    <StyledDetailMovie>
        <div className="poster">
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
        </div>
        <div className="info">
            <h2>{movie.title}</h2>
            <h3>{genres}</h3>
            <p>{movie.overview}</p>
            <Button as="a" >Watch Trailer</Button>
        </div>
    </StyledDetailMovie>);
    }

export default DetailMovie;