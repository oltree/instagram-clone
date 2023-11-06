import { FC, memo } from 'react';
import styles from './post.module.scss';
import cn from 'classnames';

interface ButtonsProps {
  isLikedByYou: boolean;
}

export const Buttons: FC<ButtonsProps> = memo(({ isLikedByYou }) => (
  <div className={styles.buttons}>
    <i
      className={cn(
        isLikedByYou ? 'fas fa-heart' : 'far fa-heart',
        styles.iconLike
      )}
    />
    <i
      className={cn(
        isLikedByYou ? 'fas fa-comment' : 'far fa-comment',
        styles.iconComment
      )}
    />
  </div>
));
