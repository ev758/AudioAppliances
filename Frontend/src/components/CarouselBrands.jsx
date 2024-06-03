import { Carousel } from 'react-bootstrap';
import Sony from '../assets/images/brand_images/sony.jpg';
import MasterDynamic from '../assets/images/brand_images/master_dynamic.jpg';
import HouseOfMarley from '../assets/images/brand_images/house_of_marley.jpg';
import Creative from '../assets/images/brand_images/creative.jpg';
import Soundcore from '../assets/images/brand_images/soundcore.jpg';
import AKG from '../assets/images/brand_images/akg.jpg';
import Beyerdynamic from '../assets/images/brand_images/beyerdynamic.jpg';
import JBL from '../assets/images/brand_images/jbl.jpg';
import JVC from '../assets/images/brand_images/jvc.jpg';
import Jabra from '../assets/images/brand_images/jabra.jpg';

function CarouselBrands() {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={3000}>
          <a href="https://electronics.sony.com/">
              <img
              className="d-block w-100"
              src={Sony}
              alt="Sony"
              />
          </a>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <a href="https://www.masterdynamic.com/">
              <img
              className="d-block w-100"
              src={MasterDynamic}
              alt="Master and Dynamic"
              />
          </a>
        </Carousel.Item>
        
        <Carousel.Item interval={3000}>
          <a href="https://www.thehouseofmarley.com/">
              <img
              className="d-block w-100"
              src={HouseOfMarley}
              alt="House of Marley"
              />
          </a>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <a href="https://us.creative.com/">
              <img
              className="d-block w-100"
              src={Creative}
              alt="Creative"
              />
          </a>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <a href="https://us.soundcore.com/">
              <img
              className="d-block w-100"
              src={Soundcore}
              alt="Soundcore"
              />
          </a>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <a href="https://www.akg.com/">
              <img
              className="d-block w-100"
              src={AKG}
              alt="AKG"
              />
          </a>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <a href="https://north-america.beyerdynamic.com/">
              <img
              className="d-block w-100"
              src={Beyerdynamic}
              alt="beyerdynamic"
              />
          </a>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <a href="https://www.jbl.com/">
              <img
              className="d-block w-100"
              src={JBL}
              alt="JBL"
              />
          </a>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <a href="https://jvcshop.us/">
              <img
              className="d-block w-100"
              src={JVC}
              alt="JVC"
              />
          </a>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <a href="https://www.jabra.com/">
              <img
              className="d-block w-100"
              src={Jabra}
              alt="Jabra"
              />
          </a>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselBrands;