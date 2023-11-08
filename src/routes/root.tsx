import { FC } from 'react';
import { Layout } from '../components/layout';
import { Outlet } from 'react-router-dom';

export const Root: FC = () => {
  return (
    <Layout id={1} avatarUrl='' nickname='Oleg'>
      <Outlet />
    </Layout>
  );
};
