import { createBrowserRouter } from 'react-router-dom';
import App from 'src/App';
import RepositoryPage from 'src/pages/RepositoryPage/RepositoryPage';
import ErrorPage from 'src/features/components/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/:repositoryID',
    element: <RepositoryPage />,
    errorElement: <ErrorPage />,
  }
])