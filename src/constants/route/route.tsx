import { createBrowserRouter } from "react-router-dom";
import RouteEnum from "./enum";
import PrivateRoutes from "./private-routes";

const router = createBrowserRouter([
  {
    path: RouteEnum.Home,
    element: <div>Hello World</div>,
  },
  {
    element: <PrivateRoutes />, 
    children: [], // register your private routes overhere
  },
]);

export default router;
