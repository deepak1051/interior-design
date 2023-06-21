import './hero.css';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <>
      <div className="hero ">
        <Header />
        <div>
          <video
            id="hero-video"
            loop
            autoPlay
            className="intro-transition-video"
            muted
            style={{ opacity: 1 }}
            playsInline
            preload="metadata"
          >
            <source
              data-video-id="intro.part1.loop"
              src="https://21354489.fs1.hubspotusercontent-na1.net/hubfs/21354489/Videos/VB%20SHOWREEL%2001%20WEBSITE.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className="hero-wrapper">
          <h1>
            Get Your Dream House Setup <br />
            by Interior Karwalo Experts{' '}
          </h1>
          <p>Our Interior Designers are Passionate about Quality Creativity.</p>
          <button className="btn">
            <Link to={'/contact'}>Contact Us</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
