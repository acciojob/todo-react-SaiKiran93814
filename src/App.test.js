import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders To-Do List heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/to-do list/i);
  expect(headingElement).toBeInTheDocument();
});

test('can add and delete a todo item', () => {
  render(<App />);
  
  const input = screen.getByPlaceholderText(/enter a task/i);
  const addButton = screen.getByText(/add todo/i);

  fireEvent.change(input, { target: { value: 'Test Task' } });
  fireEvent.click(addButton);

  const todoItem = screen.getByText('Test Task');
  expect(todoItem).toBeInTheDocument();

  const deleteButton = screen.getByText(/delete/i);
  fireEvent.click(deleteButton);

  expect(todoItem).not.toBeInTheDocument();
});
