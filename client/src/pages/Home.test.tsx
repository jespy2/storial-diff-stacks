import React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { routesConfig } from '../App.routes';

test('renders home page', async () => {
  // ARRANGE
  const router = createMemoryRouter(routesConfig, { initialEntries: ['/'] });
  render(<RouterProvider router={router} />);
  const logo = screen.getByAltText(/Storial Logo/i);
  const slogan = screen.getByText(/Track Books To Read Next!/i);
  const libraryButton = screen.getByTestId('view-library-button');
  const addBookButton = screen.getByTestId('add-book-button');

  // ACT
  //  verify button hover effects
  await userEvent.hover(libraryButton);
  await userEvent.hover(addBookButton);

  // ASSERT
  //verify page content for default router
  expect(logo).toBeInTheDocument();
  expect(slogan).toBeInTheDocument();
  expect(libraryButton).toBeInTheDocument();
  expect(addBookButton).toBeInTheDocument();
  
  //  verify button hover effects
  expect(libraryButton).toHaveStyle({backgroundColor: 'rgb(156 163 175 / var(--tw-bg-opacity))'});
  expect(addBookButton).toHaveStyle({backgroundColor: 'rgb(156 163 175 / var(--tw-bg-opacity))'});
});