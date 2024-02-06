import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import About from './pages/about';
import watchList from './pages/watchList';
import IPO from './pages/ipo';
import Menu from './layout/menu';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <> 
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col md={2} className="d-none d-md-block bg-light sidebar">
          <Menu />
        </Col>
        <Col md={10} className="ml-sm-auto col-lg-10 px-md-4">
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/watchlist" Component={watchList} />
          <Route path="/ipo" Component={IPO} />
          <Route path="/about" Component={About} />            
          </Routes>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
