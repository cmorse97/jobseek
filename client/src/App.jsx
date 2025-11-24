import './App.css';
import Header from './components/Header.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

const App = () => {
  return (
    <>
      <nav className="navbar">
        <Header />
      </nav>
      <div className="main-content">
        <Dashboard />
      </div>
    </>
  );
};

export default App;
