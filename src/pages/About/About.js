import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO & Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      description: "With over 15 years of experience in advertising and creative direction, Sarah leads our team with passion and innovation.",
      expertise: ["Creative Strategy", "Brand Development", "Team Leadership"]
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Digital Marketing Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Michael specializes in data-driven digital marketing strategies and has helped hundreds of businesses grow their online presence.",
      expertise: ["SEO", "PPC", "Analytics", "Conversion Optimization"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Art Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Emily brings creativity and artistic vision to every project, ensuring our designs are both beautiful and effective.",
      expertise: ["Visual Design", "Brand Identity", "UI/UX Design"]
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Social Media Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      description: "David creates engaging social media content and builds meaningful connections between brands and their audiences.",
      expertise: ["Content Creation", "Community Management", "Influencer Marketing"]
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and explore new creative solutions to stay ahead of industry trends.",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from concept to execution.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and work closely with our clients to achieve shared goals.",
      icon: "🤝"
    },
    {
      title: "Results",
      description: "We focus on delivering measurable results that drive business growth and success.",
      icon: "📈"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="about-hero-title">About PMI Advertising</h1>
            <p className="about-hero-description">
              We are a passionate team of creative professionals dedicated to helping businesses grow through innovative advertising and marketing solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Story</h2>
              <p>
                Founded in 2014, PMI Advertising began with a simple mission: to create advertising that not only looks great but delivers real results. 
                What started as a small creative agency has grown into a full-service advertising powerhouse, serving clients across various industries.
              </p>
              <p>
                Over the years, we've helped hundreds of businesses transform their brands, increase their market share, and achieve their marketing goals. 
                Our success is built on a foundation of creativity, innovation, and unwavering commitment to our clients' success.
              </p>
            </motion.div>
            
            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
                alt="Our Team" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <motion.div
              className="mission-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Our Mission</h3>
              <p>
                To empower businesses with creative advertising solutions that drive growth, build meaningful connections with audiences, 
                and deliver measurable results that exceed expectations.
              </p>
            </motion.div>
            
            <motion.div
              className="vision-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Our Vision</h3>
              <p>
                To be the leading advertising agency known for innovative creativity, exceptional results, and unwavering commitment 
                to client success in an ever-evolving digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="team-member"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <h4>{member.position}</h4>
                  <p>{member.description}</p>
                  <div className="member-expertise">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { number: 500, label: "Happy Clients", suffix: "+" },
              { number: 1000, label: "Projects Completed", suffix: "+" },
              { number: 95, label: "Client Satisfaction", suffix: "%" },
              { number: 10, label: "Years Experience", suffix: "+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">
                  {stat.number}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Work Together?</h2>
            <p>Let's discuss how our team can help you achieve your advertising and marketing goals.</p>
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
