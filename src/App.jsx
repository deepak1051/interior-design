import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

import About from "./pages/about/About";
import Start from "./pages/Start";

import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

import GalleryPage from "./pages/gallery-page/GalleryPage";
import Blog from "./pages/blogs/Blogs";
import GypsumPartition from "./pages/services/service-category/GypsumPartition";
import CorporateOffice from "./pages/services/service-category/CorporateOffice";
import GypsumFalse from "./pages/services/service-category/GypsumFalse";
import TurnkeyInterior from "./pages/services/service-category/TurnkeyInteriors";
import OfficeFurnitue from "./pages/services/service-category/OfficeFurniture";
import InteriorDesign from "./pages/services/service-category/InteriorDesign";
import SingleBlog from "./pages/blogs/SingleBlog";
import Login from "./pages/login/Login";
import AuthRequired from "./utils/AuthRequired";
import CreateBlog from "./pages/blogs/CreateBlog";
import Blogs from "./pages/blogs/Blogs";
import BlogOutlet from "./pages/blogs/BlogOutlet";
import EditBlog from "./pages/blogs/EditBlog";
import { Demo } from "./pages/about/Demo";

import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<Home />} path="/home" />
          <Route element={<Start />} path="/" />
          <Route element={<Demo />} path="/demo" />

          <Route element={<Contact />} path="/contact" />
          <Route element={<About />} path="/about" />
          <Route element={<GalleryPage />} path="/gallery" />

          {/* blogs */}
          <Route element={<BlogOutlet />}>
            <Route element={<Blogs />} path="/blogs" />
            <Route element={<SingleBlog />} path="/blogs/:id" />
            <Route element={<EditBlog />} path="/blogs/:id/edit" />
            <Route element={<AuthRequired />}>
              <Route path="/create-blog" element={<CreateBlog />} />
            </Route>
          </Route>
          {/* admin route */}
          <Route element={<Login />} path="/login" />

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
