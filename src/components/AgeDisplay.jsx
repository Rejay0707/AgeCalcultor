import React from 'react';

const AgeDisplay = ({ age }) => {
  return (
    <div className="age-display">
      <p>You are {age.years} years, {age.months} months, and {age.days} days old.</p>
    </div>
  );
};

export default AgeDisplay;
