import { createBrowserRouter } from 'react-router-dom';
import RouteEnum from './enum';
import PrivateRoutes from './private-routes';
import LoginPage from '@/modules/login/page';
import RegisterPage from '@/modules/register/page';
import HomePage from '@/modules/home/page';
import ProfilePage from '@/modules/profile/page';
import NonPrivateRoutes from './non-private-routes';
import { isAuthenticated } from './utils';
import NotesListPage from '@/modules/notes/list';
import NoteDetailPage from '@/modules/notes/detail';

const router = createBrowserRouter([
  {
    path: RouteEnum.Home,
    element: <HomePage />,
  },
  {
    element: <NonPrivateRoutes />,
    children: [
      {
        path: RouteEnum.Login,
        element: <LoginPage />,
      },
      {
        path: RouteEnum.Register,
        element: <RegisterPage />,
      },
    ],
  },
  {
    element: <PrivateRoutes />,
    loader: async () => await isAuthenticated(),
    children: [
      {
        path: RouteEnum.Profile,
        element: <ProfilePage />,
      },
      {
        path: RouteEnum.Notes,
        element: <NotesListPage />,
      },
      {
        path: RouteEnum.ArchivedNotes,
        element: <NotesListPage isArchived={true} />,
      },
      {
        path: RouteEnum.NotesDetail,
        element: <NoteDetailPage />,
      },
    ], // register your private routes overhere
  },
]);

export default router;
