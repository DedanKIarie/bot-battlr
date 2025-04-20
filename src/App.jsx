import React, { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

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

  const handleReleaseFromArmy = (bot) => {
    setYourArmy(yourArmy.filter(b => b.id !== bot.id));
  };


  return (
    <div>
      <YourBotArmy army={yourArmy} onRelease={handleReleaseFromArmy} />
      <BotCollection bots={bots} onAddToArmy={handleAddToArmy} />
    </div>
  );
}

export default App;
