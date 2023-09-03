import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ContactFormWrapper, StyledButton } from 'components/ContactForm/ContactForm.styles.ts';

interface FormValues {
  [key: string]: string;
}

export const ContactForm: React.FC = () => {
  const contactFormKey = process.env.GATSBY_CONTACT_FORM || '';
  const [state, handleSubmit] = useForm<FormValues>(contactFormKey);

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <label htmlFor="email">Adres e-mail</label>
      <input type="email" name="Adres e-mail" id="email" placeholder="Adres e-mail" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Treść</label>
      <textarea name="Treść wiadomości" id="message" placeholder="Wiadomość" required />
      {state.succeeded ? <p>Dziękujemy za wiadomość!</p> : null}
      <StyledButton type="submit" disabled={state.submitting}>
        Wyślij
      </StyledButton>
    </ContactFormWrapper>
  );
};
