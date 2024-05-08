import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
        <nav>
          <Link className="audio-product-links" to="/../headphones">Headphones</Link>
          <Link className="audio-product-links" to="/../headsets">Headsets</Link>
          <Link className="audio-product-links" to="/../earphones">Earphones</Link>
          <Link className="audio-product-links" to="/../microphones">Microphones</Link>
          <Link className="audio-product-links" to="/../speakers">Speakers</Link>
        </nav>
    </>
  )
}

export default NavigationBar;