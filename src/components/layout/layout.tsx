import { FC, PropsWithChildren } from 'react';
import { Header } from './header';

import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';

interface LayoutProps extends PropsWithChildren {}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
