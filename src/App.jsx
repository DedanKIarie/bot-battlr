import React, { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';

function App() {
  const [bots, setBots] = useState([]);
  const [yourArmy, setYourArmy] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error:', error));
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
    .then(() => {
      setBots(bots.filter(b => b.id !== bot.id));
      setYourArmy(yourArmy.filter(b => b.id !== bot.id));
    });
  };

  const filteredBots = bots.filter(bot => {
    if (selectedClasses.length === 0) return true;
    return selectedClasses.includes(bot.bot_class);
  });

  const availableBots = filteredBots.filter(bot => 
    !yourArmy.some(armyBot => armyBot.id === bot.id)
  );

  const toggleClassFilter = (botClass) => {
    setSelectedClasses(prev => 
      prev.includes(botClass)
        ? prev.filter(c => c !== botClass)
        : [...prev, botClass]
    );
  };

  return (
    <div>
      <YourBotArmy
        army={yourArmy}
        onRelease={handleReleaseFromArmy}
        onDischarge={handleDischarge}
      />
      
      <SortBar 
        onFilter={toggleClassFilter} 
        selectedClasses={selectedClasses}
      />
      
      <BotCollection
        bots={availableBots} 
        onAddToArmy={handleAddToArmy}
      />
    </div>
  );
}

export default App;