import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Header from "./components/Header"
import Footer from "./components/Footer";
import Home from "./routes/Home";
import About from "./routes/About";
import Posts from "./routes/Posts";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/posts" element={<Posts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
