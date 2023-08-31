import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CharterForm } from './CharterForm';
import '@testing-library/jest-dom/extend-expect';

jest.mock('@formspree/react', () => ({
  useForm: () => ({
    errors: {},
    succeeded: false,
    submitting: false,
    handleSubmit: jest.fn(),
  }),
}));

test('renders charter form', () => {
  render(<CharterForm />);

  const emailInput = screen.getByPlaceholderText('Adres e-mail');
  expect(emailInput).toBeDefined();

  const nameTextarea = screen.getByPlaceholderText('Imię i nazwisko');
  expect(nameTextarea).toBeDefined();
});

test('displays success message on successful submission', () => {
  jest.mock('@formspree/react', () => ({
    useForm: () => ({
      errors: {},
      succeeded: true,
      submitting: false,
      handleSubmit: jest.fn(),
    }),
  }));

  render(<CharterForm />);

  const successMessage = screen.getByText('Dziękujemy za wiadomość!');
  expect(successMessage).toBeDefined();
});

test('calls handleSubmit when form is submitted', () => {
  const handleSubmitMock = jest.fn();
  jest.mock('@formspree/react', () => ({
    useForm: () => ({
      errors: {},
      succeeded: false,
      submitting: false,
      handleSubmit: handleSubmitMock,
    }),
  }));

  render(<CharterForm />);

  const submitButton = screen.getByText('Wyślij');
  fireEvent.click(submitButton);

  expect(handleSubmitMock).toHaveBeenCalled();
});
