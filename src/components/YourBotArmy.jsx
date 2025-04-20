import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="army-container">
      <h1>Your Bot Army</h1>
      <div className="army-cards">
        {army.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => onRelease(bot)}
            onDischarge={onDischarge}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
