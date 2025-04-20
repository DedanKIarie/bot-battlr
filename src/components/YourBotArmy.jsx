import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, onRelease }) {
  return (
    <div>
      <h1>Your Bot Army</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {army.map(bot => (
          <BotCard key={bot.id} bot={bot} onClick={() => onRelease(bot)} />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
