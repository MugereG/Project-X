import React from 'react';

const AboutUs = () => {
  return (
    <section className="package" id="package">
      <div className="container">

        <h2 className="h2 section-title">Why Choose Us?</h2>

        <p className="section-text">
        Welcome to our clinic, where your well-being is our priority. 
        Our dedicated team of healthcare professionals is committed to 
        providing comprehensive and compassionate medical services. 
        From routine check-ups to specialized treatments, we offer 
        a range of services designed to meet your healthcare needs. 
        </p>
        <div className='section'>
          <div className='text'>
            <h3>Compassionate Team</h3>
            <p>
            Our caring and empathetic team members are not only skilled 
            professionals but also avid animal lovers who treat your pets 
            as if they were their own.
            </p>
          </div>
          <div className='image1'>
            <img src="" alt="Image 2" className='vet_clinic'/>
          </div>
        </div>

        <div className='section_about'>
          <div className='image2'>
            <img src="" alt="Image 3" className='vet_clinic'/>
          </div>
          <div className='text'>
            <h3>Advanced Facilities</h3>
            <p>
            Equipped with the latest technology and diagnostic tools, 
            we strive to provide the highest standard of veterinary care.
            </p>
          </div>
        </div>

        <div className='section_about'>
          <div className='text'>
            <h3>Client Education</h3>
            <p>
            We believe in empowering pet owners with knowledge. 
            Our team takes the time to educate you on your pet's 
            health and wellness, offering guidance for at-home care.
            </p>
          </div>
          <div className='image1'>
            <img src="" alt="Image 2" className='vet_clinic'/>
          </div>
        </div>

        <div className='section_about'>
          <div className='image2'>
            <img src="" alt="Image 3" className='vet_clinic'/>
          </div>
          <div className='text'>
            <h3>Community Involvement</h3>
            <p>
            We are proud to be an active part of the local community. 
            From educational events to community outreach, we are committed 
            to promoting the well-being of pets beyond our clinic walls.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
