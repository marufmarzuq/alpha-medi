import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Faq from './Pages/Faq/Faq';
import ScrollToTop from './Shared/ScrollToTop';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop/>
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home></Home>
            </Route>
            <Route exact path="/about-us">
              <About></About>
            </Route>
            <Route exact path="/faq">
              <Faq></Faq>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute exact path="/services/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
