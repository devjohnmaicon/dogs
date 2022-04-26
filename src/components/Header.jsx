import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../assets/dogs.svg';
import { UserContext } from '../Contexts/UserContext';

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <div className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>

        {data ? (
          <Link className={styles.login} to='/conta'>
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to='/login'>
            Login / Criar
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
