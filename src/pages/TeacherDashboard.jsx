"use client"
import { Routes, Route, Link, useLocation } from "react-router-dom"
import { Home, Users, BookOpen, FileText, BarChart3, Settings, LogOut, Menu, X } from "lucide-react"
import { useAuth } from "../contexts/AuthContext"
import { useState } from "react"
import TeacherHome from "../components/teacher/TeacherHome"
import TeacherStudents from "../components/teacher/TeacherStudents"
import TeacherLessons from "../components/teacher/TeacherLessons"
import TeacherQuizzes from "../components/teacher/TeacherQuizzes"
import TeacherAnalytics from "../components/teacher/TeacherAnalytics"
import TeacherSettings from "../components/teacher/TeacherSettings"

const TeacherDashboard = () => {
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { user, logout } = useAuth()

  const sidebarItems = [
    { path: "/teacher", id: "home", label: "Dashboard", icon: Home, exact: true },
    { path: "/teacher/students", id: "students", label: "Students", icon: Users },
    { path: "/teacher/lessons", id: "lessons", label: "Lessons", icon: BookOpen },
    { path: "/teacher/quizzes", id: "quizzes", label: "Quizzes", icon: FileText },
    { path: "/teacher/analytics", id: "analytics", label: "Analytics", icon: BarChart3 },
    { path: "/teacher/settings", id: "settings", label: "Settings", icon: Settings },
  ]

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const renderContent = () => {
    switch (location.pathname) {
      case "/teacher":
        return <TeacherHome />
      case "/teacher/students":
        return <TeacherStudents />
      case "/teacher/lessons":
        return <TeacherLessons />
      case "/teacher/quizzes":
        return <TeacherQuizzes />
      case "/teacher/analytics":
        return <TeacherAnalytics />
      case "/teacher/settings":
        return <TeacherSettings />
      default:
        return <TeacherHome />
    }
  }

  const sidebarContent = (
    <>
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-eco-leaf rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">E</span>
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground">EcoLearners</h1>
          <p className="text-sm text-muted-foreground">Teacher Portal</p>
        </div>
      </div>
      <div className="space-y-2 flex-1">
        {sidebarItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.path, item.exact)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
      <div className="border-t border-border p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-eco-sun rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">{user?.name?.charAt(0) || "T"}</span>
          </div>
          <div>
            <p className="font-medium text-foreground">{user?.name || "Teacher"}</p>
            <p className="text-sm text-muted-foreground">Teacher Account</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center space-x-3 px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </>
  )

  return (
    <div className="min-h-screen bg-background">
      <div>
        {/* Mobile Hamburger Button */}
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="md:hidden fixed top-20 left-4 z-50 p-2 bg-card border border-border rounded-lg shadow-lg"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}

        {/* Sidebar */}
        <div className={`fixed left-0 top-16 w-64 bg-card border-r border-border z-40 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`} style={{ height: 'calc(100vh - 4rem)' }}>
          <div className="p-6">
            {/* Mobile Hamburger Button in Sidebar Header */}
            <div className="md:hidden flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-eco-leaf rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">EcoLearners</h1>
                  <p className="text-sm text-muted-foreground">Teacher Portal</p>
                </div>
              </div>
              <button
                onClick={toggleSidebar}
                className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                aria-label="Toggle sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-eco-leaf rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">EcoLearners</h1>
                <p className="text-sm text-muted-foreground">Teacher Portal</p>
              </div>
            </div>

            {sidebarContent}
          </div>
        </div>

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-30"
            onClick={toggleSidebar}
          />
        )}

        {/* Main Content */}
        <div className={`p-8 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } md:ml-64`}>
          <Routes>
            <Route path="/" element={<TeacherHome />} />
            <Route path="/students" element={<TeacherStudents />} />
            <Route path="/lessons" element={<TeacherLessons />} />
            <Route path="/quizzes" element={<TeacherQuizzes />} />
            <Route path="/analytics" element={<TeacherAnalytics />} />
            <Route path="/settings" element={<TeacherSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default TeacherDashboard
