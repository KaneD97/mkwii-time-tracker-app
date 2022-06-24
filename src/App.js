import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TrackTimes from './containers/TrackTimes';
import PersonalRecordTimes from './containers/PersonalRecordTimes';
import AddTime from './containers/AddTime';
import Header from './components/Header';
import TrackTime from './containers/TrackTime';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="" element={<PersonalRecordTimes />}></Route>
          <Route path="/track/:id" element={<TrackTimes />}></Route>
          <Route path="/add" element={<AddTime />}></Route>
          <Route path="/time/:id" element={<TrackTime />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
