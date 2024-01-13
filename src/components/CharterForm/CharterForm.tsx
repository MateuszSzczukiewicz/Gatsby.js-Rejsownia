import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ContactFormWrapper, StyledButton } from 'components/CharterForm/CharterForm.styles';
import { FormValuesType } from '../../types/formValues.type.ts';

export const CharterForm = () => {
  const charterFormKey = process.env.GATSBY_CHARTER_FORM || '';

  const [state, handleSubmit] = useForm<FormValuesType>(charterFormKey);

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <label htmlFor="name">Imię i nazwisko:</label>
      <textarea name="Imię i nazwisko" id="name" placeholder="Imię i nazwisko" required />
      <label htmlFor="email">Adres e-mail:</label>
      <input type="Adres e-mail" name="email" id="email" placeholder="Adres e-mail" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="phoneNumber">Numer telefonu:</label>
      <input type="phoneNumber" name="Numer telefonu" id="phoneNumber" placeholder="Numer telefonu" required />
      <label htmlFor="date">Termin:</label>
      <textarea name="Termin" id="date" placeholder="Termin" required />
      <label htmlFor="place">Miejsce:</label>
      <textarea name="Miejsce" id="place" placeholder="Miejsce" required />
      <label htmlFor="numberOfPeople">Liczba osób:</label>
      <textarea name="Liczba osób" id="numberOfPeople" placeholder="Liczba osób" required />
      <label htmlFor="boatLength">Wielkość łódki:</label>
      <textarea name="Wielkość łódki:" id="boatLength" placeholder="Wielkość łódki" />
      <label htmlFor="bowThruster">Ster strumieniowy:</label>
      <div>
        <input type="radio" id="bowThrusterYes" name="Ster strumieniowy" value="tak" />
        <label htmlFor="bowThrusterYes">Tak</label>
      </div>
      <div>
        <input type="radio" id="bowThrusterNo" name="Ster strumieniowy" value="nie" />
        <label htmlFor="bowThrusterNo">Nie</label>
      </div>
      <div>
        <input type="radio" id="bowThrusterNeutral" name="Ster strumieniowy" value="obojętnie" />
        <label htmlFor="bowThrusterNeutral">Obojętnie</label>
      </div>
      <label htmlFor="numberOfRudders">Ilość sterów:</label>
      <textarea name="Ilość sterów" id="numberOfRudders" placeholder="Ilość sterów" />
      <label htmlFor="boatModel">Marka i model łódki:</label>
      <textarea name="Marka i model łódki" id="boatModel" placeholder="Marka i model łódki" />
      <label htmlFor="yearOfProduction">Rok produkcji:</label>
      <textarea name="Rok produkcji" id="yearOfProduction" placeholder="Rok produkcji" />
      {state.succeeded ? <p>Dziękujemy za wiadomość!</p> : null}
      <StyledButton type="submit" disabled={state.submitting}>
        Wyślij
      </StyledButton>
    </ContactFormWrapper>
  );
};
