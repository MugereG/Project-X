import React from 'react';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">

        <h2 className="h2 section-title">Photo's From Our Clients</h2>

        <p className="section-text">
        We value the trust you place in us to care for your health and the health of your loved ones. Our team of professionals is driven by a shared commitment to providing the highest standard of care, and we take pride in fostering a warm and welcoming environment where you feel heard, respected, and valued.
        </p>

        <ul className="gallery-list">

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src="/cat1.jpg" alt="Cat image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src="/dog1.jpg" alt="Dog image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src="./dog2.webp" alt="Dog stiches image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src="./assets/images/gallery-4.jpg" alt="Gallery image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src="./assets/images/gallery-5.jpg" alt="Gallery image" />
            </figure>
          </li>

        </ul>

      </div>
    </section>
  );
};

export default Gallery;
