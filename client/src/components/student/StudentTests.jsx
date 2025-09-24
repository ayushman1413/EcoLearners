"use client"
import { motion } from "framer-motion"
import { FileText, Clock, Award, AlertCircle, Calendar } from "lucide-react"

const StudentTests = () => {
  const upcomingTests = [
    {
      id: 1,
      title: "Climate Change Assessment",
      date: "2025-01-15",
      duration: "45 minutes",
      topics: ["Global Warming", "Carbon Cycle", "Climate Solutions"],
      points: 100,
    },
    {
      id: 2,
      title: "Renewable Energy Exam",
      date: "2025-01-22",
      duration: "60 minutes",
      topics: ["Solar Power", "Wind Energy", "Hydroelectric Power"],
      points: 150,
    },
  ]

  const completedTests = [
    {
      id: 1,
      title: "Environmental Basics Test",
      date: "2025-01-05",
      score: 85,
      maxScore: 100,
      grade: "B+",
    },
    {
      id: 2,
      title: "Waste Management Quiz",
      date: "2024-12-20",
      score: 92,
      maxScore: 100,
      grade: "A-",
    },
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getDaysUntil = (dateString) => {
    const today = new Date()
    const testDate = new Date(dateString)
    const diffTime = testDate - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-foreground mb-2">Tests & Assessments</h1>
        <p className="text-muted-foreground">Comprehensive evaluations to test your environmental knowledge</p>
      </motion.div>

      {/* Test Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="eco-card p-6 bg-eco-sky/5 border-eco-sky/20"
      >
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-6 h-6 text-eco-sky mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-2">Test Instructions</h2>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Tests are timed and must be completed in one session</li>
              <li>• You can only take each test once, so prepare well</li>
              <li>• Review your lessons and quiz results before taking tests</li>
              <li>• Tests contribute significantly to your overall eco-points</li>
              <li>• Make sure you have a stable internet connection</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Upcoming Tests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-foreground">Upcoming Tests</h2>
        <div className="grid gap-6">
          {upcomingTests.map((test, index) => {
            const daysUntil = getDaysUntil(test.date)
            const isUrgent = daysUntil <= 3

            return (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`eco-card p-6 ${isUrgent ? "border-destructive/20 bg-destructive/5" : ""}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        isUrgent ? "bg-destructive/10" : "bg-primary/10"
                      }`}
                    >
                      <FileText className={`w-6 h-6 ${isUrgent ? "text-destructive" : "text-primary"}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{test.title}</h3>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(test.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{test.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award className="w-4 h-4" />
                          <span>{test.points} points</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isUrgent
                          ? "bg-destructive/10 text-destructive"
                          : daysUntil <= 7
                            ? "bg-eco-sun/10 text-eco-sun"
                            : "bg-eco-leaf/10 text-eco-leaf"
                      }`}
                    >
                      {daysUntil === 0 ? "Today" : daysUntil === 1 ? "Tomorrow" : `${daysUntil} days`}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {test.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {daysUntil > 0 ? "Available to take in" : "Available now"}
                  </div>
                  <button
                    disabled={daysUntil > 0}
                    className="eco-button disabled:opacity-50 disabled:cursor-not-allowed text-sm px-4 py-2"
                  >
                    {daysUntil > 0 ? "Not Available" : "Start Test"}
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Completed Tests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-foreground">Completed Tests</h2>
        <div className="grid gap-4">
          {completedTests.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="eco-card p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-eco-leaf/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-eco-leaf" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{test.title}</h3>
                    <p className="text-sm text-muted-foreground">{formatDate(test.date)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-lg font-bold text-foreground">
                        {test.score}/{test.maxScore}
                      </p>
                      <p className="text-sm text-muted-foreground">Score</p>
                    </div>
                    <div className="px-3 py-1 bg-eco-leaf/10 text-eco-leaf rounded-full text-sm font-medium">
                      {test.grade}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default StudentTests
