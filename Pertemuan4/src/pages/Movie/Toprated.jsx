import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constant/endpoints";
import { useContext } from "react";
import MoviesContext from "../MoviesContext";

function TopRated(){

    //simpan API dan URL ke variabel
    
    //Membuat State Movie
    const [ movies] = useState([]);
    const {setMovies} =useContext(MoviesContext);

    useEffect(() => {
        async function fetchToprated() {
           /*  const API_KEY= import.meta.env.VITE_API_KEY;
            const URL= `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`; */
            //Fetch dari data axios
            const response = await axios(ENDPOINTS.TOP_RATED);
            //simpan data ke setMovie
            setMovies(response.data.results);
        }

        fetchToprated();

    }, []);

    return(
        <>
            <Hero />
            <Movies title="Top Rated Movies" movies={movies}/>
        </>

);
}


export default TopRated;
