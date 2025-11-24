import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { registerUser } from '../utils/handleUserData.js';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const inputKey = event.target.name;
    setFormData({
      ...formData,
      [inputKey]: inputValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await registerUser(username, email, password);
      setFormData({
        username: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Error submitting data: ', error);
    }
  };

  return (
    <>
      <section className="form-heading">
        <h1>
          <FontAwesomeIcon icon={faUser} /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              name="username"
              placeholder="johndoe123"
              type="text"
              value={username}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              placeholder="email@example.com"
              type="email"
              value={email}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              placeholder="Please enter a password..."
              type="password"
              value={password}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Register;
