import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Hero.module.css";
import Button from '../ui/button/index'

function Hero() {
  /*   Membuat state movie*/
    const [movie, setMovie] = useState("");
    const API_KEY = import.meta.env.VITE_API_KEY;
    const genres = movie && movie.genres.map((genre)=> genre.name).join(", ");
    const idTrailer = movie &&  movie.videos.results[0].key;
    const tmdbImage = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    
  /* *
  * Mengambil 1 data dari trending movie,
  *Karena data dari tranding tidak lengkap
  *Solusinya ambil movie by id
   */
   

    useEffect(() => {
        async function fetchTrendingMovies() {
            const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
            const response = await axios(URL);
            const firstMovie = response.data.results[0];
            return firstMovie;
        }

        async function fetchDetailMovies() {
            const trendingMovie = await fetchTrendingMovies();
            const id = trendingMovie.id;

            const params = `?api_key=${API_KEY}&append_to_response=videos`;
            const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
            const response = await axios(URL);
            setMovie(response.data);
        }

        fetchDetailMovies();
    }, []);
        
        return(
        <div className={styles.container}>
        <section className={styles.hero}>
            <div className={styles.hero__left}>
                <h2 className={styles.hero__title}>{movie.title}</h2>
                <h3 className={styles.hero__genre}>
                    genre : {genres}
                </h3>
                <p className={styles.hero__description}>{movie.Plot}</p>
                <Button variant="primary" as="a" href={`https://wwww.youtube.com/watch?=${idTrailer}`}>Watch</Button>
            </div>
            <div className={styles.hero__right}>
                <img
                    className={styles.hero__image}
                    src={movie.poster || tmdbImage} 
                    alt={movie.title} 
                    />
            </div>
        </section>
    </div>
    );
}

    
    export default Hero;