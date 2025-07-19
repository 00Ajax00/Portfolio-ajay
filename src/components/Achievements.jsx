import { memo } from 'react';
import TeamIcon from '../assets/team.png';
const Achievements = () => {
  const achievements = [
    { title: 'co-ordinated DaKshaa symposium of KSRCT', icon: 'fa-solid fa-trophy'},
    { title: 'Bhumi Hackathon', icon: 'fa-solid fa-trophy' },
    { title: 'Cyberthon', icon:'fa-solid fa-trophy' },
    { title: 'NSS Member', icon:'fa-solid fa-trophy' },
    { title: 'KPR CTF challenge [11/36] place', icon:'fa-solid fa-trophy' },

    // { title: 'Certification Name', icon: 'fa-solid fa-certificate' },
  ];

  return (
    <section id="achievements" className="achievements animate-on-scroll" aria-labelledby="achievements-title">
      <h2 id="achievements-title">Achievements</h2>
      <div className="achievements-grid">
        {achievements.map(achievement => (
          <div key={achievement.title} className="achievement" tabIndex="0" aria-label={`Achievement: ${achievement.title}`}>
            <i className={achievement.icon}></i>
            <p>{achievement.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Achievements);