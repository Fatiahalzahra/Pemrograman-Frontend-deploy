import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailMovie from "../../components/DetailMovie";
import Movies from './../../components/Movies/Movies'

function Detail(){
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    
    useEffect(()=> {
        async function getRecommendationMovies(){
                const API_KEY = import.meta.env.VITE_API_KEY;
                const params = `?api_key=${API_KEY}`;
                const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations${params}`;
                const response = await axios(URL);

                setMovies(response.data.results);
            }

            getRecommendationMovies();

        }, [id]);
    
    return(
        <>
            <DetailMovie />
            <Movies movies={movies} />
        </>
    )

    ;
}

export default Detail;