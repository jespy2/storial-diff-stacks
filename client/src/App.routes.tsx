import { Home } from './pages/Home';
import { Library } from './pages/Library';
import NotFound from './pages/NotFound';

export const routesConfig = [
  {
    errorElement: <NotFound />,
    children: [
      { path: "/", element: (<Home />) },
      { path: "/", element: <Home /> },
      { path:"/books/list", element:<Library />},
    ],
  },
];