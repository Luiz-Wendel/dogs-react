import React from 'react';

import styles from './styles.module.css';

const FeedPhotosItem = ({ photo }) => {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualizations}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
