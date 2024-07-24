import "./App.css";
import {useState, useEffect} from 'react';
import Navbar from "./components/navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import NotFound from './components/NotFound';
import { Switch, Route, useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";

function App() {
  let [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('');

  useEffect(()=>
  {
    if(searchText){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=f6751c0ddef77d682c9488f24b537414&query=${searchText}&include_adult=false&language=en-US&page=1`)
    .then(response => response.json())
    .then(data=>{
      console.log(data)
      setSearchResults(data.results)

    })}

  }, [searchText])
  const location = useLocation();

  // Array of defined routes
  const definedRoutes = ['/', '/about','/search','/movies/:id']; // Add more routes as needed

  // Function to check if the current route is one of the defined routes
  const isDefinedRoute = definedRoutes.includes(location.pathname);
  return (
    <div>
      { isDefinedRoute &&
        <Navbar searchText={searchText} setSearchText={setSearchText}/>
        }
     
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" component={AboutView} />
          <Route path="/search">
            <SearchView keyword ={searchText} searchResults={searchResults}/>
          </Route>
          <Route path="/movies/:id" component ={MovieView} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
