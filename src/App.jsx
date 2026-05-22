import { useState } from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import AddProjectForm from './components/AddProjectForm';
import './App.css';

const initialProjects = [
  { id: 1, title: 'The Legend of Zelda: Breath of the Wild', description: 'Open-world adventure where Link explores Hyrule, solves shrines, and battles Calamity Ganon.' },
  { id: 2, title: 'Super Mario Odyssey', description: 'Mario journeys across diverse kingdoms with his hat companion Cappy to rescue Princess Peach from Bowser.' },
  { id: 3, title: 'Metroid Prime', description: 'First-person exploration of planet Tallon IV as bounty hunter Samus Aran uncovering a Phazon mystery.' },
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
