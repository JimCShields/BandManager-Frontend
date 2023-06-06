import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from './Layout/Navbar';
import Home from './pages/home';
import ViewAllSongs from './songs/ViewAllSongs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddSong from './songs/AddSong';
import ViewOneSong from './songs/ViewOneSong';
import ViewAllSetlists from './setlists/ViewAllSetlists';
import CreateSetlist from './setlists/CreateSetlist';
import ViewOneSetlist from './setlists/ViewOneSetlist';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs/ViewAllSongs" element={<ViewAllSongs />} />
        <Route path="/songs/AddSong" element={<AddSong />} />
        <Route path="/songs/ViewOneSong/:songId" element={<ViewOneSong />} />
        <Route path="/setlists/ViewAllSetlists" element={<ViewAllSetlists />} />
        <Route path="/setlists/CreateSetlist" element={<CreateSetlist />} />
        <Route path="/setlists/ViewOneSetlist/:setlistId" element={<ViewOneSetlist />} />
      </Routes>
     
      {/* <ViewAllSongs /> */}
      </Router>
    </div>
  );
}

export default App;