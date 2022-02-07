import ProjectCard from '../components/ProjectCard';
import Carousel from '../components/Carousel';
import { ThemeContext } from '../contexts/ThemeContext';

function Projects() {
  return (
    <>
      <h1>Projects</h1>

      <Carousel>
        {Array(2, 3, 5, 7, 6).map((item, index) => (
          <ProjectCard key={index} props={item} />
        ))}
      </Carousel>
    </>
  );
}

export default Projects;
