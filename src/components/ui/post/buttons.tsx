import { FC, memo } from 'react';
import styles from './post.module.scss';
import cn from 'classnames';
import { useAppDispatch } from '../../../hooks/hooks';
import { IPost } from '../../../types/post';
import { updatePost } from '../../../store/slices/posts';
import { IUser } from '../../../types/user';

interface ButtonsProps {
  user: IUser;
  post: IPost;
}

export const Buttons: FC<ButtonsProps> = memo(({ user, post }) => {
  const dispatch = useAppDispatch();

  const isLikedByYou = post.likes.includes(user.id);
  const isCommentByYou = post.comments.find(
    ({ nickname }) => nickname === user.nickname
  );
  const updatedPost: IPost = {
    ...post,
    likes: isLikedByYou
      ? post.likes.filter((id) => id !== user.id)
      : [...post.likes, user.id],
  };

  const handleToggleLike = () =>
    dispatch(updatePost({ postId: post.id, post: updatedPost }));

  return (
    <div className={styles.buttons}>
      <button onClick={handleToggleLike}>
        <i
          className={cn(
            isLikedByYou ? 'fas fa-heart' : 'far fa-heart',
            styles.iconLike
          )}
        />
      </button>
      <i
        className={cn(
          isCommentByYou ? 'fas fa-comment' : 'far fa-comment',
          styles.iconComment
        )}
      />
    </div>
  );
});
