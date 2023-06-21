import './header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const Header = ({ type }) => {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState(null);
  const [showSubService, setShowSubService] = useState(false);
  useEffect(() => {
    try {
      const hello = jwtDecode(localStorage.getItem('blogToken'));
      setToken(hello);
    } catch (error) { }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('blogToken');
    window.location.reload();
    // setToken(null);
  };

  return (
    <header>
      <div className="logo">
        {/* <img src="https://responsively.app/assets/img/logo.svg" /> */}

        <Link to="/home">
          <img src="/interior-design-logo.svg" alt="interior karwalo logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {/* <Link to="/services">Services</Link> */}

            <div className="dropdown">
              <Link className="dropbtn">
                <span>Services</span>
                <span style={{ marginBottom: '8px' }}>&#8964;</span>
              </Link>
              <div className="dropdown-content">
                <Link to="/services/corporate-office">
                  <img
                    src="/images/services menu/corporate-office.webp"
                    alt="corporate office"
                  />

                  <p>Corporate Office Interior Contractor</p>
                </Link>
                <Link to="/services/turnkey-interior">
                  <img
                    src="/images/services menu/turkey-interior.webp"
                    alt="turkey interior"
                  />
                  <p>Turnkey Interiors Contractor</p>
                </Link>
                <Link to="/services/interior-design">
                  <img
                    src="/images/services menu/interior-designs-living-room.webp"
                    alt="interior design consultant"
                  />
                  <p>Interior Design Consultant</p>
                </Link>
                <Link to="/services/office-furniture">
                  <img
                    src="/images/services menu/office-furniture.webp"
                    alt="office furniture"
                  />
                  <p>Office Furniture</p>
                </Link>
                <Link to="/services/gypsum-partition">
                  <img
                    src="/images/services menu/gypsum-partition.webp"
                    alt="gypsum partition"
                  />
                  <p>Gypsum Partition Contractor</p>
                </Link>
                <Link to="/services/gypsum-false">
                  <img
                    src="/images/services menu/gypsum-false-ceiling-contractor.webp"
                    alt="gypsum false ceiling contractor"
                  />
                  <p>Gypsum False Ceiling Contractor</p>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>

          <li>
            <Link to="/blogs">Blogs</Link>
            <br />
            {token && (
              <button className="btn-accept" style={{ marginLeft: '0' }}>
                <Link to="/create-blog">Create Blog</Link>
              </button>
            )}
          </li>
          <li>
            <button className="btn">
              <Link to="/contact">Contact Us</Link>
            </button>
          </li>

          {token && (
            <button
              className="btn"
              onClick={handleLogout}
              style={{ backgroundColor: 'teal ' }}
            >
              Logout
            </button>
          )}
        </ul>
      </nav>

      {!show && (
        <GiHamburgerMenu
          className="ham-icon"
          onClick={() => setShow((prev) => !prev)}
        />
      )}
      {show && (
        <ImCross
          style={{ fontSize: '1.6rem' }}
          className="ham-icon"
          onClick={() => setShow((prev) => !prev)}
        />
      )}

      {show && (
        <nav className="ham">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <button
                onClick={() => setShowSubService((prev) => !prev)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <p>Services</p>
                <span>&#8964;</span>
              </button>
              {showSubService && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '20px',
                    fontSize: '1rem',
                  }}
                >
                  <Link to="/services/corporate-office">Corporate Office</Link>
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
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
              {token && (
                <button className="btn-accept" style={{ marginLeft: '0' }}>
                  <Link to="/create-blog">Create Blog</Link>
                </button>
              )}
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            {token && (
              <button
                className="btn"
                onClick={handleLogout}
                style={{ backgroundColor: 'teal ' }}
              >
                Logout
              </button>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
