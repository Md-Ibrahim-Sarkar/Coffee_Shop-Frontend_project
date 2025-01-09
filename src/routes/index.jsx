import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/Home';
import AddNewCoffee from '../components/add_coffe/AddNewCoffee';
import Coffee_Details from '../components/coffee-details/Coffee_Details';
import Edit_Coffee from '../components/edit-Coffee/Edit_Coffee';
import Log_In from '../components/Auth/Log_In';
import Register from '../components/Auth/Register';
import Users from '../components/user-list/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <hr />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/add-new-coffee', element: <AddNewCoffee /> },
      {
        path: '/edit-coffee/:id',
        element: <Edit_Coffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-shop-backend-kohl.vercel.app/coffee/${params.id}`
          ),
      },
      { path: '/coffee-details', element: <Coffee_Details /> },
      { path: '/log-in', element: <Log_In /> },
      { path: '/register', element: <Register /> },
      { path: '/users', element: <Users /> },

      { path: '*', element: <h1>404 Not Found</h1> },
    ],
  },
]);

export default router;
