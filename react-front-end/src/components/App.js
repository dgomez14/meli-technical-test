import './App.scss';
import SearchBar from './search-bar/SearchBar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <SearchBar/>
      <Outlet/>
    </div>
  );
};

export default App;
