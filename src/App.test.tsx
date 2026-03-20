import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the main heading correctly', () => {
    render(<App />);
    const heading = screen.getAllByText(/GDG_TACNA/i)[0];
    expect(heading).toBeInTheDocument();
  });
});
