import React, { useState } from "react";
import Game from './Components/Game';
import GamesPlayed from './Components/GamesPlayed';

const App = () => {
  const [gameId, setGameId] = useState(0);
 

  return (
    <div className='container' >
      <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
      <GamesPlayed played={gameId} />
    </div>
  );
};

export default App;
