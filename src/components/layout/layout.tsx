import { FC, PropsWithChildren } from 'react';
import { Header } from './header';

import styles from './layout.module.scss';
import { BadgeProps } from '../ui/badge/badge';

interface LayoutProps extends PropsWithChildren, BadgeProps {}

export const Layout: FC<LayoutProps> = ({
  id,
  avatarUrl,
  nickname,
  children,
}) => {
  return (
    <div className={styles.wrapper}>
      <Header id={id} avatarUrl={avatarUrl} nickname={nickname} />

      <div className={styles.content}>{children}</div>
    </div>
  );
};
