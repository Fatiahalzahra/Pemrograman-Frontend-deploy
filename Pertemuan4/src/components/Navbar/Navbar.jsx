import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

/**
 * membuat Link/Navigasi 
 * link menggunakan component dari react router
 */

function Navbar(){
    return(
        <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>
                            <Link to="/">Home</Link>
                            </li>
                            <li className={styles.navbar__item}>
                            <Link to="/movie/create">Add Movie</Link>
                            </li>
                            <li className={styles.navbar__item}>
                            <Link to="/movie/popular">Popular</Link>
                            </li>
                            <li className={styles.navbar__item}>
                            <Link to="/movie/now">Now Playing</Link>
                            </li>
                            <li className={styles.navbar__item}>
                            <Link to="/movie/top">Top Rated</Link>
                            </li>
                    </ul>

    )
}
                    
                

export default Navbar;