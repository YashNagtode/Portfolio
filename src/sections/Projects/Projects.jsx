import styles from './ProjectsStyles.module.css';
import pizza from '../../assets/pizza.png';
import movie from '../../assets/movie.png';
import donation from '../../assets/donation.png';
import travent from '../../assets/travent.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={pizza}
          link="https://github.com/YashNagtode/Pizza-Restaurant-Web-Application"
          h3="Pizza-Restaurant"
          p="Menu and Order System"
        />
        <ProjectCard
          src={movie}
          link="https://github.com/YashNagtode/REACT-Movie-Gallery-Application"
          h3="Movie Gallery"
          p="Collection of Movies"
        />
      </div>
      <br /><br />
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={donation}
          link="https://github.com/YashNagtode/CareBuddy-Android-App"
          h3="CareBuddy - Donation App"
          p="Donation Management System"
        />
        <ProjectCard
          src={travent}
          link="https://github.com/Travel-managment-system/Project"
          h3="Travent"
          p="Travel Management System"
        />
      </div>
    </section>
  );
}

export default Projects;
