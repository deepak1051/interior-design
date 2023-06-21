import { Link } from 'react-router-dom';
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#faq">Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              {/* <Link to="/services/corporate-office">Corporate Office</Link>
                  <Link to="/services/turnkey-interior">
                    Turnkey Interiors Contractor
                  </Link>
                  <Link to="/services/interior-design">
                    Interior Design Consultant
                  </Link>
                  <Link to="/services/office-furniture">Office Furniture</Link>
                  <Link to="/services/gypsum-partition">
                    Gypsum Partition Contractor
                  </Link>
                  <Link to="/services/gypsum-false">
                    Gypsum False Ceiling Contractor
                  </Link> */}
              <li>
                <Link to="/services/corporate-office">Corporate Office</Link>
              </li>
              <li>
                <Link to="/services/turnkey-interior">
                  Turnkey Interiors Contractor
                </Link>
              </li>
              <li>
                <Link to="/services/interior-design">
                  Interior Design Consultant
                </Link>
              </li>
              <li>
                <Link to="/services/office-furniture">Office Furniture</Link>
              </li>
              <li>
                <Link to="/services/gypsum-partition">
                  Gypsum Partition Contractor
                </Link>
              </li>
              <li>
                <Link to="/services/gypsum-false">
                  Gypsum False Ceiling Contractor
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col f-contact-us">
            <h4>contact us</h4>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <li>
                <img
                  src="/icons8-mail-material-outlined-16.png"
                  alt="email icon"
                />
                <p>info@pacifencesolutions.com</p>
              </li>
              <li>
                <img
                  src="/icons8-phone-tanah-basah-basic-outline-16.png"
                  alt="phone icon"
                />
                <p>+1888-297-6869 +91 8630819631 </p>
              </li>
              {/* <li>
                <img src="/icons8-user-location-16.png" alt="" />
                <p>Geeta Nagar, Rishikesh, Uttarakhand, 249201</p>
              </li> */}
              <li>
                <img src="/icons8-time-machine-16.png" alt="watch icon" />
                <p>24x7</p>
              </li>
            </div>
          </div>
          <div className="footer-col">
            <ul
              className="footer-logo"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <li>
                <img
                  className="footer-img-Link"
                  src="/footer.svg"
                  alt="interior karwalo logo"
                  style={{ height: '100px' }}
                />
              </li>
              <div className="social-links">
                <a to="#">
                  <i className="fab fa-facebook-f" alt="facebook icon"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter" alt="twitter icon"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram" alt="instagram icon"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" alt="linkedin icon"></i>
                </a>
              </div>
            </ul>
          </div>
        </div>
        <h6 className="copyright">
          © 2023 —{' '}
          <a
            href="https://brandingrise.com/"
            target="_blank"
            rel="noreferrer"
            style={{ borderBottom: '1px solid gray', paddingBottom: '1px' }}
          >
            Branding Rise.
          </a>{' '}
          All Rights Reserved.
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
