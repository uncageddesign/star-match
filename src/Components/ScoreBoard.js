import React from 'react';

// const played = this.gamesPlayed;
// console.log(this.gamesPlayed);

const ScoreBoard = () => (
  <>
    <h1>Your Score</h1>
    <div>
        <h2>Won</h2>
        <h1>{}</h1>
    </div>
    <div>
        <h2>Played</h2>
        <h1>{}</h1>
    </div>
  </>
);

export default ScoreBoard;