import React from 'react';

function SortBar({ onFilter, selectedClasses }) {
  const botClasses = [
    'Support', 
    'Medic', 
  ];

  return (
    <div className="sort-bar">
      <h3>Filter by Class:</h3>
      <div className="filter-options">
        {botClasses.map(botClass => (
          <label key={botClass}>
            <input
              type="checkbox"
              checked={selectedClasses.includes(botClass)}
              onChange={() => onFilter(botClass)}
            />
            {botClass}
          </label>
        ))}
      </div>
    </div>
  );
}

export default SortBar;