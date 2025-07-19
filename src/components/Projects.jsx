import { useState, memo } from 'react';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const projects = [
  { 
    title: 'Gold Price Prediction System', 
    desc: 'Predictive analytics system for gold prices using ML models and React frontend.', 
    link: '#' 
  },
  { 
    title: 'Darknet Nexus [Cybersecurity]   (Working on it)', 
    desc: 'Cybersecurity tool for darknet activity analysis and threat intelligence.', 
    link: '#' 
  },
  { 
    title: 'Gas Detection System ', 
    desc: 'Real-time gas detection using MQ7/MQ135 sensors with Arduino.', 
    link: '#' 
  },
  { 
    title: 'Embedded Web Server with ESP32', 
    desc: 'ESP32 web server for remote IoT device monitoring and control.', 
    link: '#' 
  },
  {
    title: 'Ping Pong AI', 
    desc: 'AI-powered Ping Pong game with Q-learning, 90% win rate, and AES-256 encryption.', 
    link: '#' 
  },
  {
    title: 'Tic-Tac-Toe AI', 
    desc: 'Unbeatable Tic-Tac-Toe AI using Minimax with alpha-beta pruning, secure validator.', 
    tech: ['Tech: ','Python, ', 'Minimax Algorithm'], 
    link: '#' 
  },
  {
    title: 'Digit Recognizer', 
    desc: 'CNN for digit recognition, 98% MNIST accuracy, JWT-secured model serving.', 
    tech: ['Tech: ', 'Python, ', 'TensorFlow, ', 'Flask, ', 'JWT Authentication. '], 
    link: '#' 
  },
  {
    title: 'DeepSeek Test Automation', 
    desc: 'driven test automation with DeepSeek, Selenium, and OAuth 2.0, reducing test creation time by 70%.', 
    tech: ['Tech: ','Java, ', 'Selenium WebDriver, ', 'DeepSeek API, ', 'Healenium, ', 'OAuth 2.0'], 
    link: '#' 
  },
];

  return (
    <section id="projects" className="projects animate-on-scroll" aria-labelledby="projects-title">
      <h2 id="projects-title">Projects</h2>
      {/* <input
        id="project-search"
        type="text"
        placeholder="Search projects..."
        className="project-search"
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search projects"
      /> */}
      <div className="projects-grid">
        {projects
          .filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(project => (
            <div key={project.title} className="project" tabIndex="0" aria-label={`Project: ${project.title}`}>
              <h3><strong>{project.title}</strong></h3>
              <p>{project.desc}</p><br></br>
              <p>{project.tech}</p>
              {/* <a href={project.link} className="btn" aria-label={`View ${project.title} project`}>View Project</a> */}
            </div>
          ))}
      </div>
    </section>
  );
};

export default memo(Projects);