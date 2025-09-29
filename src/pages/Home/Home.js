import React from 'react';
import { Link } from 'react-router-dom';
import ScrollDown from '../../components/ScrollDown/ScrollDown';
import './Home.css';

const Home = () => {

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <video
            className="hero-background-video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onError={(e) => {
              console.log('Video failed to load');
              e.target.style.display = 'none';
            }}
          >
            <source 
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/v1755166579/WhatsApp_Video_2025-08-14_at_13.09.02_aaa6682c_gnvcwj.mp4" 
              type="video/mp4" 
            />
          </video>
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transform Your Brand with
              <span className="hero-highlight"> PMI Advertising</span>
            </h1>
            
            <div className="hero-subtitle">
              Creative Advertising Solutions
            </div>
            
            <p className="hero-description">
              We create compelling advertising campaigns that drive results and build lasting connections with your audience.
            </p>
            
            <div className="hero-buttons">
              <button className="hero-btn primary">
                <Link to="/services">Our Services</Link>
              </button>
              <button className="hero-btn secondary">
                <Link to="/portfolio">View Portfolio</Link>
              </button>
            </div>
          </div>
        </div>
        
        <ScrollDown />
      </section>

      {/* Quick Services Section */}
      <section className="quick-services">
        <div className="container">
          <h2 className="section-title">
            Our Services
          </h2>
          
          <div className="services-grid">
            {[
              {
                title: "Digital Marketing",
                description: "Comprehensive digital marketing strategies to boost your online presence"
              },
              {
                title: "Brand Identity",
                description: "Create a memorable brand identity that resonates with your audience"
              },
              {
                title: "Social Media",
                description: "Engaging social media campaigns that build community and drive engagement"
              },
              {
                title: "Photo and Video Take",
                description: "Professional photography and videography services to capture your brand's story"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="service-card"
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <div className="services-button-container">
            <Link to="/services" className="services-button">
              Learn More →
            </Link>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's create something amazing together. Get in touch with us today.</p>
            <button className="cta-button">
              <Link to="/contact">Get Started</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
