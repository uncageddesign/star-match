import React, { useState } from "react";
import Game from './Components/Game';
import GamesPlayed from './Components/GamesPlayed';

const App = () => {
  const [gameId, setGameId] = useState(0);
 

  return (
    <div>
      <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
      <GamesPlayed played={gameId} />
      {/* <ScoreBoard games={gamesWon} /> */}
    </div>
  );
};

export default App;
