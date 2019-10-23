import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact={true} component={Home} />
      </div>
    </Router>
  );
}
export default App;
