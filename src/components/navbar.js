import { useHistory,Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = ({searchText, setSearchText}) => {
  const history = useHistory()

  const updateSearchText = (e) =>{
    history.push('/search')
    setSearchText(e.target.value)

  }
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Navigate to the search page programmatically
    history.push(`/search?query=${searchText}`);
  };
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Movie Browser
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true" to="/">
                  Coming Soon
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value = {searchText}
                onChange = {updateSearchText}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
