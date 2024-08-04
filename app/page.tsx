'use client';

import { useState, useEffect } from 'react';
import HabitForm from '../components/HabitForm';
import prisma from '../lib/prisma';

export default function Home() {
  const [habits, setHabits] = useState([]);

  // Fetch habits from the API
  useEffect(() => {
    const fetchHabits = async () => {
      const res = await fetch('/api/habits');
      const data = await res.json();
      setHabits(data);
    };

    fetchHabits();
  }, []);

  const addHabit = async (name) => {
    const res = await fetch('/api/habits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    });
    const newHabit = await res.json();
    setHabits([...habits, newHabit]);
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <HabitForm onAddHabit={addHabit} />
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>{habit.name}</li>
        ))}
      </ul>
    </div>
  );
}
