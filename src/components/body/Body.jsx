import React from 'react';
import styles from './Body.module.css';
import FirstDiv from './firstDiv/FirstDiv';
import SecondDiv from './secondDiv/SecondDiv';
import ThirdDiv from './thirdDiv/ThirdDiv';

const Body = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <h1>categories</h1>
      <h5>discover new possibilities to help you today</h5>
    </div>
    <FirstDiv />
    <SecondDiv />
    <ThirdDiv />
  </section>
);

export default Body;
