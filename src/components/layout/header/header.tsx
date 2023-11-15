import { FC, memo, useEffect } from 'react';
import styles from './header.module.scss';
import { Badge } from '../../ui/badge';

import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { userSelector } from '../../../store/selectors/users';
import { getUserById } from '../../../store/slices/users';

interface HeaderProps {}

export const Header: FC<HeaderProps> = memo(() => {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(userSelector);

  useEffect(() => {
    dispatch(getUserById(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link to='/' className={styles.logo}>
          Instagram
        </Link>

        <Badge
          id={currentUser.id}
          avatarUrl={currentUser.avatarUrl}
          nickname={currentUser.nickname}
        />
      </div>
    </div>
  );
});
