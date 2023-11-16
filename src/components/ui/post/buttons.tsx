import { FC, memo } from 'react';
import styles from './post.module.scss';
import cn from 'classnames';
import { useAppDispatch } from '../../../hooks/hooks';
import { IPost } from '../../../types/post';
import { giveLike } from '../../../store/slices/posts';

interface ButtonsProps {
  isLikedByYou: boolean;
  userId: string;
  post: IPost;
}

export const Buttons: FC<ButtonsProps> = memo(
  ({ isLikedByYou, userId, post }) => {
    const dispatch = useAppDispatch();

    return (
      <div className={styles.buttons}>
        <button onClick={() => dispatch(giveLike({ postId: post.id, userId }))}>
          <i
            className={cn(
              isLikedByYou ? 'fas fa-heart' : 'far fa-heart',
              styles.iconLike
            )}
          />
        </button>
        <i
          className={cn(
            isLikedByYou ? 'fas fa-comment' : 'far fa-comment',
            styles.iconComment
          )}
        />
      </div>
    );
  }
);
