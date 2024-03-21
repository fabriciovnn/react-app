import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/detail/:code',
    element: <Detail />,
  },
]);

function RoutesApp() {
  return <RouterProvider router={router} />;
}

export default RoutesApp;
