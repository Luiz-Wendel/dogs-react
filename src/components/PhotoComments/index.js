import React from 'react';

import styles from './styles.module.css';

// Context
import { UserContext } from '../../context/UserContext';

// Components
import PhotoCommentsForm from '../PhotoCommentsForm';

const PhotoComments = (props) => {
  const { login } = React.useContext(UserContext);

  const [comments, setComments] = React.useState(() => props.comments);

  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ''}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            s<b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
