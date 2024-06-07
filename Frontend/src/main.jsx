import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Index from "./Index.jsx";
import Headphones from "./Headphones.jsx";
import Headsets from "./Headsets.jsx";
import Earphones from "./Earphones.jsx";
import Microphones from "./Microphones.jsx";
import Speakers from "./Speakers.jsx";
import SearchResults from "./SearchResults.jsx";
import ProductFilterPage from "./ProductFilterPage.jsx";
import ProductPage from './components/ProductPage.jsx';
import ProductResults from "./components/ProductResults.jsx";
import FilterResults from "./components/FilterResults.jsx";
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Index/>}/>

      <Route path="headphones" element={<Headphones/>}>
        <Route index element={<ProductResults productType={"headphones"}/>}/>
        <Route path=":productName" element={<ProductPage/>}/>
      </Route>

      <Route path="headsets" element={<Headsets/>}>
        <Route index element={<ProductResults productType={"headsets"}/>}/>
        <Route path=":productName" element={<ProductPage/>}/>
      </Route>

      <Route path="earphones" element={<Earphones/>}>
        <Route index element={<ProductResults productType={"earphones"}/>}/>
        <Route path=":productName" element={<ProductPage/>}/>
      </Route>

      <Route path="microphones" element={<Microphones/>}>
        <Route index element={<ProductResults productType={"microphones"}/>}/>
        <Route path=":productName" element={<ProductPage/>}/>
      </Route>

      <Route path="speakers" element={<Speakers/>}>
        <Route index element={<ProductResults productType={"speakers"}/>}/>
        <Route path=":productName" element={<ProductPage/>}/>
      </Route>

      <Route path="searchresults" element={<SearchResults/>}>
        <Route path=":keyword" element={<ProductResults productType={null}/>}/>
        <Route path=":keyword/:productName" element={<ProductPage/>}/>
      </Route>

      <Route path="filterresults" element={<ProductFilterPage/>}>
        <Route path=":filter" element={<FilterResults/>}/>
        <Route path=":filter/:productName" element={<ProductPage/>}/>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);