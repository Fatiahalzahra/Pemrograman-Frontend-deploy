function CreateMovie(){

    return(
        <>
        <Hero/>
        <AddMovieFrom
        movies={movies}
        setMovies={setMovies}/>
        </>
    );
}