import { useState } from "react";
import styles from "./AddMovieFrom.module.css";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MoviesContext from "../../pages/MoviesContext";

 function AddMovie(props){
    const { movies, setMovies } = useContext(MoviesContext);
    //membuat state title
    const [title, SetTitle] =useState("");
    const [date, setDate] =useState("");
    const [poster, setPoster] = useState('');
    const [isTitleError, setIsTitleError]= useState(false);
    const [isDateError, setIsDateError] = useState(false);
    const [isTypeError, setIsTypeError] = useState(false);
    const [isPosterError, setIsPosterError] = useState(false);
    const [type, setType] = useState('select type')
    const [navigation] = useNavigate(false);

    function handleTitle(e) {
        SetTitle(e.target.value);
    }
    function handleDate(e) {
        setDate(e.target.value);
    }
    function handlePoster(e) {
        setPoster(e.target.value);
    }
    function handleType(e) {
        setType(e.target.value);
    }
            function validate(){
                
                if (title=="") {
                    setIsDateError(true);
                    return false;
                }
                else if (Date=="") {
                    setIsDateError(true);
                    setIsTitleError(false);
                    return false;
                 } else if (poster=="") {
                    setIsPosterError(true);
                    setIsDateError(false);
                    return false;
                 }else{
                        setIsTitleError(false);
                        setIsDateError(false);
                        return true;
                    }
                    };
                    function addMovie(){
                        const movie = {
                        id: nanoid(),
                        title: title,
                        year: date,
                        poster: poster,
                        type: type
                        }
                        setMovies([...movies, movie]);
                    }
                    function handleSubmit(e) {
                        e.preventDefault();

                        validate() && addMovie();

                    }    
    
    return(
        <div className={styles.container}>
            <section className={styles.from }>
                <div className={styles.from_left}>
                    <img className ={styles.form_image}
                    src="https://picsum.photos/536/354"
                     alt="" 
                     />
                </div>
                <div className={styles.form_right}>
                    <h2 className={styles.form_title}>Add Movie From</h2>
                    <form onSubmit={handleSubmit}> 
                        <div className={styles.form_group}>
                            <label htmlFor="title" className={styles.form_label}>
                                Title
                                </label>
                            <input
                             id="title" 
                             className={styles.form_input} 
                             type="text"
                             value={title}
                             onChange={handleTitle}/>
                             
                                <label htmlFor="date" className={styles.form_label}>
                                 Date
                                </label>
                                <input 
                                id="date" 
                                className={styles.form_input} 
                                type="text"
                                value={date}
                                onChange={handleDate}/>
                                <label for="type">Type</label>
              <select name="type" id="type" value={type} onChange={handleType}>
                <option value="select type" selected disabled>Pilih Type</option>
                <option value="action">Action</option>
                <option value="horror">Horror</option>
                <option value="comedy">Comedy</option>
                <option value="romance">Romance</option>
                <option value="historical">Historical</option>
              </select>
              {isTypeError && <p>Type Wajib Diisi</p>}
              <label for="poster">Link Poster</label>
              <input id="poster" type="text" value={poster} name="poster" onChange={handlePoster} />     
                               
                                <div>
                                    <button type="submit">Submit</button>
                                    
                                </div>
                                <div>navigation("/");</div>
                                </div>
                                </form>
                </div>
            </section>
        </div>
    )
 
}
 export default AddMovie;