import { FC, memo } from 'react';
import styles from './header.module.scss';
import { Badge } from '../../ui/badge';
import { BadgeProps } from '../../ui/badge/badge';
import { Link } from 'react-router-dom';

interface HeaderProps extends BadgeProps {}

export const Header: FC<HeaderProps> = memo(({ id, avatarUrl, nickname }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link to='/' className={styles.logo}>
          Instagram
        </Link>

        <Badge id={id} avatarUrl={avatarUrl} nickname={nickname} />
      </div>
    </div>
  );
});
