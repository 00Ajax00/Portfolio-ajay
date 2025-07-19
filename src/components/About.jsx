// import profilePic from '../assets/profile.jpg'; // Replace with your actual photo

const About = () => (
  <section id="about" className="about animate-on-scroll" aria-labelledby="about-title">
    <div className="container about-container">
      <div className="about-photo">
        {/* <img
          src={profilePic}
          alt="Ajay Vijayan, cybersecurity enthusiast and developer"
          className="profile-img"
        /> */}
      </div>
      <div className="about-content">
        <h2 id="about-title" className="animate-glitch">About Me</h2>
        <p>
          Hey, I’m Ajay Vijayan, a cybersecurity enthusiast and developer. I build secure, innovative solutions that protect the digital world while pushing the
          boundaries of tech.
        </p><br></br>
        <p>
          I specialize in Python, TensorFlow, and React, crafting projects like an AI-powered Ping
          Pong game, an unbeatable Tic-Tac-Toe AI, and a Digit Recognizer with 98% accuracy.
          and I’ve slashed test automation time by 70% using DeepSeek and Selenium.
        </p><br></br>
        <p>
          I’m passionate about outsmarting cyber threats and value integrity, curiosity, and
          collaboration. My approach? Blend creativity with precision—research thoroughly, prototype
          fast, and iterate based on feedback to deliver secure, user-focused solutions.
        </p><br></br>
        <p>
          When I’m not coding, I’m gaming, tinkering with Arduino IoT projects, or sipping coffee
          while diving into the latest cyber threat trends. I’m a lifelong learner who loves tackling
          complex challenges.
        </p><br></br>
        <p>
          I’m excited to collaborate on cybersecurity, AI, or IoT projects. Got an idea? Let’s
          connect and make it secure and awesome!
        </p>
      </div>
    </div>
  </section>
);

export default About;