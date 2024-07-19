import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constant/endpoints";
import { useContext } from "react";
import MoviesContext from "../MoviesContext";

function NowPlaying(){
    //Membuat State Movie
    const [movies] = useState([]);
    const {setMovies} = useContext(MoviesContext)

    //eslint-disable-next-line react hooks/exhautive-dev
    useEffect( () => {
        /* const API_KEY= import.meta.env.VITE_API_KEY;
        const URL= `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`; */
        
        async function fetchNowPlaying() {
            //Fetch dari data axios
            const response = await axios(ENDPOINTS.NOW_PLAYING);
            
            //simpan data ke setMovie
            setMovies(response.data.results);
        }
            fetchNowPlaying();
            
    }, []);

    return(
        <>
        <Hero />
        <Movies title="Now Playing Movies" movies={movies}/>
       
        </>

);
}


export default NowPlaying;
