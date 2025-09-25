"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Plus,
  Search,
  Filter,
  FileText,
  Users,
  Clock,
  Edit,
  Eye,
  BarChart3,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

const TeacherQuizzes = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const quizzes = [
    {
      id: 1,
      title: "Climate Change Basics",
      description: "Test understanding of fundamental climate change concepts",
      category: "Climate",
      questions: 10,
      duration: "15 min",
      studentsAttempted: 18,
      averageScore: 87,
      status: "published",
      createdDate: "2024-01-15",
      submissions: 24,
    },
    {
      id: 2,
      title: "Renewable Energy Quiz",
      description: "Assessment on different types of renewable energy sources",
      category: "Energy",
      questions: 15,
      duration: "20 min",
      studentsAttempted: 22,
      averageScore: 79,
      status: "published",
      createdDate: "2024-01-20",
      submissions: 28,
    },
    {
      id: 3,
      title: "Water Conservation Assessment",
      description: "Evaluate knowledge of water conservation methods",
      category: "Conservation",
      questions: 8,
      duration: "10 min",
      studentsAttempted: 15,
      averageScore: 92,
      status: "published",
      createdDate: "2024-02-01",
      submissions: 19,
    },
    {
      id: 4,
      title: "Biodiversity Challenge",
      description: "Advanced quiz on ecosystem biodiversity",
      category: "Biology",
      questions: 12,
      duration: "18 min",
      studentsAttempted: 0,
      averageScore: 0,
      status: "draft",
      createdDate: "2024-02-10",
      submissions: 0,
    },
  ]

  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesSearch =
      quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.category.toLowerCase().includes(searchTerm.toLowerCase())

    if (selectedFilter === "all") return matchesSearch
    if (selectedFilter === "published") return matchesSearch && quiz.status === "published"
    if (selectedFilter === "draft") return matchesSearch && quiz.status === "draft"

    return matchesSearch
  })

  const getStatusColor = (status) => {
    return status === "published" ? "bg-eco-leaf" : "bg-eco-sun"
  }

  const getStatusText = (status) => {
    return status === "published" ? "Published" : "Draft"
  }

  const getScoreColor = (score) => {
    if (score >= 90) return "text-eco-leaf"
    if (score >= 70) return "text-eco-sky"
    if (score >= 50) return "text-eco-sun"
    return "text-red-500"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Quizzes</h1>
          <p className="text-muted-foreground">Create and manage assessments to test student knowledge</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-eco-leaf text-white rounded-lg hover:bg-eco-leaf/90 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Create Quiz</span>
        </button>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search quizzes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-leaf/20 focus:border-eco-leaf"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-3 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-leaf/20 focus:border-eco-leaf"
          >
            <option value="all">All Quizzes</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </motion.div>

      {/* Quizzes Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {filteredQuizzes.map((quiz, index) => (
          <motion.div
            key={quiz.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="eco-card p-6"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{quiz.title}</h3>
                  <span
                    className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getStatusColor(quiz.status)}`}
                  >
                    {getStatusText(quiz.status)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{quiz.description}</p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span className="bg-eco-sky/10 text-eco-sky px-2 py-1 rounded-full">{quiz.category}</span>
                  <div className="flex items-center space-x-1">
                    <FileText className="w-3 h-3" />
                    <span>{quiz.questions} questions</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{quiz.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Users className="w-4 h-4 text-eco-leaf" />
                  <span className="text-lg font-bold text-foreground">{quiz.studentsAttempted}</span>
                </div>
                <p className="text-xs text-muted-foreground">Students</p>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <BarChart3 className="w-4 h-4 text-eco-sky" />
                  <span className={`text-lg font-bold ${getScoreColor(quiz.averageScore)}`}>
                    {quiz.averageScore || 0}%
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">Avg Score</p>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <CheckCircle className="w-4 h-4 text-eco-sun" />
                  <span className="text-lg font-bold text-foreground">{quiz.submissions}</span>
                </div>
                <p className="text-xs text-muted-foreground">Submissions</p>
              </div>
            </div>

            {/* Performance Indicator */}
            {quiz.status === "published" && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Performance</span>
                  <div className="flex items-center space-x-1">
                    {quiz.averageScore >= 80 ? (
                      <CheckCircle className="w-4 h-4 text-eco-leaf" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-eco-sun" />
                    )}
                    <span className={`text-sm font-semibold ${getScoreColor(quiz.averageScore)}`}>
                      {quiz.averageScore >= 80 ? "Good" : "Needs Review"}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      quiz.averageScore >= 80 ? "bg-eco-leaf" : "bg-eco-sun"
                    }`}
                    style={{ width: `${quiz.averageScore}%` }}
                  />
                </div>
              </div>
            )}

            {/* Date */}
            <div className="mb-4 text-xs text-muted-foreground">
              <p>Created: {new Date(quiz.createdDate).toLocaleDateString()}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <button className="flex-1 flex items-center justify-center space-x-2 py-2 text-sm font-medium text-eco-leaf hover:bg-eco-leaf/10 rounded-lg transition-colors">
                <Eye className="w-4 h-4" />
                <span>View</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-2 py-2 text-sm font-medium text-eco-sky hover:bg-eco-sky/10 rounded-lg transition-colors">
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
              {quiz.status === "published" && quiz.submissions > 0 && (
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 text-sm font-medium text-eco-sun hover:bg-eco-sun/10 rounded-lg transition-colors">
                  <BarChart3 className="w-4 h-4" />
                  <span>Results</span>
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredQuizzes.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12"
        >
          <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No quizzes found</h3>
          <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
          <button className="flex items-center space-x-2 px-4 py-2 bg-eco-leaf text-white rounded-lg hover:bg-eco-leaf/90 transition-colors mx-auto">
            <Plus className="w-4 h-4" />
            <span>Create Your First Quiz</span>
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default TeacherQuizzes
