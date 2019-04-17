import React from 'react';
import { Paragraf, Title } from '../App';

const AppHeader = ({ addScore }) => {
  if (addScore) {
    return <Title>Dodaj swój wynik</Title>;
  } else {
    return (
      <div>
        <Title>Gra w klikacza</Title>
        <Paragraf>
          Ile razy jesteś w stanie kliknąć w przeciągu 10 sekund?
          <br />
          Zabawa zaczyna się od pierwszego kliknięcia...
        </Paragraf>
      </div>
    );
  }
};

export default AppHeader;
