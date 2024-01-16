import React from 'react';

const Contact = () => {
  return (
    <section className="cta" id="contact">
      <div className="container">

        <div className="cta-content">

          <h2 className="h2 section-title">Have An Unforgettable Experience. Remember Us!</h2>

          <p className="section-text">
          Your well-being is our priority, and we're here to support you on your path to a healthier, happier life. Remember, your health matters, and so do you. Contact us now and let's take the first step together towards a brighter, healthier future."
          </p>
        </div>

        <a href="https://api.whatsapp.com/send?phone=254707752571" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Contact Us
        </a>

      </div>
    </section>
  );
};

export default Contact;
