import React from 'react';

function StringLiteral() {
  const name = 'React Developer';
  const task = 'learning React';

  return (
    <div>
      <h2>{`Hello, ${name}!`}</h2>

      <p>{`You're currently ${task}.`}</p>
    </div>
  );
}

export default StringLiteral;