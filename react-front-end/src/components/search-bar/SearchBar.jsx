import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './SearchBar.scss';
import searchIcon from './ic-search.png';
import mlLogo from './logo-ml.png';

const SearchBar = () => {
  const [ search, setSearch ] = useState('');
  const navigate = useNavigate();

  /*
  * Navigates to the items list view with the user input as query parameter.
  * Navigation is triggered when clicking the button or pressing the Enter key.
  */
  const handleSubmit = e => {
    e.preventDefault();
    navigate(`items?q=${ search }`);
  };

  /*
  * Updates the search text on user input. This value will be used to query for items.
  */
  const handleInput = ({ target }) => setSearch(target.value);

  return (
    <nav className="navbar navbar-expand-lg search-bar">
      <div className="container">
        <a className="navbar-brand me-4" href="/">
          <img src={ mlLogo } alt="Mercado Libre Logo" className="d-inline-block"/>
        </a>
        <form className="d-flex input-group" onSubmit={ handleSubmit }>
          <input className="form-control" type="search" placeholder="Nunca dejes de buscar" aria-label="SearchBox"
                 id="search-box" name="search-box" onInput={ handleInput }/>
          <div className="input-group-text" id="search-button" onClick={ handleSubmit }>
            <img src={ searchIcon } alt="search-icon"/>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
