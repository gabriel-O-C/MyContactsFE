import { render, screen } from '@testing-library/react';
import  Header  from './index';

describe('Should test the Header component', () => {
  it('Should test if contains an image', () => {

    const { getByAltText } = render(<Header />);
    expect(getByAltText('My Contacts'));
  });
  it('Should be in the document', () => {
    const {getElementsByTagName}= render(<Header />);

    expect(getElementsByTagName('header')).toBeInTheDocument();
  });
});
