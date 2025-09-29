import React from 'react';
import { motion } from 'framer-motion';
import ScrollDown from '../../components/ScrollDown/ScrollDown';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including SEO, PPC, content marketing, and email campaigns to boost your online presence and drive conversions.",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click Advertising (PPC)",
        "Content Marketing Strategy",
        "Email Marketing Campaigns",
        "Social Media Management",
        "Analytics & Reporting"
      ],
      color: "#ffd700"
    },
    {
      id: 2,
      title: "Brand Identity Design",
      description: "Create a memorable and cohesive brand identity that resonates with your target audience and sets you apart from competitors.",
      features: [
        "Logo Design & Brand Guidelines",
        "Visual Identity Development",
        "Brand Messaging Strategy",
        "Marketing Collateral Design",
        "Brand Positioning",
        "Brand Audit & Analysis"
      ],
      color: "#4a90e2"
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "Engaging social media campaigns that build community, increase brand awareness, and drive meaningful engagement with your audience.",
      features: [
        "Platform Strategy Development",
        "Content Creation & Curation",
        "Community Management",
        "Influencer Partnerships",
        "Paid Social Advertising",
        "Performance Analytics"
      ],
      color: "#e74c3c"
    },
    {
      id: 4,
      title: "Creative Advertising",
      description: "Innovative and creative advertising campaigns that capture attention and deliver measurable results across all media channels.",
      features: [
        "Campaign Concept Development",
        "Print & Digital Ad Design",
        "Video Production",
        "Outdoor Advertising",
        "Radio & TV Commercials",
        "Creative Direction"
      ],
      color: "#9b59b6"
    },
    {
      id: 5,
      title: "Web Design & Development",
      description: "Modern, responsive websites that provide exceptional user experience and drive business growth through effective design and functionality.",
      features: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "Custom Web Applications",
        "Website Maintenance",
        "Performance Optimization",
        "User Experience Design"
      ],
      color: "#2ecc71"
    },
    {
      id: 6,
      title: "Marketing Strategy",
      description: "Data-driven marketing strategies that align with your business goals and deliver sustainable growth through targeted campaigns.",
      features: [
        "Market Research & Analysis",
        "Competitive Analysis",
        "Target Audience Definition",
        "Campaign Planning",
        "ROI Measurement",
        "Strategy Optimization"
      ],
      color: "#f39c12"
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section with Background Video */}
      <section className="services-hero">
        {/* Background Video */}
        <video
          className="services-hero-background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onError={(e) => {
            console.log('Services hero video failed to load');
            e.target.style.display = 'none';
          }}
        >
          <source 
            src="https://res.cloudinary.com/dvybb2xnc/video/upload/v1755179340/6558324-uhd_3840_2160_25fps_skw5v8.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Hero Content Overlay */}
        <div className="services-hero-overlay">
          <div className="container">
            <motion.div
              className="services-hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="services-hero-text">
                <h1 className="services-hero-title">
                  Our
                  <span className="services-hero-highlight"> Services</span>
                </h1>
                
                <div className="services-hero-subtitle">
                  Comprehensive Advertising Solutions
                </div>
                
                <p className="services-hero-description">
                  We offer comprehensive advertising and marketing solutions to help your business grow and succeed in today's competitive market.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        <ScrollDown />
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div 
                  className="service-header"
                  style={{ borderLeftColor: service.color }}
                >
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <motion.button
                  className="service-cta"
                  style={{ backgroundColor: service.color }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>
          
          <div className="process-steps">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business, goals, and target audience to create a tailored strategy."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Based on our research, we develop a comprehensive marketing strategy aligned with your objectives."
              },
              {
                step: "03",
                title: "Execution",
                description: "We implement the strategy with creative campaigns and continuous optimization for best results."
              },
              {
                step: "04",
                title: "Analysis",
                description: "We track performance, analyze data, and provide detailed reports to measure success and ROI."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="process-number">{process.step}</div>
                <h3>{process.title}</h3>
                <p>{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help you achieve your marketing goals and grow your business.</p>
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
