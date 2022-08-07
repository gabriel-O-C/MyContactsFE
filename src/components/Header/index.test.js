/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Header from '.';

it('should render an image', () => {
  render(<Header />);
  const imgs = screen.getByAltText('My Contacts');
  expect(imgs).toBeInTheDocument();
});
