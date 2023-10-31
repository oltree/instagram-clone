import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../components/pages/error-page';
import { User } from '../components/pages/user';
import { Home } from '../components/pages/home';
import { NoMatch } from '../components/pages/no-match';
import { Root } from './root';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/users/:id',
        element: <User />,
      },
      { path: '*', element: <NoMatch /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
