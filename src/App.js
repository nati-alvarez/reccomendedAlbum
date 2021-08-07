// import Begin from "./components/Begin";
import Navigator from "./Pages/Navigation/";
import Info from "./Pages/Information";
import Dashboard from "./Pages/Dashboard";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Signup from "./Pages/SignIn/Signup";
import {AuthProvider} from "./Auth/AuthProvider";
import Login from "./Pages/SignIn/Login";
import PrivateRoute from "./Auth/PrivateRoute";
import ForgotPassword from "./Pages/SignIn/ForgotPassword";
import Search from "./Pages/Search/";


function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Navigator />
          <div className="appContainer">
            <Switch>
              <Route path={["/:type/:info"]} component={Info} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/search" component={Search} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
