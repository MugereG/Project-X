import React from 'react';

const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="container">

        <h2 className="h1 hero-title">Nairobi Animal Wellness Center</h2>

        <p className="hero-text">
        A Commitment to Compassionate Care: Enhancing the Well-Being of Every Furry Friend We Serve
        </p>

        <div className="btn-group">
          <a href="https://api.whatsapp.com/send?phone=254707752571" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Contact Us
          </a>
          <a href="https://api.whatsapp.com/send?phone=254707752571" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            Book now
          </a>
        </div>


      </div>
    </section>
  );
};

export default Home;
