import { FC, memo } from 'react';
import styles from './comment.module.scss';

export interface IComment {
  nickname: string;
  text: string;
}

export const Comment: FC<IComment> = memo(({ nickname, text }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.name}>{nickname}:</span>
      <span>{text}</span>
    </div>
  );
});
