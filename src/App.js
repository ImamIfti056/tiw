import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Notfound from './Components/NotFound/Notfound';
import Login from './Components/Login/Login';
import AuthProvider from './context/AuthProvider';
import MyOrders from './Components/MyOrders/MyOrders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/myorders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
