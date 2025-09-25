"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Search, Filter, BookOpen, Users, Clock, Edit, Eye, Play, CheckCircle } from "lucide-react"

const TeacherLessons = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const lessons = [
    {
      id: 1,
      title: "Introduction to Climate Change",
      description: "Understanding the basics of climate change and its global impact",
      category: "Climate",
      duration: "45 min",
      studentsEnrolled: 18,
      completionRate: 85,
      status: "published",
      createdDate: "2024-01-15",
      lastUpdated: "2024-02-01",
    },
    {
      id: 2,
      title: "Renewable Energy Sources",
      description: "Exploring solar, wind, and other renewable energy technologies",
      category: "Energy",
      duration: "60 min",
      studentsEnrolled: 22,
      completionRate: 72,
      status: "published",
      createdDate: "2024-01-20",
      lastUpdated: "2024-01-25",
    },
    {
      id: 3,
      title: "Water Conservation Techniques",
      description: "Practical methods for conserving water in daily life",
      category: "Conservation",
      duration: "30 min",
      studentsEnrolled: 15,
      completionRate: 91,
      status: "published",
      createdDate: "2024-02-01",
      lastUpdated: "2024-02-05",
    },
    {
      id: 4,
      title: "Biodiversity and Ecosystems",
      description: "Understanding the importance of biodiversity for ecosystem health",
      category: "Biology",
      duration: "50 min",
      studentsEnrolled: 0,
      completionRate: 0,
      status: "draft",
      createdDate: "2024-02-10",
      lastUpdated: "2024-02-12",
    },
  ]

  const filteredLessons = lessons.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.category.toLowerCase().includes(searchTerm.toLowerCase())

    if (selectedFilter === "all") return matchesSearch
    if (selectedFilter === "published") return matchesSearch && lesson.status === "published"
    if (selectedFilter === "draft") return matchesSearch && lesson.status === "draft"

    return matchesSearch
  })

  const getStatusColor = (status) => {
    return status === "published" ? "bg-eco-leaf" : "bg-eco-sun"
  }

  const getStatusText = (status) => {
    return status === "published" ? "Published" : "Draft"
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Lessons</h1>
          <p className="text-muted-foreground">Create and manage your environmental education content</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-eco-leaf text-white rounded-lg hover:bg-eco-leaf/90 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Create Lesson</span>
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
            placeholder="Search lessons..."
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
            <option value="all">All Lessons</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </motion.div>

      {/* Lessons Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {filteredLessons.map((lesson, index) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="eco-card p-6"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{lesson.title}</h3>
                  <span
                    className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getStatusColor(lesson.status)}`}
                  >
                    {getStatusText(lesson.status)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{lesson.description}</p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span className="bg-eco-sky/10 text-eco-sky px-2 py-1 rounded-full">{lesson.category}</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{lesson.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Users className="w-4 h-4 text-eco-leaf" />
                  <span className="text-lg font-bold text-foreground">{lesson.studentsEnrolled}</span>
                </div>
                <p className="text-xs text-muted-foreground">Students</p>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <CheckCircle className="w-4 h-4 text-eco-sky" />
                  <span className="text-lg font-bold text-foreground">{lesson.completionRate}%</span>
                </div>
                <p className="text-xs text-muted-foreground">Completion</p>
              </div>
            </div>

            {/* Dates */}
            <div className="space-y-1 mb-4 text-xs text-muted-foreground">
              <p>Created: {new Date(lesson.createdDate).toLocaleDateString()}</p>
              <p>Updated: {new Date(lesson.lastUpdated).toLocaleDateString()}</p>
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
              {lesson.status === "published" && (
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 text-sm font-medium text-eco-sun hover:bg-eco-sun/10 rounded-lg transition-colors">
                  <Play className="w-4 h-4" />
                  <span>Preview</span>
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredLessons.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12"
        >
          <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No lessons found</h3>
          <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
          <button className="flex items-center space-x-2 px-4 py-2 bg-eco-leaf text-white rounded-lg hover:bg-eco-leaf/90 transition-colors mx-auto">
            <Plus className="w-4 h-4" />
            <span>Create Your First Lesson</span>
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default TeacherLessons
