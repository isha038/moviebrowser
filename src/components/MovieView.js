import Hero from "./Hero";
import placeholderImage from './placeholder.jpg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NotFound from './NotFound'; // Import your NotFound component

const MovieView = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f6751c0ddef77d682c9488f24b537414&language=en-US`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Movie not found'); // Throw an error if movie is not found
                }
                return response.json();
            })
            .then(data => {
                setMovieDetails(data);
                setIsLoading(false);
            })
            .catch(error => {
                setNotFound(true); // Set notFound state to true if movie is not found
                setIsLoading(false);
                console.error('Error fetching movie details:', error);
            });
    }, [id]);

    function renderMovieDetails() {
        if (isLoading) {
            return <Hero text="Loading...." />;
        }
        if (notFound) {
            return <NotFound />; // Render NotFound component if movie is not found
        }
        if (movieDetails) {
            const posterPath = movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}` : placeholderImage; // Use placeholder image if poster_path is not available
            const backdropUrl = movieDetails.backdrop_path ? `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}` : null; // Set backdropUrl to null if backdrop_path is not available
            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterPath} alt="Movie Poster" className="img-fluid shadow rounded" />
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">{movieDetails.overview}</p>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }

    return (
        <div>
            {renderMovieDetails()}
        </div>
    );
};

export default MovieView;
