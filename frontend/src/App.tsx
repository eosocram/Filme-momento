import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesList from './components/MoviesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MoviesList';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:id" element={<MovieList />} />
      </Routes>
    </Router>
  );
};

export default App;