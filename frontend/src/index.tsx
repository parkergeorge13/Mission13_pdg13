import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from './Home';
import MovieList from './Movies';
import Podcasts from './Podcasts';

//Allows for navigation between pages.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'movies',
    element: <MovieList />,
  },
  {
    path: 'podcasts',
    element: <Podcasts />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
