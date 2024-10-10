import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NewsList from './components/NewsList';
import './App.css';

function App() {
  // State to hold the fetched headlines
  const [headlines, setHeadlines] = useState([]);

  // useEffect to fetch the news data when the component mounts
  useEffect(() => {
    // Making a GET request to the News API to fetch top headlines for the US
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=258123e532594610aa3c9c2451a1a3e9')
      .then(response => {
        // Updating the headlines state with the articles retrieved from the API
        setHeadlines(response.data.articles);
      })
      .catch(error => {
        // Logging any errors that occur during the fetch
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <Router>
      <div className="App">
        <header>
          <nav className="navbar">
            <div className="nav-links">
              {/* Navigation links for Home and About sections */}
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </div>
          </nav>
          <h1>News App</h1>
        </header>

        {/* Defining routes for different pages of the application */}
        <Routes>
          {/* Route for the Home page which displays the news articles */}
          <Route
            path="/"
            element={<NewsList headlines={headlines} />}
          />
          {/* Route for the About page which contains information about the developer */}
          <Route
            path="/about"
            element={
              <section className="about-section">
                <h2>About Me</h2>
                <p>
                  Hello, I'm Anurag Dwivedi, a passionate developer with a keen interest in web development.
                  You can check out my GitHub profile for more of my projects.
                </p>
                {/* Link to the developer's GitHub profile */}
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
