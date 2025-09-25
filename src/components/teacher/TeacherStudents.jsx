"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, User, Award, BookOpen } from "lucide-react"

const TeacherStudents = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const students = [
    {
      id: 1,
      name: "Ayush",
      email: "ayush@school.edu",
      avatar: "SJ",
      joinDate: "2024-01-15",
      progress: 85,
      lessonsCompleted: 12,
      quizzesCompleted: 8,
      badges: 5,
      lastActive: "2 hours ago",
      status: "active",
      performance: "excellent",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      email: "rahul.k@school.edu",
      avatar: "RK",
      joinDate: "2024-01-20",
      progress: 72,
      lessonsCompleted: 9,
      quizzesCompleted: 6,
      badges: 3,
      lastActive: "1 day ago",
      status: "active",
      performance: "good",
    },
    {
      id: 3,
      name: "Priya Sharma",
      email: "priya.s@school.edu",
      avatar: "PS",
      joinDate: "2024-02-01",
      progress: 91,
      lessonsCompleted: 15,
      quizzesCompleted: 10,
      badges: 7,
      lastActive: "30 minutes ago",
      status: "active",
      performance: "excellent",
    },
    {
      id: 4,
      name: "Arjun Patel",
      email: "arjun.p@school.edu",
      avatar: "AP",
      joinDate: "2024-02-10",
      progress: 45,
      lessonsCompleted: 5,
      quizzesCompleted: 3,
      badges: 1,
      lastActive: "3 days ago",
      status: "inactive",
      performance: "needs_attention",
    },
  ]

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())

    if (selectedFilter === "all") return matchesSearch
    if (selectedFilter === "active") return matchesSearch && student.status === "active"
    if (selectedFilter === "inactive") return matchesSearch && student.status === "inactive"
    if (selectedFilter === "excellent") return matchesSearch && student.performance === "excellent"
    if (selectedFilter === "needs_attention") return matchesSearch && student.performance === "needs_attention"

    return matchesSearch
  })

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case "excellent":
        return "text-eco-leaf"
      case "good":
        return "text-eco-sky"
      case "needs_attention":
        return "text-eco-sun"
      default:
        return "text-muted-foreground"
    }
  }

  const getStatusColor = (status) => {
    return status === "active" ? "bg-eco-leaf" : "bg-muted"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-foreground mb-2">Students</h1>
        <p className="text-muted-foreground">Manage and track your students' progress and performance</p>
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
            placeholder="Search students..."
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
            <option value="all">All Students</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="excellent">Excellent Performance</option>
            <option value="needs_attention">Needs Attention</option>
          </select>
        </div>
      </motion.div>

      {/* Students Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredStudents.map((student, index) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="eco-card p-6 relative"
          >
            {/* Status Indicator */}
            <div className="absolute top-4 right-4">
              <div className={`w-3 h-3 rounded-full ${getStatusColor(student.status)}`} />
            </div>

            {/* Student Info */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-eco-leaf rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">{student.avatar}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{student.name}</h3>
                <p className="text-sm text-muted-foreground">{student.email}</p>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">Overall Progress</span>
                <span className="text-sm font-semibold text-foreground">{student.progress}%</span>
              </div>
              <div className="w-full bg-muted/30 rounded-full h-2">
                <div
                  className="bg-eco-leaf h-2 rounded-full transition-all duration-500"
                  style={{ width: `${student.progress}%` }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <BookOpen className="w-4 h-4 text-eco-sky" />
                  <span className="text-lg font-bold text-foreground">{student.lessonsCompleted}</span>
                </div>
                <p className="text-xs text-muted-foreground">Lessons</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Award className="w-4 h-4 text-eco-sun" />
                  <span className="text-lg font-bold text-foreground">{student.badges}</span>
                </div>
                <p className="text-xs text-muted-foreground">Badges</p>
              </div>
            </div>

            {/* Performance & Last Active */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Performance:</span>
                <span className={`text-sm font-medium capitalize ${getPerformanceColor(student.performance)}`}>
                  {student.performance.replace("_", " ")}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Last Active:</span>
                <span className="text-sm text-foreground">{student.lastActive}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 pt-4 border-t border-border">
              <button className="w-full flex items-center justify-center space-x-2 py-2 text-sm font-medium text-eco-leaf hover:bg-eco-leaf/10 rounded-lg transition-colors">
                <User className="w-4 h-4" />
                <span>View Details</span>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredStudents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12"
        >
          <User className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No students found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </motion.div>
      )}
    </div>
  )
}

export default TeacherStudents
