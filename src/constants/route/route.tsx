import { createBrowserRouter } from 'react-router-dom';
import RouteEnum from './enum';
import PrivateRoutes from './private-routes';
import Homepage from '../../modules/homepage';
import NonPrivateRoutes from './non-private-routes';

const router = createBrowserRouter([
  {
    path: RouteEnum.Home,
    element: <Homepage />,
  },
  {
    element: <PrivateRoutes />,
    children: [], // register your private routes overhere
  },
  {
    element: <NonPrivateRoutes />,
    children: [],
  },
]);

export default router;
