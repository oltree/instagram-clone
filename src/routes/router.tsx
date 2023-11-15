import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../components/pages/error-page';
import { User } from '../components/pages/user';
import { Home } from '../components/pages/home';
import { NoMatch } from '../components/pages/no-match';
import { Layout } from '../components/layout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'users/:id',
        element: <User />,
      },
      { path: '*', element: <NoMatch /> },
    ],
  },
];

// here you can add authorization check and public routes (https://medium.com/@tapan_sharma/private-routes-in-react-with-react-router-dom-v6-the-easy-way-1b95f68b8019)
export const router = createBrowserRouter(routes);
