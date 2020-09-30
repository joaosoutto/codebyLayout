import React from 'react';
import Subtitle from '../../Subtitle';
import Title from '../../Title';
import styles from './SecondDiv.module.css';

const SecondDiv = () => (
  <div className={styles.content}>
    <Title text="together" />
    <Subtitle text="Vivamus non arcu tincidunt, tempus nunc eu, scelerisque ipsum" />
  </div>
);

export default SecondDiv;
