import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'digital', name: 'Digital Marketing' },
    { id: 'branding', name: 'Brand Identity' },
    { id: 'social', name: 'Social Media' },
    { id: 'web', name: 'Web Design' }
  ];

  const projects = [
    {
      id: 1,
      title: "Tech Startup Brand Launch",
      category: "branding",
      description: "Complete brand identity design and launch campaign for a revolutionary tech startup.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      results: "300% increase in brand awareness, 150% growth in social media following",
      technologies: ["Brand Strategy", "Logo Design", "Marketing Collateral"]
    },
    {
      id: 2,
      title: "E-commerce Digital Campaign",
      category: "digital",
      description: "Comprehensive digital marketing campaign for an online retail store.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      results: "200% increase in online sales, 80% improvement in conversion rate",
      technologies: ["SEO", "PPC", "Email Marketing", "Content Strategy"]
    },
    {
      id: 3,
      title: "Restaurant Social Media Strategy",
      category: "social",
      description: "Engaging social media campaign for a local restaurant chain.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      results: "500% increase in social media engagement, 120% growth in foot traffic",
      technologies: ["Instagram", "Facebook", "TikTok", "Influencer Marketing"]
    },
    {
      id: 4,
      title: "Corporate Website Redesign",
      category: "web",
      description: "Modern website redesign for a Fortune 500 company.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      results: "60% improvement in user engagement, 40% increase in lead generation",
      technologies: ["React", "Node.js", "UX/UI Design", "SEO"]
    },
    {
      id: 5,
      title: "Fashion Brand Identity",
      category: "branding",
      description: "Complete brand identity and visual design system for a luxury fashion brand.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      results: "250% increase in brand recognition, 180% growth in premium customers",
      technologies: ["Brand Strategy", "Visual Identity", "Packaging Design"]
    },
    {
      id: 6,
      title: "Healthcare Digital Marketing",
      category: "digital",
      description: "Digital marketing campaign for a healthcare provider network.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      results: "150% increase in patient inquiries, 90% improvement in online reputation",
      technologies: ["Google Ads", "Local SEO", "Content Marketing", "Review Management"]
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <motion.div
            className="portfolio-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="portfolio-hero-title">Our Portfolio</h1>
            <p className="portfolio-hero-description">
              Discover our successful campaigns and creative projects that have delivered exceptional results for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="portfolio-filter">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="portfolio-grid-section">
        <div className="container">
          <motion.div 
            className="portfolio-grid"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="portfolio-item"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="portfolio-image">
                    <img src={project.image} alt={project.title} />
                    <div className="portfolio-overlay">
                      <div className="portfolio-overlay-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <button className="view-project-btn">View Details</button>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="portfolio-category">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              
              <div className="modal-content">
                <div className="modal-image">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
                
                <div className="modal-info">
                  <h2>{selectedProject.title}</h2>
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  <div className="modal-results">
                    <h3>Results Achieved:</h3>
                    <p>{selectedProject.results}</p>
                  </div>
                  
                  <div className="modal-technologies">
                    <h3>Technologies & Services:</h3>
                    <div className="tech-tags">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Let's create something amazing together. Get in touch to discuss your next project.</p>
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
