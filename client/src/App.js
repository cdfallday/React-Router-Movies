import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import axios from 'axios'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'


const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
     <Route path='/movie/:id'> 
     </Route>
     
     <Route path='/'>
      <MovieList />
     </Route>
    </div>
  );
};

export default App;
