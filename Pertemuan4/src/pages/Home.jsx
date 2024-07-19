import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import { useState } from "react";
import data from "../utils/constant/data";
import AddMovie from "../components/AddMovie/AddMovie";


function Home() {
    const [movies, setMovies] = useState(data);
    return(
       <main>
       <Hero />
          
       <Movies
          title = "Lates Movies"
          movies={movies}
          />
              
           </main>
            
       
    );
}

export default Home;