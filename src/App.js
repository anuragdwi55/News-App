import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NewsList from './components/NewsList';
import './App.css';

function App() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=258123e532594610aa3c9c2451a1a3e9')
      .then(response => setHeadlines(response.data.articles))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <div className="App">
        <header>
          <nav className="navbar">
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </div>
          </nav>
          <h1>News App</h1>
        </header>

        <Routes>
          <Route
            path="/"
            element={<NewsList headlines={headlines} />}
          />
          <Route
            path="/about"
            element={
              <section className="about-section">
                <h2>About Me</h2>
                <p>
                  Hello, I'm Anurag Dwivedi, a passionate developer with a keen interest in web development.
                  You can check out my GitHub profile for more of my projects.
                </p>
                <a href="https://github.com/anuragdwi55" target="_blank" rel="noopener noreferrer">
                  My GitHub
                </a>
              </section>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
