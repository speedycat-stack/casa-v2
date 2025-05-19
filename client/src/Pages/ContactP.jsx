import React from 'react';
import Contact from '../components/Contact/Contact';
import Information from '../components/Contact/Information';
import './ContactP.css';

const ContactP = () => {
  return (
    <>
      <div className="contact-page-bg"></div>

      <div className="ContactPage-container">
        <section className="Contact-section">
          <Contact />
        </section>
        <section className="Information-section">
          <Information />
        </section>
      </div>
    </>
  );
};

export default ContactP;