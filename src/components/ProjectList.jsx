import SearchBar from './SearchBar';
import ProjectCard from './ProjectCard';

function ProjectList({ projects, searchTerm, onSearch }) {
  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="projects-container">
      <SearchBar searchTerm={searchTerm} onSearch={onSearch} />
      <div className="project-grid">
        {filtered.length > 0
          ? filtered.map((p) => <ProjectCard key={p.id} project={p} />)
          : <p className="no-results">No projects match your search.</p>
        }
      </div>
    </div>
  );
}

export default ProjectList;
