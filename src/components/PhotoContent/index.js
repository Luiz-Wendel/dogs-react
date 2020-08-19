import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

// components
import PhotoComments from '../PhotoComments';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <p>
          <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
          <span className={styles.visualizations}>{photo.acessos}</span>
        </p>
        <h1 className="title">
          <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
        </h1>
        <ul className={styles.attibutes}>
          <li>{photo.peso} kg</li>
          <li>{photo.idade} ano(s)</li>
        </ul>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
