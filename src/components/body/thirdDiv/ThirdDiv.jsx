import React from 'react';
import Title from '../../Title';
import Subtitle from '../../Subtitle';
import styles from './ThirdDiv.module.css';

const ThirdDiv = () => (
  <div className={styles.content}>
    <div className={styles.left}>
      <Title text="analysis" />
      <Subtitle text="Duis sollicitudin mauris vitae venenatis aliquet" />
    </div>
    <div className={styles.right}>
      <Title text="pictures" />
      <Subtitle text="Quisque eu nisl purus" />
    </div>
  </div>
);

export default ThirdDiv;
