import { useEffect, useState, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from './components/Footer';
import Home from './pages/Home';
import Hike from './pages/Hike';
import Bike from './pages/Bike';
import Other from './pages/Other';
import Admin from './pages/Admin';
import Login from './pages/Login';
import AuthContext from './context/AuthProvider';

function App() {

  const { auth } = useContext(AuthContext);
  const [blogEntries, setBlogEntries] = useState(null);

  useEffect(() => {
    fetchBlogPosts();
  });

  const fetchBlogPosts = async () => {
    const response = await fetch('/blogs');
    const json = await response.json();
    if (response.ok) {
      setBlogEntries({
        hikes: json.filter(entry => entry.type === "hike"),
        bikes: json.filter(entry => entry.type === "bike"),
        others: json.filter(entry => entry.type === "other")
      });
    }
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/hike"
            element={<Hike entries={blogEntries && blogEntries.hikes} />}
          />
          <Route
            path="/bike"
            element={<Bike entries={blogEntries && blogEntries.bikes} />}
          />
          <Route
            path="/other"
            element={<Other entries={blogEntries && blogEntries.others} />}
          />
          <Route
            path="/admin"
            element={auth ? <Admin fetchPosts={fetchBlogPosts} /> : null}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
