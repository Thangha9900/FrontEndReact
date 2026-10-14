import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [
      { id: 1, name: 'Lop Web N04-Sunday 11 Oct 2026', active: true },
      { id: 2, name: 'Ronaldo', active: true },
      { id: 3, name: 'Lionel Messi', active: false },
      { id: 4, name: 'Kylian Mbappé', active: true },
      { id: 5, name: 'Erling Haaland', active: false },
    ],
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders the carousel, API user list, and footer', async () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Good Afternoon' })).toBeInTheDocument();
  expect(await screen.findByText('Lop Web N04-Sunday 11 Oct 2026')).toBeInTheDocument();
  expect(screen.getByText('Ronaldo')).toBeInTheDocument();
  expect(screen.getByText('Lionel Messi')).toBeInTheDocument();
  expect(screen.getByText('Kylian Mbappé')).toBeInTheDocument();
  expect(screen.getByText('Erling Haaland')).toBeInTheDocument();
  expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument();
  expect(screen.getByRole('columnheader', { name: 'ID' })).toBeInTheDocument();
  expect(screen.getByRole('columnheader', { name: 'Status' })).toBeInTheDocument();
  expect(screen.getAllByText('Active')).toHaveLength(3);
  expect(screen.getAllByText('Inactive')).toHaveLength(2);
  expect(screen.getByText('Hanoi, August 2026')).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledWith(
    'http://localhost:9000/data',
    expect.objectContaining({ signal: expect.any(AbortSignal) }),
  );
});
