import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Membership from './pages/Membership';
import Articles from './pages/Articles';

// Society pages
import AntennaPropagation from './pages/societies/AntennaPropagation';
import CIS from './pages/societies/CIS';
import CS from './pages/societies/CS';
import GRSS from './pages/societies/GRSS';
import Photonics from './pages/societies/Photonics';
import RAS from './pages/societies/RAS';
import VTS from './pages/societies/VTS';
import WomenInEngineering from './pages/societies/WomenInEngineering';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/events', element: <Events /> },
      { path: '/membership', element: <Membership /> },
      { path: '/articles', element: <Articles /> },

      // Societies routes
      { path: '/societies/antenna-propagation', element: <AntennaPropagation /> },
      { path: '/societies/cis', element: <CIS /> },
      { path: '/societies/cs', element: <CS /> },
      { path: '/societies/grss', element: <GRSS /> },
      { path: '/societies/photonics', element: <Photonics /> },
      { path: '/societies/ras', element: <RAS /> },
      { path: '/societies/vts', element: <VTS /> },
      { path: '/societies/women-in-engineering', element: <WomenInEngineering /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
