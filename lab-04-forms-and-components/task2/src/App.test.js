import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the article manager', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /add new article/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
});
