import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

import About from './pages/about/About';
import Start from './pages/Start';

import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';

import GallaryPage from './pages/gallary-page/GallaryPage';
import Blog from './pages/blogs/Blog';
import GypsumPartition from './pages/services/service-category/GypsumPartition';
import CorporateOffice from './pages/services/service-category/CorporateOffice';
import GypsumFalse from './pages/services/service-category/GypsumFalse';
import TurnkeyInterior from './pages/services/service-category/TurnkeyInteriors';
import OfficeFurnitue from './pages/services/service-category/OfficeFurniture';
import InteriorDesign from './pages/services/service-category/InteriorDesign';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<Home />} path="/home" />
          <Route element={<Start />} path="/" />

          <Route element={<Contact />} path="/contact" />
          <Route element={<About />} path="/about" />
          <Route element={<GallaryPage />} path="/gallary" />
          <Route element={<Blog />} path="/blogs" />

          <Route
            element={<GypsumPartition />}
            path="/services/gypsum-partition"
          />
          <Route
            element={<CorporateOffice />}
            path="/services/corporate-office"
          />
          <Route element={<GypsumFalse />} path="/services/gypsum-false" />
          <Route
            element={<TurnkeyInterior />}
            path="/services/turnkey-interior"
          />
          <Route
            element={<OfficeFurnitue />}
            path="/services/office-furniture"
          />
          <Route
            element={<InteriorDesign />}
            path="/services/interior-design"
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
