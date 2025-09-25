"use client"
import { Routes, Route, Link, useLocation } from "react-router-dom"
import { Home, BookOpen, Brain, Leaf, FileText, Award, User } from "lucide-react"
import { useAuth } from "../contexts/AuthContext"


import StudentHome from "../components/student/StudentHome"
import StudentLessons from "../components/student/StudentLessons"
import StudentQuizzes from "../components/student/StudentQuizzes"
import StudentEcoActions from "../components/student/StudentEcoActions"
import StudentTests from "../components/student/StudentTests"
import StudentBadges from "../components/student/StudentBadges"

const StudentDashboard = () => {
  const { user } = useAuth()
  const location = useLocation()

  const sidebarItems = [
    { path: "/student", icon: Home, label: "Home", exact: true },
    { path: "/student/lessons", icon: BookOpen, label: "Lessons" },
    { path: "/student/quizzes", icon: Brain, label: "Quizzes" },
    { path: "/student/eco-actions", icon: Leaf, label: "Eco-Actions" },
    { path: "/student/tests", icon: FileText, label: "Tests" },
    { path: "/student/badges", icon: Award, label: "Badges" },
  ]

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-card border-r border-border min-h-screen sticky top-16">
          <div className="p-6">
            {/* User Info */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{user?.name}</h3>
                <p className="text-sm text-muted-foreground">Student</p>
              </div>
            </div>

            {/* Eco Points */}
            <div className="eco-card p-4 mb-6 bg-gradient-to-r from-eco-leaf/10 to-eco-sky/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Eco Points</p>
                  <p className="text-2xl font-bold text-eco-leaf">{user?.ecoPoints || 0}</p>
                </div>
                <Leaf className="w-8 h-8 text-eco-leaf" />
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path, item.exact)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<StudentHome />} />
            <Route path="/lessons" element={<StudentLessons />} />
            <Route path="/quizzes" element={<StudentQuizzes />} />
            <Route path="/eco-actions" element={<StudentEcoActions />} />
            <Route path="/tests" element={<StudentTests />} />
            <Route path="/badges" element={<StudentBadges />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
