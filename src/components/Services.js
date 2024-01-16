import React from 'react';

const Services = () => {
  return (
    <section className="package" id="package">
      <div className="container">

        <h2 className="h2 section-title">Checkout Our Services</h2>

        <p className="section-text">
        Welcome to our clinic, where your well-being is our priority. Our dedicated team of healthcare professionals is committed to providing comprehensive and compassionate medical services. From routine check-ups to specialized treatments, we offer a range of services designed to meet your healthcare needs. 
        </p>

        <ul className="package-list">

          <li>
            <div className="package-card">

              <figure className="card-banner">
                <img src="/grooming.jpg" alt="Let your animals experience the needed care." loading="lazy" />
              </figure>

              <div className="card-content">

                <h3 className="h3 card-title">Pamper Your Paws With Expert Pet Grooming Services</h3>

                <p className="card-text">
                Our skilled and caring groomers are dedicated to providing a stress-free and enjoyable grooming experience for your pets. From stylish haircuts to soothing baths and meticulous nail trims, we tailor our services to meet the unique needs of each pet. Your four-legged friends will leave not only looking their best but also feeling refreshed and revitalized. 
                </p>

              </div>

              <div className="card-price">

                <div className="wrapper">

                  <p className="reviews">(15 reviews)</p>

                </div>

                <p className="price">
                  KES 1500
                  <span>/ per pet</span>
                </p>

                <a href="https://api.whatsapp.com/send?phone=254707752571" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  Book now
                </a>

              </div>

            </div>
          </li>
          <li>
            <div className="package-card">

              <figure className="card-banner">
                <img src="/treating.jpg" alt="Let your animals experience the needed care" loading="lazy" />
              </figure>

              <div className="card-content">

                <h3 className="h3 card-title">Spaying and Neutering Services</h3>

                <p className="card-text">
                Prioritize the long-term health and happiness of your pets with our dedicated spaying and neutering services.Beyond preventing unwanted litters, spaying and neutering offer numerous health benefits, from reducing the risk of certain diseases to promoting behavioral balance. Trust us to perform these essential procedures with the utmost care and expertise, ensuring the comfort and welfare of your pets. Join us in promoting responsible pet ownership and securing a healthier, happier future for your beloved companions through our spaying and neutering services. 
                </p>

              </div>

              <div className="card-price">

                <div className="wrapper">

                  <p className="reviews">(15 reviews)</p>


                </div>

                <p className="price">
                  KES 1500
                  <span>/ per pet</span>
                </p>

                <a href="https://api.whatsapp.com/send?phone=254707752571" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  Book now
                </a>

              </div>

            </div>
          </li>

          {/* Repeat the above structure for other package items */}

        </ul>

        <button className="btn btn-primary">View All Packages</button>

      </div>
    </section>
  );
};

export default Services;
