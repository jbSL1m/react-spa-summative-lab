import { render, screen } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';

const mockProject = {
  id: 1,
  title: 'Test Project',
  description: 'A test description',
};

test('renders project title', () => {
  render(<ProjectCard project={mockProject} />);
  expect(screen.getByText('Test Project')).toBeInTheDocument();
});

test('renders project description', () => {
  render(<ProjectCard project={mockProject} />);
  expect(screen.getByText('A test description')).toBeInTheDocument();
});
