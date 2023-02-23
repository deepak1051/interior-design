import React from 'react';

const Full = () => {
  return (
    <div>
      <header id="home">
        <nav class="navbar">
          <div class="nav-center">
            <div class="nav-header">
              <img src="./images/logo.svg" class="nav-logo" alt="" />
              <button
                type="button"
                class="nav-toggle"
                id="nav-toggle"
                aria-label="nav toggler "
              >
                <i class="fas fa-bars"></i>
              </button>
            </div>

            <div class="nav-links" id="nav-links">
              <a href="#home" class="scroll-link nav-link">
                home
              </a>

              <a href="#about" class=" scroll-link nav-link">
                about
              </a>

              <a href="#services" class="nav-link scroll-link">
                services
              </a>

              <a href="#featured" class="nav-link scroll-link">
                featured
              </a>

              <a href="#gallery" class="nav-link scroll-link">
                gallery
              </a>
            </div>

            <div class="nav-icons">
              <a
                href="https://www.twitter.com"
                target="_blank"
                class="nav-icon"
              >
                <i class="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                class="nav-icon"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                class="nav-icon"
              >
                <i class="fab fa-squarespace"></i>
              </a>
            </div>
          </div>
        </nav>

        <div class="hero">
          <div class="hero-banner">
            <h1 class="hero-title">continue exploring</h1>
            <p class="hero-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              explicabo debitis est autem dicta.
            </p>
            <a href="#featured" class="btn btn-white scroll-link">
              explore tours
            </a>
          </div>
        </div>
      </header>

      <section class="section about" id="about">
        <div class="title-wrapper">
          <h2 class="title">
            about <span class="subtitle">us</span>
          </h2>
        </div>

        <div class="section-center about-center">
          <div class="about-img">
            <img
              src="./images/about.jpeg"
              class="about-photo"
              alt="awesome beach"
            />
          </div>

          <article class="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <a href="#" class="btn-primary">
              read more
            </a>
          </article>
        </div>
      </section>

      <section class="section services" id="services">
        <div class="title-wrapper">
          <h2 class="title">
            our <span class="subtitle">services</span>
          </h2>
        </div>

        <div class="section-center services-center">
          <article class="service">
            <span class="service-icon">
              <i class="fas fa-wallet fa-fw"></i>
            </span>
            <div class="service-info">
              <h4 class="service-title">saving money</h4>
              <p class="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>

          <article class="service">
            <span class="service-icon">
              <i class="fas fa-tree fa-fw"></i>
            </span>
            <div class="service-info">
              <h4 class="service-title">endless hiking</h4>
              <p class="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>

          <article class="service">
            <span class="service-icon">
              <i class="fas fa-socks fa-fw"></i>
            </span>
            <div class="service-info">
              <h4 class="service-title">amazing comfort</h4>
              <p class="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section class="section featured-tours" id="featured">
        <div class="title-wrapper">
          <h2 class="title">
            featured <span class="subtitle">tours</span>
          </h2>
        </div>

        <div class="section-center featured-center ">
          <article class="tour-card">
            <div class="tour-img-container">
              <img src="./images/tour-1.jpeg" class="tour-img" alt="" />
              <p class="tour-date">august 14th, 2019</p>
            </div>

            <div class="tour-footer">
              <h4 class="tour-title">Tibet Adventure</h4>

              <div class="tour-info">
                <p class="tour-country">
                  <span>
                    <i class="fas fa-map"></i>
                  </span>{' '}
                  china
                </p>
                <div class="tour-details">
                  <p>6 days</p>
                  <p>from $2100</p>
                </div>
              </div>
            </div>
          </article>

          <article class="tour-card">
            <div class="tour-img-container">
              <img src="./images/tour-2.jpeg" class="tour-img" alt="" />
              <p class="tour-date">october 1th, 2019</p>
            </div>

            <div class="tour-footer">
              <h4 class="tour-title">best of java</h4>

              <div class="tour-info">
                <p class="tour-country">
                  <span>
                    <i class="fas fa-map"></i>
                  </span>{' '}
                  indonesia
                </p>
                <div class="tour-details">
                  <p>10 days</p>
                  <p>from $4100</p>
                </div>
              </div>
            </div>
          </article>

          <article class="tour-card">
            <div class="tour-img-container">
              <img src="./images/tour-3.jpeg" class="tour-img" alt="" />
              <p class="tour-date">september 26th, 2019</p>
            </div>

            <div class="tour-footer">
              <h4 class="tour-title">explore hong kong</h4>

              <div class="tour-info">
                <p class="tour-country">
                  <span>
                    <i class="fas fa-map"></i>
                  </span>{' '}
                  hong kong
                </p>
                <div class="tour-details">
                  <p>12 days</p>
                  <p>from $3100</p>
                </div>
              </div>
            </div>
          </article>

          <article class="tour-card">
            <div class="tour-img-container">
              <img src="./images/tour-4.jpeg" class="tour-img" alt="" />
              <p class="tour-date">december 5th, 2019</p>
            </div>

            <div class="tour-footer">
              <div class="tour-info">
                <p class="tour-country">
                  <span>
                    <i class="fas fa-map"></i>
                  </span>{' '}
                  kenya
                </p>
                <div class="tour-details">
                  <p>22 days</p>
                  <p>from $5400</p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div class="tour-link">
          <a href="#" class="btn-primary">
            all tours
          </a>
        </div>
      </section>

      <section id="gallery" class="gallery">
        <div class="title-wrapper">
          <h2 class="title">
            our <span class="subtitle ">gallery</span>
          </h2>
        </div>

        <div class="gallery-center">
          <div class="gallery-img-container">
            <img src="./images/tour-1.jpeg" class="gallery-img" alt="" />
            <span class="gallery-icon">
              <i class="fas fa-search"></i>
            </span>
          </div>

          <div class="gallery-img-container">
            <img src="./images/tour-2.jpeg" class="gallery-img" alt="" />
            <span class="gallery-icon">
              <i class="fas fa-search"></i>
            </span>
          </div>

          <div class="gallery-img-container">
            <img src="./images/tour-3.jpeg" class="gallery-img" alt="" />
            <span class="gallery-icon">
              <i class="fas fa-search"></i>
            </span>
          </div>

          <div class="gallery-img-container">
            <img src="./images/tour-4.jpeg" class="gallery-img" alt="" />
            <span class="gallery-icon">
              <i class="fas fa-search"></i>
            </span>
          </div>

          <div class="gallery-img-container">
            <img src="./images/tour-5.jpeg" class="gallery-img" alt="" />
            <span class="gallery-icon">
              <i class="fas fa-search"></i>
            </span>
          </div>

          <div class="gallery-img-container">
            <img src="./images/tour-6.jpeg" class="gallery-img" alt="" />
            <span class="gallery-icon">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
      </section>

      <section class="section deals" id="deals">
        <div class="title-wrapper">
          <h2 class="title">
            hot <span class="subtitle ">deals</span>
          </h2>
        </div>

        <form>
          <div class="input-group">
            <input type="email" class="form-control" placeholder="your email" />
            <button type="submit" class="btn-submit">
              submit
            </button>
          </div>
        </form>
      </section>

      <footer class="section footer">
        <div class="footer-links">
          <a href="#home" class="footer-link scroll-link">
            home
          </a>
          <a href="#about" class="footer-link scroll-link">
            about
          </a>
          <a href="#services" class="footer-link scroll-link">
            services
          </a>
          <a href="#featured" class="footer-link scroll-link">
            featured
          </a>
          <a href="#gallery" class="footer-link scroll-link" scroll-link>
            gallery
          </a>
        </div>

        <div class="footer-icons">
          <a href="https://www.twitter.com" target="_blank" class="footer-icon">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon">
            <i class="fab fa-squarespace"></i>
          </a>
        </div>
        <p class="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span>. all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Full;
