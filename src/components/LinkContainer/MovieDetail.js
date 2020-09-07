import React from 'react'
import MainContainer from '../MainSite/MainContainer'
import MovieDetails from '../ElementComponents/MovieDetails'

//This page displays the movie from the main container and the details next to it.
function MovieDetail() {
    return (
        <div>

            {/* Main container element will contain the movie and the footer to it. */}
            <MainContainer></MainContainer>

            {/* MovieDetail"S" contains all the information about the selected movie. */}
            <MovieDetails></MovieDetails>
        </div>
    )
}

export default MovieDetail
