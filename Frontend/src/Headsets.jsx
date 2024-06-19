import { Link, Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.jsx";
import SearchBar from "./components/SearchBar.jsx";

function Headsets() {
  return (
    <>
      <div>
        <h1><Link to="/">Audio Appliances</Link></h1>

        {/* links to headphones, headsets, earphones, microphones, and speakers pages */}
        <NavigationBar/>

        <SearchBar/>

        <Outlet/>
      </div>
    </>
  )
}

export default Headsets;