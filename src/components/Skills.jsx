import { memo } from 'react';

const Skills = () => {
  const skills = [
    { name: 'C', icon: 'fa-c' },
    { name: 'Java', icon: 'fa-brands fa-java' },
    { name: 'Python', icon: 'fa-brands fa-python' },
    { name: 'JavaScript', icon: 'fa-brands fa-js' },
    { name: 'SQL', icon: 'fa-solid fa-database' },
    { name: 'GitHub/Git', icon: 'fa-brands fa-github' },
    { name: 'Power BI', icon: 'fa-solid fa-chart-bar' },
    { name: 'Tableau', icon: 'fa-solid fa-chart-line' },
    { name: 'Excel', icon: 'fa-solid fa-table' },
    { name: 'Matplotlib', icon: 'fa-solid fa-chart-pie' },
    { name: 'React.js', icon: 'fa-brands fa-react' },
    { name: 'Node.js', icon: 'fa-brands fa-node' },
    { name: 'HTML', icon: 'fa-brands fa-html5' },
    { name: 'CSS', icon: 'fa-brands fa-css3-alt' },
    // { name: 'Darknet Analysis', icon: 'fa-solid fa-shield-alt' },
    { name: 'Threat Intelligence', icon: 'fa-solid fa-exclamation-triangle' },
    { name: 'Network Security', icon: 'fa-solid fa-network-wired' },
    // { name: 'PostgreSQL', icon: 'fa-solid fa-database' },
    { name: 'MySQL', icon: 'fa-solid fa-database' },
    { name: 'Data Science', icon: 'fa-solid fa-flask' },
    { name: 'Machine Learning & AI', icon: 'fa-solid fa-brain' },
    { name: 'Predictive Analytics', icon: 'fa-solid fa-chart-line' },
    { name: 'NLP', icon: 'fa-solid fa-language' },
    { name: 'Data Analysis', icon: 'fa-solid fa-chart-area' },
  ];

  return (
    <section id="skills" className="skills animate-on-scroll" aria-labelledby="skills-title">
      <h2 id="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill" tabIndex="0" aria-label={`Skill: ${skill.name}`}>
            <i className={`fa ${skill.icon}`}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Skills);