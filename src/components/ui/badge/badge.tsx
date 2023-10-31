import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './badge.module.scss';

export interface BadgeProps {
  id: string;
  avatarUrl: string;
  nickname: string;
}

export const Badge: FC<BadgeProps> = ({ id, avatarUrl, nickname }) => {
  const navigate = useNavigate();

  const handleClickOnBadge = () => navigate(`/users/${id}`);

  return (
    <div className={styles.wrapper} onClick={handleClickOnBadge}>
      <img src={avatarUrl} alt='user' className={styles.avatar} />
      <p className={styles.nickname}>{nickname}</p>
    </div>
  );
};
