//import Routes dan rote dari react router
import Home from "./pages/Home";
import { Route,Routes} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from './utils/constant/theme'
import GlobalStyle from "./components/GlobalStyle";
import CreateMovie from "./pages/Movie/Create";
import Popular from "./pages/Movie/Popular";
import NowPlaying from "./pages/Movie/NowPlaying";
import TopRated from "./pages/Movie/Toprated";
import Layout from "./Layout/index";
import Detail from "./pages/Movie/Detail";
import data from "./utils/constant/data";
import MoviesContext from "./pages/MoviesContext";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(data);
  const contextValue ={ movies, setMovies, };


  return (
    <>
   
   <ThemeProvider theme={theme}>
   <MoviesContext.Provider value={contextValue}>
    <GlobalStyle/>
    <Layout>
    <Routes>
      <Route path="/" element={<Home movies={movies}/>}></Route>
      <Route path="/movie/create" element={<CreateMovie/>}/>
      <Route path="/movie/popular" element={<Popular/>}/>
      <Route path="/movie/now" element={<NowPlaying/>}/>
      <Route path="/movie/top" element={<TopRated/>}/>
      <Route path="/movie/:id" element={<Detail/>}></Route>
      <Route path="/movie/create" element={<CreateMovie movies={movies} setMovies={setMovies}/>}></Route>
      
      </Routes>
      </Layout>
      </MoviesContext.Provider>
   </ThemeProvider>
   

   </>
  );
}

export default App;