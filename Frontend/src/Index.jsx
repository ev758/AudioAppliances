import { useState } from 'react';
import { Link } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import CarouselBrands from "./components/CarouselBrands.jsx";

function Index() {
  return (
    <>
      <div>
        <h1><Link to="/">Audio Appliances</Link></h1>

        <NavigationBar/>

        <SearchBar/>

        <CarouselBrands/>
      </div>
    </>
  )
}

export default Index;