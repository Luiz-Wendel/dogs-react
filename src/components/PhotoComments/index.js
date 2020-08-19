import React from 'react';

import styles from './styles.module.css';

// Context
import { UserContext } from '../../context/UserContext';

// Components
import PhotoCommentsForm from '../PhotoCommentsForm';

const PhotoComments = (props) => {
  const { login } = React.useContext(UserContext);

  const [comments, setComments] = React.useState(() => props.comments);

  return (
    <>
      <ul className={styles.comment}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
