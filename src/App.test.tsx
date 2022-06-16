import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoListApp from './container/TodoListApp';

test('renders learn react link', () => {
  render(<TodoListApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
