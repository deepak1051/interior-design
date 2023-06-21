import { Link } from "react-router-dom";
import "./spinner.css";
const Spinner = () => {
  const arrayImg = {
    one: "/images/spinner/office chairs Interior.webp",
    two: "/images/spinner/Luxury office space.webp",
    three: "/images/spinner/office-gym.webp",
    four: "/images/spinner/office-desk-interior-design.webp",
    five: "/images/spinner/luxury office interior design by interior karwalo.webp",
    six: "/images/spinner/office canteen interior design.webp",
  };

  return (
    <div className="body">
      <div className="spinner-title">
        <h2>Be inspired by what you see</h2>
        <p style={{ marginTop: "5px" }}>All you need to create your space</p>
      </div>
      <Link to="/services/gypsum-partition">
        <div className="box">
          {/* <Link to="/services"> */}
          <span style={{ "--i": 3 }}>
            <img src={arrayImg.six} alt="office canteen interior design" />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ "--i": 2 }}>
            <img
              src="/images/spinner/beautiful white living room interior.webp"
              alt="beautiful white living room interior"
            />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ "--i": 5 }}>
            <img src={arrayImg.two} alt="luxury office space" />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ "--i": 1 }}>
            <img src={arrayImg.one} alt="office chairs interior" />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ "--i": 6 }}>
            <img src={arrayImg.three} alt="gym in office" />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ "--i": 7 }}>
            <img src={arrayImg.four} alt="office desk interior design" />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ "--i": 4 }}>
            <img
              src="/images/spinner/living room with fireplace.webp"
              alt="living room with fireplace"
            />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ "--i": 8 }}>
            <img src={arrayImg.five} alt="luxury office interior design by interior karwalo" />
          </span>
          {/* </Link> */}
        </div>
      </Link>
      <footer></footer>
    </div>
  );
};

export default Spinner;
