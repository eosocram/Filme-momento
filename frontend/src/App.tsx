import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;