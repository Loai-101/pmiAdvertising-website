import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Digital Marketing', path: '/services' },
      { name: 'Brand Identity', path: '/services' },
      { name: 'Social Media', path: '/services' },
      { name: 'Web Design', path: '/services' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Contact', path: '/contact' }
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'Case Studies', path: '/portfolio' },
      { name: 'Marketing Tips', path: '/resources' },
      { name: 'Free Consultation', path: '/contact' }
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <motion.div
              className="footer-section company-info"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
                             <div className="footer-logo-container">
                 <img 
                   src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_auto,q_auto,w_200,h_200/v1752659104/PMI_Brown_ooq0sv" 
                   alt="PMI Advertising Logo" 
                   className="footer-logo-image"
                   onError={(e) => {
                     console.log('Footer logo failed to load, showing text fallback');
                     e.target.style.display = 'none';
                     e.target.nextElementSibling.style.display = 'block';
                   }}
                   onLoad={(e) => {
                     console.log('Footer logo loaded successfully');
                     e.target.style.display = 'block';
                     e.target.nextElementSibling.style.display = 'none';
                   }}
                 />
                 <h3 className="footer-logo-text">PMI Advertising</h3>
               </div>
              <p className="footer-description">
                We create compelling advertising campaigns that drive results and build lasting connections with your audience.
              </p>
              <div className="footer-contact">
                <p>📍 123 Business Street, Suite 100</p>
                <p>New York, NY 10001</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ hello@pmiadvertising.com</p>
              </div>
            </motion.div>

            {/* Services Links */}
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4>Services</h4>
              <ul className="footer-links">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>Company</h4>
              <ul className="footer-links">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>Resources</h4>
              <ul className="footer-links">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              className="footer-section newsletter"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4>Stay Updated</h4>
              <p>Subscribe to our newsletter for the latest marketing insights and tips.</p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <motion.button
                  type="submit"
                  className="newsletter-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="footer-bottom-content">
              <div className="footer-copyright">
                <p>&copy; {currentYear} PMI Advertising. All rights reserved.</p>
              </div>
              
              <div className="footer-social">
                <motion.a
                  href="https://www.linkedin.com/company/pmi-advertising"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://twitter.com/pmiadvertising"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Twitter
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/pmiadvertising"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Instagram
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/pmiadvertising"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Facebook
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
