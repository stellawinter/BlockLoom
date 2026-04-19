// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockLoom title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockLoom/i);
    expect(titleElement).toBeInTheDocument();
});
