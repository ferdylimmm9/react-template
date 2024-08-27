import { Navigate, Outlet } from 'react-router-dom';
import { Token } from '../token';
import RouteEnum from './enum';

export default function NonPrivateRoutes() {
  const token = Token.getToken();
  return token ? <Navigate to={RouteEnum.Home} /> : <Outlet />;
}
