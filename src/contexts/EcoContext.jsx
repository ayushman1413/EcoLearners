"use client"

import { createContext, useContext, useState } from "react"

const EcoContext = createContext()

export const useEco = () => {
  const context = useContext(EcoContext)
  if (!context) {
    throw new Error("useEco must be used within an EcoProvider")
  }
  return context
}

export const EcoProvider = ({ children }) => {
  // Mock data for lessons
  const [lessons] = useState([
    {
      id: 1,
      title: "Climate Change Basics",
      description: "Understanding the fundamentals of climate change and its impact on our planet.",
      duration: "15 min",
      difficulty: "Beginner",
    },
    {
      id: 2,
      title: "Renewable Energy Sources",
      description: "Explore solar, wind, and other renewable energy alternatives.",
      duration: "20 min",
      difficulty: "Intermediate",
    },
    {
      id: 3,
      title: "Waste Management & Recycling",
      description: "Learn effective waste management strategies and recycling techniques.",
      duration: "18 min",
      difficulty: "Beginner",
    },
  ])

  // Mock quiz data
  const [quizzes] = useState([
    {
      id: 1,
      title: "Climate Change Quiz",
      questions: [
        {
          question: "What is the main cause of climate change?",
          options: ["Solar flares", "Greenhouse gases", "Ocean currents", "Volcanic activity"],
          correct: 1,
        },
        {
          question: "Which gas contributes most to global warming?",
          options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
          correct: 2,
        },
        {
          question: "What can individuals do to reduce their carbon footprint?",
          options: ["Use more electricity", "Drive more often", "Use renewable energy", "Burn more fossil fuels"],
          correct: 2,
        },
      ],
    },
  ])

  // Mock leaderboard data
  const [leaderboard] = useState([
    { id: 1, name: "Ankit Sharma", points: 450, rank: 1 },
    { id: 2, name: "Maya Patel", points: 380, rank: 2 },
    { id: 3, name: "Rohan Kumar", points: 320, rank: 3 },
    { id: 4, name: "Ashu Singh", points: 280, rank: 4 },
    { id: 5, name: "Dheeraj Gupta", points: 250, rank: 5 },
  ])

  // Mock badges
  const [badges] = useState([
    {
      id: 1,
      name: "Eco Beginner",
      description: "Complete your first lesson",
      icon: "🌱",
      earned: true,
    },
    {
      id: 2,
      name: "Quiz Master",
      description: "Score 100% on 3 quizzes",
      icon: "🧠",
      earned: false,
    },
    {
      id: 3,
      name: "Eco Hero",
      description: "Complete 10 eco-actions",
      icon: "🦸",
      earned: false,
    },
    {
      id: 4,
      name: "Planet Protector",
      description: "Reach 500 eco-points",
      icon: "🌍",
      earned: false,
    },
  ])

  const value = {
    lessons,
    quizzes,
    leaderboard,
    badges,
  }

  return <EcoContext.Provider value={value}>{children}</EcoContext.Provider>
}
