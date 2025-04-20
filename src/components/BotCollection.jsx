import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, onAddToArmy }) {
  return (
    <div>
      <h1>Bot Collection</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} onClick={() => onAddToArmy(bot)} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
