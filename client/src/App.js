//import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Donation from './pages/Donation';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Dashboard from './pages/user/Dashboard';
import DonationForm from './pages/user/DonationForm';
import UserConnect from './pages/user/UserContact';
import { Navbar } from 'react-bootstrap';
import HowitWorks from './pages/HowitWorks';
import Donations from './pages/user/DonationFeed';
import UserHome from './pages/user/UserHome';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
 
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Navbar />
          <Routes>
            <Route 
              path= "/" 
              element={<Home/>} 
              />
              <Route 
              path= "/home" 
              element={<UserHome/>} 
              />
            <Route 
              path= "/about" 
              element={<About/>} 
              />
              <Route 
              path= "/how-it-works" 
              element={<HowitWorks/>} 
              />
            <Route 
              path= "/donation-feed" 
              element={<Donation/>}
              />
            <Route
              path="/donations-feed"
              element={<Donations/>}
              />
            <Route 
              path= "/signup" 
              element={<Signup/>} 
              />
            <Route 
              path= "/login" 
              element={<Login/>} 
              />
            <Route 
              path= "/contact" 
              element={<Contact/>} 
              />
            <Route 
              path= "/dashboard" 
              element={<Dashboard/>} 
              />
            <Route 
              path= "/donate" 
              element={<DonationForm/>} 
              />
            <Route 
              path= "/connect" 
              element={<UserConnect/>} 
              />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;