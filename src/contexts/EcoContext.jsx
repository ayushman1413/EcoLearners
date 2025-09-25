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
 

  const [lessons] = useState([
    {
      id: 1,
      title: "Climate Change Basics",
      description: "Understanding the fundamentals of climate change and its impact on our planet.",
      duration: "15 min",
      difficulty: "Beginner",
      content: `
        <h2>What is Climate Change?</h2>
        <p>Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to burning fossil fuels like coal, oil, and gas.</p>

        <h2>The Greenhouse Effect</h2>
        <p>The greenhouse effect is a natural process that warms the Earth's surface. When the Sun's energy reaches the Earth's atmosphere, some of it is reflected back to space and the rest is absorbed and re-radiated by greenhouse gases.</p>
        <p>Greenhouse gases include carbon dioxide, methane, and nitrous oxide. Without greenhouse gases, the Earth would be too cold to support life. However, human activities have increased the concentration of these gases, leading to excessive warming.</p>

        <h2>Key Facts</h2>
        <ul>
          <li>The Earth's average temperature has risen about 1.1°C since the late 19th century.</li>
          <li>Carbon dioxide levels in the atmosphere are at their highest in 2 million years.</li>
          <li>Climate change is causing more frequent and intense extreme weather events.</li>
        </ul>
      `,
    },
    {
      id: 2,
      title: "Causes of Climate Change",
      description: "Explore the primary causes of climate change and human contributions.",
      duration: "20 min",
      difficulty: "Beginner",
      content: `
        <h2>Human Activities Driving Climate Change</h2>
        <p>The main cause of climate change is the increase in greenhouse gases in the atmosphere, primarily from human activities.</p>

        <h3>Burning Fossil Fuels</h3>
        <p>The burning of coal, oil, and natural gas for electricity and heat is the largest single source of global greenhouse gas emissions. This releases carbon dioxide (CO2) into the atmosphere.</p>

        <h3>Deforestation</h3>
        <p>Trees absorb CO2 from the atmosphere. When forests are cut down, this beneficial effect is lost, and the carbon stored in trees is released back into the atmosphere.</p>

        <h3>Agriculture and Livestock</h3>
        <p>Agriculture contributes to climate change through the release of greenhouse gases such as methane and nitrous oxide. Livestock farming is a major source of methane emissions.</p>

        <h3>Industrial Processes</h3>
        <p>Manufacturing and industrial processes release greenhouse gases through chemical reactions and energy use.</p>

        <h2>Natural Factors</h2>
        <p>While human activities are the primary driver, natural factors like volcanic activity and solar variations can also influence climate, but these have minimal impact compared to human-induced changes.</p>
      `,
    },
    {
      id: 3,
      title: "Effects of Climate Change",
      description: "Learn about the impacts of climate change on our planet and society.",
      duration: "18 min",
      difficulty: "Intermediate",
      content: `
        <h2>Environmental Impacts</h2>
        <p>Climate change is already causing significant changes to our planet's ecosystems and weather patterns.</p>

        <h3>Rising Temperatures</h3>
        <p>Global temperatures are rising, leading to heatwaves, droughts, and wildfires. The Arctic is warming twice as fast as the global average.</p>

        <h3>Sea Level Rise</h3>
        <p>As temperatures rise, glaciers and ice sheets melt, causing sea levels to rise. This threatens coastal communities and islands.</p>

        <h3>Extreme Weather</h3>
        <p>Climate change is making extreme weather events more frequent and intense, including hurricanes, floods, and droughts.</p>

        <h2>Societal Impacts</h2>
        <h3>Food Security</h3>
        <p>Changes in temperature and precipitation patterns affect crop yields and food production.</p>

        <h3>Health Risks</h3>
        <p>Heat-related illnesses, spread of diseases, and air pollution are increasing health risks.</p>

        <h3>Economic Costs</h3>
        <p>Climate change causes billions in damages from extreme weather, reduced agricultural productivity, and health costs.</p>

        <h2>Biodiversity Loss</h2>
        <p>Many species are unable to adapt quickly enough to changing conditions, leading to extinction and ecosystem disruption.</p>
      `,
    },
    {
      id: 4,
      title: "Solutions to Climate Change",
      description: "Discover practical solutions and actions to combat climate change.",
      duration: "22 min",
      difficulty: "Intermediate",
      content: `
        <h2>Transition to Renewable Energy</h2>
        <p>Shifting from fossil fuels to renewable energy sources like solar, wind, and hydroelectric power is crucial for reducing greenhouse gas emissions.</p>

        <h3>Solar Power</h3>
        <p>Solar panels convert sunlight into electricity. Solar energy is abundant and becoming increasingly cost-effective.</p>

        <h3>Wind Power</h3>
        <p>Wind turbines harness wind energy to generate electricity. Offshore wind farms can provide significant power.</p>

        <h2>Energy Efficiency</h2>
        <p>Improving energy efficiency in buildings, transportation, and industry can reduce energy consumption and emissions.</p>

        <h3>Electric Vehicles</h3>
        <p>Switching to electric vehicles powered by renewable energy reduces transportation emissions.</p>

        <h2>Carbon Capture and Storage</h2>
        <p>Technologies that capture CO2 from industrial processes and store it underground can help reduce emissions.</p>

        <h2>Individual Actions</h2>
        <ul>
          <li>Reduce energy use at home</li>
          <li>Use public transportation or bike</li>
          <li>Eat less meat and more plant-based foods</li>
          <li>Plant trees and support reforestation</li>
          <li>Support policies that address climate change</li>
        </ul>

        <h2>Policy Solutions</h2>
        <p>Governments play a key role through carbon pricing, renewable energy incentives, and international agreements like the Paris Agreement.</p>
      `,
    },
    {
      id: 5,
      title: "Renewable Energy Sources",
      description: "Explore solar, wind, and other renewable energy alternatives.",
      duration: "20 min",
      difficulty: "Intermediate",
    },
    {
      id: 6,
      title: "Waste Management & Recycling",
      description: "Learn effective waste management strategies and recycling techniques.",
      duration: "18 min",
      difficulty: "Beginner",
    },
  ])

 
  
  const [quizzes] = useState([
    {
      id: 1,
      title: "Climate Change Basics Quiz",
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
        {
          question: "What is the greenhouse effect?",
          options: ["A type of weather pattern", "The warming of Earth's surface by greenhouse gases", "A method of farming", "A renewable energy source"],
          correct: 1,
        },
        {
          question: "Which of the following is NOT a greenhouse gas?",
          options: ["Carbon dioxide", "Methane", "Nitrous oxide", "Oxygen"],
          correct: 3,
        },
        {
          question: "How much has Earth's average temperature risen since the late 19th century?",
          options: ["0.5°C", "1.1°C", "2.5°C", "5°C"],
          correct: 1,
        },
      ],
    },
    {
      id: 2,
      title: "Causes of Climate Change Quiz",
      questions: [
        {
          question: "What is the largest source of global greenhouse gas emissions?",
          options: ["Deforestation", "Burning fossil fuels", "Agriculture", "Industrial processes"],
          correct: 1,
        },
        {
          question: "How does deforestation contribute to climate change?",
          options: ["Increases oxygen levels", "Releases stored carbon", "Reduces water vapor", "Creates more shade"],
          correct: 1,
        },
        {
          question: "Which agricultural activity releases methane?",
          options: ["Planting trees", "Livestock farming", "Using pesticides", "Irrigation"],
          correct: 1,
        },
        {
          question: "What role do natural factors play in current climate change?",
          options: ["They are the primary driver", "They have minimal impact", "They counteract human activities", "They amplify human effects"],
          correct: 1,
        },
      ],
    },
    {
      id: 3,
      title: "Effects of Climate Change Quiz",
      questions: [
        {
          question: "What is causing sea levels to rise?",
          options: ["Increased rainfall", "Melting glaciers and ice sheets", "Ocean currents", "Volcanic activity"],
          correct: 1,
        },
        {
          question: "Which region is warming twice as fast as the global average?",
          options: ["Equator", "Tropics", "Arctic", "Antarctica"],
          correct: 2,
        },
        {
          question: "How does climate change affect food security?",
          options: ["Increases crop yields", "Changes temperature and precipitation patterns", "Reduces soil erosion", "Improves water quality"],
          correct: 1,
        },
        {
          question: "What is a health risk associated with climate change?",
          options: ["Improved air quality", "Spread of diseases", "Reduced allergies", "Better nutrition"],
          correct: 1,
        },
      ],
    },
    {
      id: 4,
      title: "Solutions to Climate Change Quiz",
      questions: [
        {
          question: "What is a key solution for reducing greenhouse gas emissions?",
          options: ["Burn more fossil fuels", "Transition to renewable energy", "Increase deforestation", "Use more plastic"],
          correct: 1,
        },
        {
          question: "What does carbon capture and storage do?",
          options: ["Creates new carbon", "Captures and stores CO2 underground", "Releases CO2 into the air", "Converts CO2 to oxygen"],
          correct: 1,
        },
        {
          question: "Which individual action can help combat climate change?",
          options: ["Use more electricity", "Drive more often", "Use public transportation", "Buy more meat"],
          correct: 2,
        },
        {
          question: "What is the Paris Agreement?",
          options: ["A trade deal", "An international climate agreement", "A renewable energy policy", "A deforestation treaty"],
          correct: 1,
        },
      ],
    },
  ])

 

  const [leaderboard] = useState([
    { id: 1, name: "Ankit Sharma", points: 450, rank: 1 },
    { id: 2, name: "Maya Patel", points: 380, rank: 2 },
    { id: 3, name: "Rohan Kumar", points: 320, rank: 3 },
    { id: 4, name: "Ashu Singh", points: 280, rank: 4 },
    { id: 5, name: "Dheeraj Gupta", points: 250, rank: 5 },
  ])

 

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
