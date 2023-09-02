import React from 'react';
import { useForm } from '@formspree/react';
import { ContactFormWrapper, StyledButton } from 'components/CharterForm/CharterForm.styles';

interface FormValues {
  [key: string]: string;
}

export const CharterForm: React.FC = () => {
  const charterFormKey = process.env.GATSBY_CHARTER_FORM || '';

  const [state, handleSubmit] = useForm<FormValues>(charterFormKey);

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <label htmlFor="name">Imię i nazwisko:</label>
      <textarea name="name" id="name" placeholder="Imię i nazwisko" required />
      <label htmlFor="email">Adres e-mail:</label>
      <input type="email" name="email" id="email" placeholder="Adres e-mail" required />
      <label htmlFor="phoneNumber">Numer telefonu:</label>
      <input type="phoneNumber" name="phoneNumber" id="phoneNumber" placeholder="Numer telefonu" required />
      <label htmlFor="date">Termin:</label>
      <textarea name="date" id="date" placeholder="Termin" required />
      <label htmlFor="place">Miejsce:</label>
      <textarea name="place" id="place" placeholder="Miejsce" required />
      <label htmlFor="numberOfPeople">Liczba osób:</label>
      <textarea name="numberOfPeople" id="numberOfPeople" placeholder="Liczba osób" required />
      <label htmlFor="boatLength">Wielkość łódki:</label>
      <textarea name="boatLength" id="boatLength" placeholder="Wielkość łódki" />
      <label htmlFor="bowThruster">Ster strumieniowy:</label>
      <div>
        <input type="radio" id="bowThrusterYes" name="bowThruster" value="tak" />
        <label htmlFor="bowThrusterYes">Tak</label>
      </div>
      <div>
        <input type="radio" id="bowThrusterNo" name="bowThruster" value="nie" />
        <label htmlFor="bowThrusterNo">Nie</label>
      </div>
      <div>
        <input type="radio" id="bowThrusterNeutral" name="bowThruster" value="obojętnie" />
        <label htmlFor="bowThrusterNeutral">Obojętnie</label>
      </div>
      <label htmlFor="numberOfRudders">Ilość sterów:</label>
      <textarea name="numberOfRudders" id="numberOfRudders" placeholder="Ilość sterów" />
      <label htmlFor="boatModel">Marka i model łódki:</label>
      <textarea name="boatModel" id="boatModel" placeholder="Marka i model łódki" />
      <label htmlFor="yearOfProduction">Rok produkcji:</label>
      <textarea name="yearOfProduction" id="yearOfProduction" placeholder="Rok produkcji" />
      {state.succeeded ? <p>Dziękujemy za wiadomość!</p> : null}
      <StyledButton type="submit" disabled={state.submitting}>
        Wyślij
      </StyledButton>
    </ContactFormWrapper>
  );
};
