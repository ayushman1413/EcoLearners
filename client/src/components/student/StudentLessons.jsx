"use client"
import { motion } from "framer-motion"
import { BookOpen, Clock, BarChart3, Play, CheckCircle } from "lucide-react"
import { useEco } from "../../contexts/EcoContext"

const StudentLessons = () => {
  const { lessons } = useEco()

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "text-eco-leaf bg-eco-leaf/10"
      case "intermediate":
        return "text-eco-sun bg-eco-sun/10"
      case "advanced":
        return "text-destructive bg-destructive/10"
      default:
        return "text-muted-foreground bg-muted/10"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-foreground mb-2">Environmental Lessons</h1>
        <p className="text-muted-foreground">Explore our comprehensive collection of environmental education content</p>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="eco-card p-6"
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">Your Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-eco-leaf/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-8 h-8 text-eco-leaf" />
            </div>
            <p className="text-2xl font-bold text-foreground">3</p>
            <p className="text-sm text-muted-foreground">Completed</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-eco-sun/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Play className="w-8 h-8 text-eco-sun" />
            </div>
            <p className="text-2xl font-bold text-foreground">1</p>
            <p className="text-sm text-muted-foreground">In Progress</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <BookOpen className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-2xl font-bold text-foreground">{lessons.length - 4}</p>
            <p className="text-sm text-muted-foreground">Not Started</p>
          </div>
        </div>
      </motion.div>

      {/* Lessons Grid */}
      <div className="grid gap-6">
        {lessons.map((lesson, index) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="eco-card p-6 hover:shadow-lg transition-shadow group cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {lesson.title}
                    </h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{lesson.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <BarChart3 className="w-4 h-4" />
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                            lesson.difficulty,
                          )}`}
                        >
                          {lesson.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{lesson.description}</p>
                <div className="flex items-center justify-between">
                  <button className="eco-button text-sm px-4 py-2 flex items-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Start Lesson</span>
                  </button>
                  {index < 3 && (
                    <div className="flex items-center space-x-1 text-eco-leaf">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default StudentLessons
