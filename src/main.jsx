import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import ProductProvider from './provider/ProductProvider';
import AuthProvider from './provider/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </AuthProvider>
  </StrictMode>
);
