//React Router Imports
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//Pages Imports
import Navigator from "./Pages/Navigation";
import SearchPage from "./Pages/Search/SearchPage";
import LabelInfo from "./Pages/Label";


function App() {
  return (
    <Router>
      <div className="App">
        <Navigator />
        <Switch>
        <Route path={["/:type/:info"]} component={LabelInfo} />
        <Route path="/search" component={SearchPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
