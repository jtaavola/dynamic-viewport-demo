import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Dynamic Viewport Demo header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dynamic Viewport Demo/i);
  expect(linkElement).toBeInTheDocument();
});
