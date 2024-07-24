import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import Hero from "./Hero";
import placeholderImage from './placeholder.jpg';
import {useHistory,Link} from 'react-router-dom';


// tmdb apikey = f6751c0ddef77d682c9488f24b537414
//example link movie search: https://api.themoviedb.org/3/search/movie?api_key=f6751c0ddef77d682c9488f24b537414&query=star%20wars&include_adult=false&language=en-US&page=1
const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : placeholderImage;
  const detailUrl = `/movies/${movie.id}`;
  const history = useHistory()
  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Navigate to the search page programmatically
    history.push(`/movies/${movie.id}}`);
  };

  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <BrowserRouter>
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary" onclick={handleClick}>
            Show details
          </Link>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};


const SearchView = ({ keyword, searchResults }) => {
  const title =`You are searching for ${keyword}`
  console.log(searchResults, "are the search results");
  let resultsHtml;
  if (keyword && searchResults.length > 0) {
    resultsHtml = searchResults.map((movie, i) => (
      <MovieCard movie={movie} key={i} />
    ));
  } else if (keyword && searchResults.length === 0) {
    resultsHtml = (
      <div className="col">
        <p>No results found. <Link to="/">Go back to homepage</Link></p>
      </div>
    );
  }
  return (
    <>
      <Hero text={title} />
      {resultsHtml &&
        <div className = "container">
          <div className="row">
            {resultsHtml}
          </div>

        </div>

      }
    </>
  );
};

export default SearchView;
