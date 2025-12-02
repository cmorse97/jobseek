import Container from 'react-bootstrap/Container';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import Header from './components/Navbar/Header.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Container fluid>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
