import {
  faArrowAltCircleRight,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">TodoList</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
            <p>Login</p>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FontAwesomeIcon icon={faUser} />
            <p>Register</p>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
