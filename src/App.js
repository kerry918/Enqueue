import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import LandingPage from "./Components/LandingPage/LandingPage";
import SitePage from "./Components/SitePage/SitePage";
import TableQueue from "./Components/TableQueue"; 

import { getTestAPI } from "./urlWrappers"

function TestAPIPage() {
  const [response, setResponse] = useState("")

  useEffect(() => {
    getTestAPI()
      .then((r) => setResponse(r.time))
  }, []);

  return (
    <div>
      <h1>API Test Page</h1>
      <p>Response from api_test: { response }</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/site" component={SitePage} />
          <Route exact path="/table" component={TableQueue} />
          {/* vvvvv remove later vvvvv */}
          <Route exact path="/testapi" component={TestAPIPage} />
          {/* ^^^^^ remove later ^^^^^*/} 
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
