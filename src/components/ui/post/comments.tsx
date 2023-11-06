import { FC, memo, useState } from 'react';
import { Comment, IComment } from '../comment/comment';
import { nanoid } from 'nanoid';
import styles from './post.module.scss';

interface CommentsProps {
  comments: IComment[];
}

export const Comments: FC<CommentsProps> = memo(({ comments }) => {
  const [isCommentsShown, setIsCommentsShown] = useState(false);

  const commentForRender = isCommentsShown ? comments.slice(-2) : comments;
  const allCommentsText = isCommentsShown
    ? `Показать еще ${comments.length - commentForRender.length} комментариев`
    : 'Скрыть комментарии';

  return (
    <div className={styles.comments}>
      <span
        className={styles.commentTitle}
        onClick={() => setIsCommentsShown(!isCommentsShown)}
      >
        {allCommentsText}
      </span>

      {commentForRender.map(({ nickname, text }) => (
        <Comment key={nanoid()} nickname={nickname} text={text} />
      ))}
    </div>
  );
});
