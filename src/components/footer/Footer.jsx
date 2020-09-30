import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <section className={styles.section}>
    <div className={styles.zone}>
      <h2>growth plans</h2>
      <h4>take your business to the next level</h4>
    </div>
    <div className={`${styles.one} ${styles.colum}`}>
      <div className={styles.upper}>
        <h1>$ 100</h1>
        <h5>100 + hours</h5>
      </div>
      <div className={styles.down}>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing alt.</h6>
      </div>
    </div>
    <div className={`${styles.two} ${styles.colum}`}>
      <div className={styles.upper}>
        <h1>$ 150</h1>
        <h5>180 + hours</h5>
      </div>
      <div className={styles.down}>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing alt.</h6>
      </div>
    </div>
    <div className={`${styles.three} ${styles.colum}`}>
      <div className={styles.upper}>
        <h1>$ 200</h1>
        <h5>260 + hours</h5>
      </div>
      <div className={styles.down}>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing alt.</h6>
      </div>
    </div>
    <div className={`${styles.four} ${styles.colum}`}>
      <div className={styles.upper}>
        <h1>$ 250</h1>
        <h5>380 + hours</h5>
      </div>
      <div className={styles.down}>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing alt.</h6>
      </div>
    </div>
    <div className={`${styles.five} ${styles.colum}`}>
      <div className={styles.upper}>
        <h1>$ 300</h1>
        <h5>420 + hours</h5>
      </div>
      <div className={styles.down}>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing alt.</h6>
      </div>
    </div>
    <div className={`${styles.six} ${styles.colum}`}>
      <div className={styles.upper}>
        <h1>$ 350</h1>
        <h5>520 + hours</h5>
      </div>
      <div className={styles.down}>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing alt.</h6>
      </div>
    </div>
  </section>
);

export default Footer;
