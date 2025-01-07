import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/Home';
import AddNewCoffee from '../components/add_coffe/AddNewCoffee';
import Coffee_Details from '../components/coffee-details/Coffee_Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <hr />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/add-new-coffee', element: <AddNewCoffee /> },
      { path: '/coffee-details', element: <Coffee_Details /> },
      { path: '*', element: <h1>404 Not Found</h1> },
    ],
  },
]);

export default router;
