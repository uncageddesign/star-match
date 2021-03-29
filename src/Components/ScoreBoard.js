import React from 'react';

const ScoreBoard = (props) => (
  <>
    <h1>Your Score</h1>
    <div>
        <h2>Won</h2>
        <h1>{props.games}</h1>
    </div>
  </>
);

export default ScoreBoard;