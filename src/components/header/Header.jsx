import React from 'react';
import styles from './Header.module.css';

import logo from '../../assets/logo1.png';

const Header = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <img src={logo} alt="escalator logo" />
      <h1>we have ideias to growth your business</h1>
      <button onClick={() => alert('Vamos com tudo!')}>SEE NOW</button>
    </div>
  </section>
);

export default Header;
