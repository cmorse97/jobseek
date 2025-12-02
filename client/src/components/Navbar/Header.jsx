import {
  faArrowAltCircleRight,
  faSquareCaretRight,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { logout, reset } from '../../features/auth/authSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link to="/">JirAI</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <ul>
          {user ? (
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                <FontAwesomeIcon
                  icon={faSquareCaretRight}
                  className="fa-icon"
                />
                <p>Logout</p>
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className="fa-icon"
                  />
                  <p>Login</p>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <FontAwesomeIcon icon={faUser} className="fa-icon" />
                  <p>Register</p>
                </Link>
              </li>
            </>
          )}
        </ul>
      </Container>
    </Navbar>
  );
};

export default Header;
