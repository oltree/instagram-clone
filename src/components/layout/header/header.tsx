import { FC } from 'react';
import styles from './header.module.scss';
import { Badge } from '../../ui/badge';
import { BadgeProps } from '../../ui/badge/badge';

interface HeaderProps extends BadgeProps {}

export const Header: FC<HeaderProps> = ({ id, avatarUrl, nickname }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>Instagram</p>

        <Badge id={id} avatarUrl={avatarUrl} nickname={nickname} />
      </div>
    </div>
  );
};
