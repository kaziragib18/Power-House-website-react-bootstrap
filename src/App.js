import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home/Home/Home';
import Menubar from './components/Shared/Menubar/Menubar';
import AuthProvider from './contexts/AuthProvider';
import Details from './components/Details/Details/Details';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/Login/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menubar></Menubar>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/details/:serviceId">
            <Details></Details>
            </PrivateRoute>

            <Route path="*">
           <NotFound></NotFound>
            </Route>

          </Switch>
         <Footer></Footer>
        </Router>

      </AuthProvider>

    </div>
  );
}

export default App;