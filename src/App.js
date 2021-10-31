import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Notfound from './Components/NotFound/Notfound';
import Login from './Components/Login/Login';
import MyBookings from './Components/MyBookings/Mybookings';
import AllBookings from './Components/AllBookings/AllBookings';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PackageDetails from './Components/PackageDetails/PackageDetails';
import AddPackage from './Components/AddPackage/AddPackage';
import About from './Components/About/About';

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
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/mybookings'>
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path='/addpackage'>
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path='/allbookings'>
              <AllBookings></AllBookings>
            </PrivateRoute>
            <PrivateRoute path='/package/:id'>
              <PackageDetails></PackageDetails>
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
