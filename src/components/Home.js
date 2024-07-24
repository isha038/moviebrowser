import Hero from "./Hero";
const Home = () => {
  return (
    <div>
      <Hero text="Welcome to the movie browser" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Welcome to MovieBrowser, your ultimate destination for exploring
              the world of cinema. Dive into our extensive library featuring a
              vast collection of movies from every genre imaginable. Whether
              you're in the mood for a heartwarming romance, a pulse-pounding
              thriller, or a thought-provoking documentary, MovieBrowser has
              something for every film enthusiast. Discover new releases,
              revisit classic favorites, and enjoy browsing through our
              meticulously curated selections. Explore detailed information
              about each film all in one place. At MovieBrowser, your next great
              cinematic adventure is just a click away.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
