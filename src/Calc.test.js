import { render, screen } from '@testing-library/react';
import Calc from './Calc';

test('renders learn react link', () => {
  render(<Calc />);
  const linkElement = screen.getByText(/calc/i);
  expect(linkElement).toBeInTheDocument();
});
