import React, {useState, useEffect} from 'react';
import './App.css';
import {CardList} from './components/card-list/CardList';
import {SearchBox} from './components/search-box/SearchBox';

function App() {

  const [kittens, setKittens] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => setKittens(users))
  }, []);

  const handleChange = (e) => {
    setSearchfield(e.target.value);
  }

  const filteredKittens = kittens.filter(kitten => kitten.name.toLowerCase().includes(searchfield.toLowerCase()));

  return (
    <div className="App">
     <h1>Beautiful Kittens</h1>
     <SearchBox handleChange={handleChange} placeholder='Search Kittens....' />
     <CardList kittens={filteredKittens} />
    </div>
  );
}

export default App;
