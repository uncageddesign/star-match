import React, { useState } from 'react';
import Game from './Components/Game';

const App = () => {
  const [gameId, setGameId] = useState(1);
  return (
    <div>
      <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
    </div>
  );
};

export default App;
