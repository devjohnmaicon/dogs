import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../assets/dogs.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        <Link className={styles.login} to='/login'>
          Login / Criar
        </Link>
      </nav>
    </div>
  );
};

export default Header;
