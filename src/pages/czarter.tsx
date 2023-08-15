import React from 'react';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles.ts';
import { CharterForm } from 'components/CharterForm/CharterForm.tsx';
import {} from 'assets/styles/pages/czarter.styles.ts';
import { IntroSection } from 'assets/styles/pages/rejsy.styles.ts';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading.tsx';

const Czarter: React.FC = () => (
  <ContentWrapper>
    <IntroSection>
      <HighlightedHeading>Nasza oferta czarteru yachtów</HighlightedHeading>
      <p>
        Jeśli planujesz czarter łódki, to jesteśmy tutaj, aby uczynić Twoje morskie przygody jeszcze
        bardziej ekscytującymi! Prosimy o dostarczenie nam poniższych informacji, abyśmy mogli
        dostosować ofertę do Twoich potrzeb:
      </p>
    </IntroSection>
    <CharterForm />
  </ContentWrapper>
);

export default Czarter;
