import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ContactForm } from './ContactForm';
import '@testing-library/jest-dom/extend-expect';

jest.mock('@formspree/react', () => ({
  useForm: () => ({
    errors: {},
    succeeded: false,
    submitting: false,
    handleSubmit: jest.fn(),
  }),
  ValidationError: () => null,
}));

test('renders contact form', () => {
  render(<ContactForm />);

  const emailInput = screen.getByPlaceholderText('Adres e-mail');
  expect(emailInput).toBeDefined();

  const messageTextarea = screen.getByPlaceholderText('Wiadomość');
  expect(messageTextarea).toBeDefined();

  const submitButton = screen.getByText('Wyślij');
  expect(submitButton).toBeDefined();
});

test('displays success message on successful submission', () => {
  jest.mock('@formspree/react', () => ({
    useForm: () => ({
      errors: {},
      succeeded: true,
      submitting: false,
      handleSubmit: jest.fn(),
    }),
    ValidationError: () => null,
  }));

  render(<ContactForm />);

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
    ValidationError: () => null,
  }));

  render(<ContactForm />);

  const submitButton = screen.getByText('Wyślij');
  fireEvent.click(submitButton);

  expect(handleSubmitMock).toHaveBeenCalled();
});
