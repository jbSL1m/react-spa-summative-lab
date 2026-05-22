import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddProjectForm from '../components/AddProjectForm';

test('renders title and description fields', () => {
  render(<AddProjectForm onAdd={() => {}} />);
  expect(screen.getByLabelText('Title')).toBeInTheDocument();
  expect(screen.getByLabelText('Description')).toBeInTheDocument();
});

test('calls onAdd with new project when form is submitted', async () => {
  const onAdd = vi.fn();
  render(<AddProjectForm onAdd={onAdd} />);

  await userEvent.type(screen.getByLabelText('Title'), 'My Project');
  await userEvent.type(screen.getByLabelText('Description'), 'Some details');
  await userEvent.click(screen.getByRole('button', { name: 'Add' }));

  expect(onAdd).toHaveBeenCalledWith(
    expect.objectContaining({ title: 'My Project', description: 'Some details' })
  );
});

test('clears form after submission', async () => {
  render(<AddProjectForm onAdd={() => {}} />);
  const titleInput = screen.getByLabelText('Title');

  await userEvent.type(titleInput, 'My Project');
  await userEvent.click(screen.getByRole('button', { name: 'Add' }));

  expect(titleInput).toHaveValue('');
});
