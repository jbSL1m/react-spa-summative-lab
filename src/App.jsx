import { useState } from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import AddProjectForm from './components/AddProjectForm';
import './App.css';

const initialProjects = [
  { id: 1, title: 'Brand Identity – Bloom Co.', category: 'Branding', description: 'Full brand identity package including logo, color palette, and typography.' },
  { id: 2, title: 'E-commerce Redesign', category: 'Web', description: 'Redesigned an online store to improve UX and increase conversion rates.' },
  { id: 3, title: 'Social Campaign – Nomad', category: 'Marketing', description: 'Multi-platform social media campaign for a travel lifestyle brand.' },
];

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  function handleAdd(project) {
    setProjects([project, ...projects]);
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <AddProjectForm onAdd={handleAdd} />
        <ProjectList projects={projects} searchTerm={searchTerm} onSearch={setSearchTerm} />
      </main>
    </div>
  );
}

export default App;
