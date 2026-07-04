import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="col-md-6 col-lg-4"
    >
      <div className="glass-card h-100 d-flex flex-column">
        <div className="project-img-wrapper">
          <img src={project.image} alt={project.title} className="project-img" />
        </div>
        <div className="p-4 d-flex flex-column flex-grow-1">
          <h4 className="fw-bold mb-2 project-card-title">{project.title}</h4>
          <p className="text-muted small mb-4 flex-grow-1">{project.description}</p>
          
          <div className="d-flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span key={i} className="badge tech-badge fw-normal">
                {tech}
              </span>
            ))}
          </div>

          <div className="d-flex gap-3 mt-auto">
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-custom d-flex align-items-center gap-2">
              <FiGithub /> Code
            </a>
            <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-sm btn-custom btn-primary-custom d-flex align-items-center gap-2">
              <FiExternalLink /> Live
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;