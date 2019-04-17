import React from 'react';
import Main from './Main';
import AddScore from './AddScore';

const Home = ({
  players,
  addNewScore,
  numberOfClickToAdd,
  changeSite,
  addScoreToFireBase,
  changeAddScore,
  addScore
}) => {
  return (
    <div>
      {addScore ? (
        <AddScore
          numberOfClickToAdd={numberOfClickToAdd}
          addScoreToFireBase={addScoreToFireBase}
          changeAddScore={changeAddScore}
          changeSite={changeSite}
        />
      ) : (
        <Main
          players={players}
          addNewScore={addNewScore}
          changeSite={changeSite}
        />
      )}
    </div>
  );
};

export default Home;
