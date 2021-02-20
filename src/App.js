import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./Components/LandingPage/LandingPage";
import SitePage from "./Components/SitePage/SitePage";
import TableQueue from "./Components/TableQueue"; 

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/site" component={SitePage} />
          <Route exact path="/table" component={TableQueue} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
