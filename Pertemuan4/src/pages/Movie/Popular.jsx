import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constant/endpoints";
import { useContext } from "react";
import MoviesContext from "../MoviesContext";


function Popular(){
    //Membuat State Movie
    const [movies] = useState([]);
    const {setMovies} = useContext(MoviesContext);
    
    
    useEffect(() => {
        async function fetchPopularMovies() {
            /* const API_KEY = import.meta.env.VITE_API_KEY;
            //Fetch dari data axios
            const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`; */
            const response = await axios(ENDPOINTS.POPULAR);
            
            //simpan data ke setMovie
            setMovies(response.data.results);
        }
        fetchPopularMovies();

    }, []);

    return(
        <>
        <Hero />
        <Movies  title= "Popular Movies" movies={movies}/>
       
        </>

);
}

export default  Popular;
