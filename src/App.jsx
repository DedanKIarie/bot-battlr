import React, { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [yourArmy, setYourArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch bots');
        }
        return res.json();
      })
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const handleAddToArmy = (bot) => {
    if (!yourArmy.find(b => b.id === bot.id)) {
      setYourArmy([...yourArmy, bot]);
    }
  };

  const handleReleaseFromArmy = (bot) => {
    setYourArmy(yourArmy.filter(b => b.id !== bot.id));
  };

  const handleDischarge = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to discharge bot');
      }
      setBots(bots.filter(b => b.id !== bot.id));
      setYourArmy(yourArmy.filter(b => b.id !== bot.id));
    })
    .catch(error => console.error('Error discharging bot:', error));
  };

  return (
    <div>
      <YourBotArmy
        army={yourArmy}
        onRelease={handleReleaseFromArmy}
        onDischarge={handleDischarge}
      />
      <BotCollection
        bots={bots.filter(bot => !yourArmy.find(armyBot => armyBot.id === bot.id))}
        onAddToArmy={handleAddToArmy}
      />
    </div>
  );
}

export default App;
