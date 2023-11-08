import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import styles from './badge.module.scss';

export interface BadgeProps {
  id: number;
  avatarUrl: string;
  nickname: string;
  className?: string;
}

export const Badge: FC<BadgeProps> = memo(
  ({ id, avatarUrl, nickname, className }) => {
    const navigate = useNavigate();

    const handleClickOnBadge = () => navigate(`/users/${id}`);

    return (
      <div
        className={cn(styles.wrapper, className)}
        onClick={handleClickOnBadge}
      >
        <img src={avatarUrl} alt='user' className={styles.avatar} />
        <p className={styles.nickname}>{nickname}</p>
      </div>
    );
  }
);
