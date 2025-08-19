import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders todo app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo App/i);
  expect(linkElement).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Add a new todo...');
  const addButton = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<App />);
  const checkbox = screen.getAllByRole('checkbox')[0];
  
  fireEvent.click(checkbox);
  
  expect(checkbox).toBeChecked();
});