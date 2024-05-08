import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Index from "./Index.jsx";
import Headphones from "./Headphones.jsx";
import Headsets from "./Headsets.jsx";
import Earphones from "./Earphones.jsx";
import Microphones from "./Microphones.jsx";
import Speakers from "./Speakers.jsx";
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Index/>}/>
      <Route path="headphones" element={<Headphones/>}/>
      <Route path="headsets" element={<Headsets/>}/>
      <Route path="earphones" element={<Earphones/>}/>
      <Route path="microphones" element={<Microphones/>}/>
      <Route path="speakers" element={<Speakers/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);