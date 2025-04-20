import React, { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';

function App() {
  const [bots, setBots] = useState([]);
  const [yourArmy, setYourArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => setBots(data));
  }, []);

  const handleAddToArmy = (bot) => {
    if (!yourArmy.find(b => b.id === bot.id)) {
      setYourArmy([...yourArmy, bot]);
    }
  };

  return (
    <div>
      <BotCollection bots={bots} onAddToArmy={handleAddToArmy} />
      <h2>Your Bot Army</h2>
      {yourArmy.map(bot => (
        <div key={bot.id}>{bot.name}</div>
      ))}
    </div>
  );
}

export default App;
