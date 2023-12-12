import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/pages/Login';
import Home from './components/pages/Home';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SideMenu from './components/common/sideMenu';
import Header from './components/common/header';
import Users from './components/functional/Users';
import Subscribers from './components/pages/Subscribers';
import Profile from './components/pages/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/functional/auth/AuthContext';
import PrivateRoute from './components/functional/auth/PrivateRoute';

const useStyles = makeStyles((theme) => ({
  gradientBackground: {
    background: 'linear-gradient(to right, #d6e3de, #ffffff);',
    // Add other styles as needed
  },
}));


function App() {
  const theme = createTheme();

  const isLogged = localStorage.getItem('isLogged');


  return (
    <>
      <ThemeProvider theme={theme}>

        {(!isLogged) ?
          (<div style={{ marginLeft: 170, marginTop: 50 }}>
            <Login />
          </div>) : (
              <div style={{ flexGrow: 1, marginTop: 30, marginLeft: 900 }}>
              <Header />
              <SideMenu /> 
              </div>

          )}


        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />

              <Route path="/home" element={<Home />} />

              <Route path="/users" element={<Users />} />
              <Route path="/subscribers" element={<Subscribers />} />
              <Route path="/profile" element={<Profile />} />


              <Route path="/" element={<PrivateRoute />}>
                <Route path="/home" element={<Home />} />
              </Route>
              {/* Other top-level routes */}
            </Routes>
          </Router>
        </AuthProvider>


      </ThemeProvider>

      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/home" element={<Home />}  />
          <Route path="/users" element={<Users />}  />

        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
