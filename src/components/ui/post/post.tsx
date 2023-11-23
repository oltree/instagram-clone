import { ChangeEvent, FC, memo, useState } from 'react';
import styles from './post.module.scss';
import { Badge } from '../badge';
import cn from 'classnames';
import { Comments } from './comments';
import { ActionButtons } from '../action-buttons/action-buttons';
import { IPost } from '../../../types/post';
import { IUser } from '../../../types/user';
import { debounce } from '../../../utils/debounce';
import { useAppDispatch } from '../../../hooks/hooks';
import { updatePost } from '../../../store/thunks/posts';

export interface PostProps {
  post: IPost;
  user: IUser;
  className?: string;
}

export const Post: FC<PostProps> = memo(({ post, user, className }) => {
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState('');

  const handleChangeCommnet = debounce(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setComment(e.target.value);
    },
    500
  );

  const updatedPost: IPost = {
    ...post,
    comments: [...post.comments, { nickname: user.nickname, text: comment }],
  };

  const handleSendCommentClick = () =>
    dispatch(updatePost({ postId: post.id, post: updatedPost }));

  return (
    <div className={cn(styles.wrapper, className)}>
      <Badge
        id={post.author.id}
        avatarUrl={post.author.avatarUrl}
        nickname={post.author.nickname}
        className={styles.badge}
      />

      <img src={post.imgUrl} alt='post' className={styles.image} />

      <ActionButtons user={user} post={post} />

      <p className={styles.likes}>{`Оценили ${post.likes.length} человек`}</p>

      <Comments comments={post.comments} />

      <textarea
        name='textarea'
        rows={2}
        placeholder='Enter a comment...'
        className={styles.textarea}
        onChange={handleChangeCommnet}
      />

      {comment.length ? (
        <div className={styles.buttonContainer}>
          <button
            className={styles.buttonSend}
            onClick={handleSendCommentClick}
          >
            Send Comment
          </button>
        </div>
      ) : null}
    </div>
  );
});
