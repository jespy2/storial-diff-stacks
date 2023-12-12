import { Home } from './pages/Home';
import { AddBook } from './pages/AddBook';
import { EditBook } from './pages/EditBook';
import { Library } from './pages/Library';
import NotFound from './pages/NotFound';

export const routesConfig = [
  {
    errorElement: <NotFound />,
    children: [
      { path: "/", element: (<Home />) },
      { path: "/", element: <Home /> },
      { path:"/books/list", element:<Library />},
      { path:"/books/create", element:< AddBook />},
      { path:"/books/update/:id", element:<EditBook />}
    ],
  },
];