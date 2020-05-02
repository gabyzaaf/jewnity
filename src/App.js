import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./Components/MainPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Router>
            <MainPage />
          </Router>
        </h1>
      </header>
    </div>
  );
}

export default App;
