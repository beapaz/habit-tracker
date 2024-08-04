// components/HabitForm.js
import { useState } from 'react';

const HabitForm = ({ onAddHabit }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    onAddHabit(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New Habit"
        required
      />
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;
