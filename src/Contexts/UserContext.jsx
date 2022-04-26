import React, { createContext, useState } from 'react';
import { TOKEN_POST, USER_GET } from '../api';

export const UserContext = createContext();

const UserStorage = ({ children }) => {
  const [login, setLogin] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const token = localStorage.getItem('token');
  //     if (token) {
  //       getUser(token);
  //     }
  //   }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);

    const response = await fetch(url, options);
    const json = await response.json();

    setData(json);
    setLogin(true);

    console.log('xxx', json);
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({
      username: username,
      password: password,
    });

    const response = await fetch(url, options);
    const { token } = await response.json();

    localStorage.setItem('token', token);

    getUser(token);
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserStorage;
