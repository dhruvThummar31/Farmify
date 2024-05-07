import bannerStyle from '../styles/banner.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import vegImg from '../images/Vegetables.png'
import appleImg from "../images/Apple.png";
import fruitImg from "../images/Fruits.png";
import beansImg from "../images/Beans.png";

function Banner() {
  return (
    <Carousel
    autoPlay={true}
    infiniteLoop={true}
    interval={2000}
    showThumbs={false}
    showStatus={false}
  >
    <div>
      <img src={vegImg} alt="" />
      <div className={bannerStyle.heading}>Get Potatoes free</div>
      <div className={bannerStyle.desc}>
        Buy vegetables and get potatoes free. Conditions apply
      </div>
      <div className={bannerStyle.cta}>
        <Link to="/items/vegetables">Shop Now</Link>
      </div>
    </div>
    <div>
      <img src={appleImg} alt="" />
      <div className={bannerStyle.heading}>
        An apple a day keeps doctor away
      </div>
      <div className={bannerStyle.desc}>Royal Gala Apples</div>
      <div className={bannerStyle.cta}>
        <Link to="/items/fruits">Shop Now</Link>
      </div>
    </div>
    <div>
      <img src={fruitImg} alt="" />
      <div className={bannerStyle.heading}>Bite Into Everyday Wellness</div>
      <div className={bannerStyle.desc}>Start your day with a fruit</div>
      <div className={bannerStyle.cta}>
        <Link to="/items/fruits">Shop Now</Link>
      </div>
    </div>
    <div>
      <img src={beansImg} alt="" />
      <div className={bannerStyle.heading}>Rich in Protein</div>
      <div className={bannerStyle.desc}>20% discount on French Beans</div>
      <div className={bannerStyle.cta}>
        <Link to="/items/vegetables">Shop Now</Link>
      </div>
    </div>
  </Carousel>
  )
}

export default Banner
