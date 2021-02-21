import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";

import MainPage from "./Components/MainPage/MainPage";
import LandingPage from "./Components/LandingPage/LandingPage";
import TableQueue from "./Components/TableQueue"; 
import MapMain from './Components/Map/WrappedMap'; 

import { getTestAPI } from "./urlWrappers";

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
  const [authenticated, setAuthenticated] = useState(false)

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/landing">
            {
              (authenticated) ?
              (<Redirect to="/" />) :
              (<LandingPage setAuthenticated={setAuthenticated} />)
            }
          </Route>
          <Route exact path="/map" component={MapMain} />
          <Route path="/table" component={TableQueue} />
          {/* vvvvv remove later vvvvv */}
          <Route exact path="/testapi" component={TestAPIPage} />
          {/* ^^^^^ remove later ^^^^^*/}
          <Route path="/">
            {
              (authenticated) ? 
              (<MainPage />) : 
              (<Redirect to="/landing" />)
            }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
