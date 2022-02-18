import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header";
import TrackTimesComponent from "./containers/TrackTimesComponent";
import PersonalRecordTimes from "./containers/PersonalRecordTimes";
import AddTime from "./containers/AddTime";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/PRs" element={<PersonalRecordTimes />}></Route>
          <Route path="/track/:id" element={<TrackTimesComponent />}></Route>
          <Route path="/add" element={<AddTime />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
