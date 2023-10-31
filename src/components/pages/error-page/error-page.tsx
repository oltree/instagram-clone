import { FC } from 'react';
import {
  useRouteError,
  // isRouteErrorResponse,
  ErrorResponse,
} from 'react-router-dom';

export const ErrorPage: FC = () => {
  const error = useRouteError() as ErrorResponse;
  //const errorMessage = isRouteErrorResponse(error) ? error.data?.message : '';

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.statusText}</p>
    </div>
  );
};
