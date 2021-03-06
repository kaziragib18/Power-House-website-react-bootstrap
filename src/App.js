import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Menubar from './components/Shared/Menubar/Menubar';
import AuthProvider from './contexts/AuthProvider';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/Login/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Health from './components/Health/Health';
import ShowDetails from './components/Home/ShowDetails/ShowDetails';


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

            <PrivateRoute path="/health">
              <Health></Health>
            </PrivateRoute>
            
            <Route path="/about">
              <About></About>
            </Route>


            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/showdetails/:id">
            <ShowDetails></ShowDetails>
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