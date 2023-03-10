import Feed from '../../components/feed/Feed';
import Header from '../../components/header/Header';
import './about.css';
import AboutDetailCard from './AboutDetailCard';
import intVideo from '../../assets/int.mp4';
import ChooseUs from '../../components/choose-us/ChooseUs';
import Footer from '../../components/footer/Footer';

const desc1 =
  'Our organisations specialise in offering the best interior finishing to your commercial & residential space. We work for different organisations with the same level of dedication and attention. Our team can offer you an elegant yet astonishing look that aids beauty.';

const desc2 =
  'We aim to create a beautiful interior and give our clients an astonishing place to live. We are honoured by our clients who give us ideas. Our mission is to turn your ideas into reality. We promise to create a masterpiece which gives you an astonishing vibe!';

const About = () => {
  return (
    <>
      <div className="about">
        <Header />

        <div className="hero-wrapper">
          <h1>Decoration Ideas</h1>
          <p>All the more reasons to get your dream home interiors now</p>
          <button className="btn">Latest</button>
        </div>
      </div>
      <Feed
        title="About Interier Karwalo"
        desc="From a corporate house renovation to crafting & decorating office furniture, our inspiration team of designers works for you! The expert team of Interior Karwalo is the one-stop service that successfully covers the initial to a complex range of products. We provide the complete interior design service package, ensuring you enjoy exciting & stress-free service. "
        url="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600"
      />

      <div className="about-video-div  container">
        <div className="about-video-video ">
          <h2>OUR VISION</h2>
          <video
            id="about-video"
            loop
            autoPlay
            className="intro-transition-video"
            muted
            style={{ opacity: 1 }}
          >
            <source
              data-video-id="intro.part1.loop"
              src={intVideo}
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className="about-video-content">
          <img src="/vision1.gif" alt="" />
          <p>
            Our vision is to deliver stunning outcomes which meet your needs. We
            aspire to convey a sense of passion through our crafting &
            dedication to completing the task. We want to challenge & inspire
            the upcoming generations of clients through our productivity &
            outcomes.
          </p>
        </div>
      </div>
      {/* <AboutDetailCard /> */}
      {/* <ChooseUs /> */}
      <div className="service-desc1 service-desc1-second container">
        <div className="about-video-content">
          <img src="/mission.gif" alt="" />
          <p className="service-desc1-second-p">{desc2}</p>
        </div>
        <div className="service-desc1-imageConatiner service-desc1-second-img">
          <h1>Our Mission</h1>
          <img
            src="https://media.istockphoto.com/id/1455622789/photo/black-luxury-modern-retro-style-living-room-with-blank-image-frames-for-your-design.jpg?b=1&s=170667a&w=0&k=20&c=tNaQIArkCvC3oY_6-80BmUGyA5QinElxTda_r4s1u_M="
            alt=""
          />
        </div>
      </div>
      <div className="service-desc1 container">
        <div className="service-desc1-imageConatiner">
          <h1> Our Philosophy</h1>
          <img
            src="https://media.istockphoto.com/id/1352666375/photo/a-stylish-living-room-interior-with-brown-and-yellow-coloured-furniture-and-wooden-elements.jpg?b=1&s=170667a&w=0&k=20&c=2UpsLAY8HpsFJHQ4gE0rrvRgZVeslErX1uTno6uTFzg="
            alt=""
          />
        </div>
        <div className="about-video-content">
          <img src="/philosophy.gif" alt="" />
          <p>{desc1}</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
