import React from 'react';

function BotCard({ bot, onClick }) {
  return (
    <div onClick={() => onClick(bot)} style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', cursor: 'pointer' }}>
      <img src={bot.avatar_url} alt={bot.name} width="150" />
      <h2>{bot.name}</h2>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
    </div>
  );
}

export default BotCard;
