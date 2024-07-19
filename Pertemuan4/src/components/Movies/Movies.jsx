import data from "../../utils/constant/data";
import styles from "./Movies.module.css";
import Movie from '../Movie/Movie';
import { useState } from "react";
import { nanoid } from "nanoid";
import { useContext } from "react";
import MoviesContext from "../../pages/MoviesContext";

function Movies (props) {
  //membuat state  movies
  const {title ="Latest Movies"/* ,movies, setMovies */} = props;
  const {movies} = useContext(MoviesContext);

  function handleClik() {
    const movie = {
      id: nanoid(),
      title: "Jigsaw Spiral",
      year : 2021,
      type: "Movie",
      poster: "https://picsum.photo/300/400",
    };
    /**
     * update State  movies:  setMovies
     * Melakukan  teknik  spread untuk copy  dan merge
     */
    setMovies([...movies, movie]);
  }
    return(
        <div className={styles.container}>
        <section className={styles.movies}>
          <h2 className={styles.movies__title}>{title}</h2>
          <div className={styles.movies__container}>
            {
              /*Lopping Movies {array}
              Render Component movie dan kirim ke props movie*/
            }
            {movies.map((movie)=> {
                return <Movie key= {movie.id} movie={movie}/>;
            })}
          </div>
          {/*Element Button diberikan event klik: onclick */}
          <button onClick={handleClik}>Add Movie</button>

        </section>
    </div>
    );
}

export default Movies;