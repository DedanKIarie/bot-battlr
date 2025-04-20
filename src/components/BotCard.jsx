import React from 'react';

function BotCard({ bot, onClick, onDischarge }) {
    const { avatar_url, name, bot_class, catchphrase } = bot;
    return (
      <div className="bot-card" onClick={onClick}>
        <img src={avatar_url} alt={name} className="bot-image" />
        <h3 className="bot-name">{name}</h3>
        <p className="bot-class">{bot_class}</p>
        <p className="bot-catchphrase"><em>{catchphrase}</em></p>
        {onDischarge && (
          <button className="discharge-button" onClick={(e) => {
            e.stopPropagation();
            onDischarge(bot);
          }}>
            ✖
          </button>
        )}
      </div>
    );
  }
  

export default BotCard;
