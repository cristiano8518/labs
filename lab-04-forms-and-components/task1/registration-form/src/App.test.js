import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the registration form', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /registration form/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});
