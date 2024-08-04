// pages/api/habits.js
import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name } = req.body;
    const newHabit = await prisma.habit.create({
      data: { name }
    });
    res.status(200).json(newHabit);
  } else {
    const habits = await prisma.habit.findMany();
    res.status(200).json(habits);
  }
};
