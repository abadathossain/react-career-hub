import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx'
import Home from '../src/components/Home/Home'
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Jobs from './components/Jobs/Jobs.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/jobs",
        element: <Jobs/>,
      },
      {
        path: "/applied",
        element: <AppliedJobs/>,
      },
      {
        path: "/statistics",
        element: <Statistics/>,
      },
    ],
  },,
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
