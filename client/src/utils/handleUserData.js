const BASE_URL = '/api/users';

export const registerUser = async (username, email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });
    if (!res.ok) throw new Error('Failed to create new user.');
    return res.json();
  } catch (error) {
    console.error('Error: ', error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error('Failed to login.');
    return res.json();
  } catch (error) {
    console.error('Error: ', error.message);
  }
};
