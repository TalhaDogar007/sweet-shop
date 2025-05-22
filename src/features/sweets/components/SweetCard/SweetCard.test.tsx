import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SweetCard from './SweetCard';

const mockSweet = {
  id: '1',
  name: 'my sweet',
  price: 80,
  url: '/sweet.jpg',
};

describe('SweetCard', () => {
  test('renders sweet name and price', () => {
    render(
      <BrowserRouter>
        <SweetCard sweet={mockSweet} />
      </BrowserRouter>
    );

    expect(screen.getByText('my sweet')).toBeInTheDocument();
    expect(screen.getByText('80')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', '/sweet.jpg');
  });
});
