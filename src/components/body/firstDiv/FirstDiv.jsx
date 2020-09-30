import React from 'react';
import Title from '../../Title';
import Subtitle from '../../Subtitle';
import styles from './FirstDiv.module.css';

const FirstDiv = () => (
  <div className={styles.content}>
    <div className={styles.left}>
      <Title text="nature" />
      <Subtitle text="Lorem ipsum dolor sit amet" />
    </div>
    <div className={styles.right}>
      <Title text="daily" />
      <Subtitle text="Praesent tincidunt consectetur diam" />
    </div>
  </div>
);

export default FirstDiv;
