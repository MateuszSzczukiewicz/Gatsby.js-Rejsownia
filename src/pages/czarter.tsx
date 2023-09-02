import React from 'react';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles.ts';
import { CharterForm } from 'components/CharterForm/CharterForm.tsx';
import { IntroSection, StyledHeading } from 'assets/styles/pages/czarter.styles.ts';

const Czarter: React.FC = () => (
  <ContentWrapper>
    <IntroSection>
      <StyledHeading>Nasza oferta czarteru yachtów</StyledHeading>
      <p>
        Jeśli planujesz czarter łódki, to jesteśmy tutaj, aby uczynić Twoje morskie przygody jeszcze bardziej ekscytującymi! Prosimy o dostarczenie
        nam poniższych informacji, abyśmy mogli dostosować ofertę do Twoich potrzeb:
      </p>
    </IntroSection>
    <CharterForm />
  </ContentWrapper>
);

export default Czarter;
