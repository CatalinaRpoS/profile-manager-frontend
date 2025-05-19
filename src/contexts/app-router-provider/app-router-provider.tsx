import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../../pages/Login';
import NotFoundError from '../../pages/NotFoundError';
import MainPage from '../../pages/MainPage';
import Profile from '../../pages/Profile';
import Layout from '../../components/Layout';

const AppRouterProvider: React.FC<Record<string, never>> = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <MainPage />
        </Layout>
      ),
    },
    {
      path: '/login',
      element: (
        <Layout>
          <Login />
        </Layout>
      ),
    },
    {
      path: '/profile',
      element: (
        <Layout>
          <Profile />
        </Layout>
      ),
    },
    {
      path: '*',
      element: (
        <Layout>
          <NotFoundError />
        </Layout>
      ),
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default AppRouterProvider;
