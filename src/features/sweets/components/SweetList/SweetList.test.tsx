import { render, screen } from '@testing-library/react';
import SweetList from './SweetList';

describe('SweetList', () => {
  test('renders without crashing', () => {
    render(<SweetList sweets={[]} />);
    expect(screen.getByTestId('sweet_list_container')).toBeInTheDocument();
  });
});
