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

// Society pages (PascalCase)
import AntennaPropagation from './pages/societies/AntennaPropagation';
import EMBS from './pages/societies/EMBS';
import GRSS from './pages/societies/GRSS';
import MTTS from './pages/societies/MTTS';
import PhotonicsSociety from './pages/societies/PhotonicsSociety';
import RAS from './pages/societies/RAS';
import VTS from './pages/societies/VTS';
import WomenInEngineering from './pages/societies/WomenInEngineering';
import ComputerSociety from './pages/societies/ComputerSociety';
import ComputationalIntelligence from './pages/societies/ComputationalIntelligence';

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
      { path: '/societies/embs', element: <EMBS /> },
      { path: '/societies/grss', element: <GRSS /> },
      { path: '/societies/mtts', element: <MTTS /> },
      { path: '/societies/photonics-society', element: <PhotonicsSociety /> },
      { path: '/societies/ras', element: <RAS /> },
      { path: '/societies/vts', element: <VTS /> },
      { path: '/societies/women-in-engineering', element: <WomenInEngineering /> },
      { path: '/societies/computer-society', element: <ComputerSociety /> },
      { path: '/societies/computational-intelligence', element: <ComputationalIntelligence /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
