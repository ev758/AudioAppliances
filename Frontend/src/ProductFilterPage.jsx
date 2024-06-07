import { Link, Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.jsx";
import SearchBar from "./components/SearchBar.jsx";

function ProductFilterPage() {
  return (
    <>
      <div>
        <h1><Link to="/">Audio Appliances</Link></h1>

        <NavigationBar/>

        <SearchBar/>

        <Outlet/>
      </div>
    </>
  )
}

export default ProductFilterPage;