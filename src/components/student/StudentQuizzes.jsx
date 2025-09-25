"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { Brain, Clock, CheckCircle, X, Award, RotateCcw } from "lucide-react"
import { useEco } from "../../contexts/EcoContext"

const StudentQuizzes = () => {
  const { quizzes } = useEco()
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleStartQuiz = (quiz) => {
    setSelectedQuiz(quiz)
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
    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate score and show results
      let correctAnswers = 0
      selectedQuiz.questions.forEach((question, index) => {
        if (selectedAnswers[index] === question.correct) {
          correctAnswers++
        }
      })
      setScore(correctAnswers)
      setShowResults(true)
    }
  }

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResults(false)
    setScore(0)
  }

  const handleBackToQuizzes = () => {
    setSelectedQuiz(null)
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResults(false)
    setScore(0)
  }

  if (selectedQuiz && !showResults) {
    const question = selectedQuiz.questions[currentQuestion]
    const progress = ((currentQuestion + 1) / selectedQuiz.questions.length) * 100

    return (
      <div className="space-y-8">
        {/* Quiz Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{selectedQuiz.title}</h1>
            <p className="text-muted-foreground">
              Question {currentQuestion + 1} of {selectedQuiz.questions.length}
            </p>
          </div>
          <button
            onClick={handleBackToQuizzes}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
            <span>Exit Quiz</span>
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
              {currentQuestion === selectedQuiz.questions.length - 1 ? "Finish Quiz" : "Next Question"}
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  if (showResults) {
    const percentage = Math.round((score / selectedQuiz.questions.length) * 100)
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
            {passed ? "You passed the quiz!" : "You can retake the quiz to improve your score."}
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
            You got {score} out of {selectedQuiz.questions.length} questions correct
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleRetakeQuiz} className="eco-button flex items-center justify-center space-x-2">
              <RotateCcw className="w-4 h-4" />
              <span>Retake Quiz</span>
            </button>
            <button
              onClick={handleBackToQuizzes}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Back to Quizzes
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
        <h1 className="text-3xl font-bold text-foreground mb-2">Knowledge Quizzes</h1>
        <p className="text-muted-foreground">Test your environmental knowledge with interactive quizzes</p>
      </motion.div>

      {/* Quiz Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="eco-card p-6 text-center">
          <div className="w-12 h-12 bg-eco-leaf/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-6 h-6 text-eco-leaf" />
          </div>
          <p className="text-2xl font-bold text-foreground">2</p>
          <p className="text-sm text-muted-foreground">Quizzes Completed</p>
        </div>
        <div className="eco-card p-6 text-center">
          <div className="w-12 h-12 bg-eco-sun/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Award className="w-6 h-6 text-eco-sun" />
          </div>
          <p className="text-2xl font-bold text-foreground">85%</p>
          <p className="text-sm text-muted-foreground">Average Score</p>
        </div>
        <div className="eco-card p-6 text-center">
          <div className="w-12 h-12 bg-eco-sky/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Brain className="w-6 h-6 text-eco-sky" />
          </div>
          <p className="text-2xl font-bold text-foreground">50</p>
          <p className="text-sm text-muted-foreground">Points Earned</p>
        </div>
      </motion.div>

      {/* Available Quizzes */}
      <div className="grid gap-6">
        {quizzes.map((quiz, index) => (
          <motion.div
            key={quiz.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="eco-card p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{quiz.title}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{quiz.questions.length} questions</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Award className="w-4 h-4" />
                      <span>25 points</span>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={() => handleStartQuiz(quiz)} className="eco-button flex items-center space-x-2">
                <Brain className="w-4 h-4" />
                <span>Start Quiz</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default StudentQuizzes
