import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/SearchBar';

test('renders search input', () => {
  render(<SearchBar searchTerm="" onSearch={() => {}} />);
  expect(screen.getByPlaceholderText('Search Projects')).toBeInTheDocument();
});

test('calls onSearch when user types', async () => {
  const onSearch = vi.fn();
  render(<SearchBar searchTerm="" onSearch={onSearch} />);
  await userEvent.type(screen.getByPlaceholderText('Search Projects'), 'hello');
  expect(onSearch).toHaveBeenCalled();
});
