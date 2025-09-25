
"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { FileText, Clock, Award, AlertCircle, Calendar, CheckCircle, X, RotateCcw } from "lucide-react"
import { useEco } from "../../contexts/EcoContext"

const StudentTests = () => {
  const { tests } = useEco()
  const [selectedTest, setSelectedTest] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

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

  const handleStartTest = (test) => {
    setSelectedTest(test)
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResults(false)
    setScore(0)
  }

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex,
    })
  }

  const handleNextQuestion = () => {
    if (currentQuestion < selectedTest.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate score and show results
      let correctAnswers = 0
      selectedTest.questions.forEach((question, index) => {
        if (selectedAnswers[index] === question.correct) {
          correctAnswers++
        }
      })
      setScore(correctAnswers)
      setShowResults(true)
    }
  }

  const handleRetakeTest = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResults(false)
    setScore(0)
  }

  const handleBackToTests = () => {
    setSelectedTest(null)
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResults(false)
    setScore(0)
  }

  if (selectedTest && !showResults) {
    const question = selectedTest.questions[currentQuestion]
    const progress = ((currentQuestion + 1) / selectedTest.questions.length) * 100

    return (
      <div className="space-y-8">
        {/* Test Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{selectedTest.title}</h1>
            <p className="text-muted-foreground">
              Question {currentQuestion + 1} of {selectedTest.questions.length}
            </p>
          </div>
          <button
            onClick={handleBackToTests}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
            <span>Exit Test</span>
          </button>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2">
          <motion.div
            className="bg-primary h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Question */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="eco-card p-8"
        >
          <h2 className="text-xl font-semibold text-foreground mb-6">{question.question}</h2>
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(currentQuestion, index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  selectedAnswers[currentQuestion] === index
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50 text-foreground"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswers[currentQuestion] === index
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    }`}
                  >
                    {selectedAnswers[currentQuestion] === index && (
                      <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="flex justify-end mt-8">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className="eco-button disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === selectedTest.questions.length - 1 ? "Finish Test" : "Next Question"}
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  if (showResults) {
    const percentage = Math.round((score / selectedTest.questions.length) * 100)
    const passed = percentage >= 70

    return (
      <div className="space-y-8">
        {/* Results Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
              passed ? "bg-eco-leaf/10" : "bg-destructive/10"
            }`}
          >
            {passed ? (
              <Award className="w-12 h-12 text-eco-leaf" />
            ) : (
              <RotateCcw className="w-12 h-12 text-destructive" />
            )}
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{passed ? "Congratulations!" : "Keep Learning!"}</h1>
          <p className="text-muted-foreground">
            {passed ? "You passed the test!" : "You can retake the test to improve your score."}
          </p>
        </motion.div>

        {/* Score Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="eco-card p-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-4">Your Score</h2>
          <div className="text-6xl font-bold text-primary mb-4">{percentage}%</div>
          <p className="text-muted-foreground mb-6">
            You got {score} out of {selectedTest.questions.length} questions correct
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleRetakeTest} className="eco-button flex items-center justify-center space-x-2">
              <RotateCcw className="w-4 h-4" />
              <span>Retake Test</span>
            </button>
            <button
              onClick={handleBackToTests}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Back to Tests
            </button>
          </div>
        </motion.div>
      </div>
    )
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

      {/* Available Tests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-foreground">Available Tests</h2>
        <div className="grid gap-6">
          {tests.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="eco-card p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{test.title}</h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{test.questions.length} questions</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Award className="w-4 h-4" />
                        <span>100 points</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={() => handleStartTest(test)} className="eco-button flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Start Test</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>


    </div>
  )
}

export default StudentTests
