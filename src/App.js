import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// Pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
// Componenets
import Navigation from './components/Navigation'; 
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Container className="mt-3" fluid>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
