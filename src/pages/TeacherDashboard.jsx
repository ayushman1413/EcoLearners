"use client"
import { useState } from "react"
import { Home, Users, BookOpen, FileText, BarChart3, Settings, LogOut } from "lucide-react"
import { useAuth } from "../contexts/AuthContext"
import TeacherHome from "../components/teacher/TeacherHome"
import TeacherStudents from "../components/teacher/TeacherStudents"
import TeacherLessons from "../components/teacher/TeacherLessons"
import TeacherQuizzes from "../components/teacher/TeacherQuizzes"
import TeacherAnalytics from "../components/teacher/TeacherAnalytics"
import TeacherSettings from "../components/teacher/TeacherSettings"

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("home")
  const { user, logout } = useAuth()

  const menuItems = [
    { id: "home", label: "Dashboard", icon: Home },
    { id: "students", label: "Students", icon: Users },
    { id: "lessons", label: "Lessons", icon: BookOpen },
    { id: "quizzes", label: "Quizzes", icon: FileText },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <TeacherHome />
      case "students":
        return <TeacherStudents />
      case "lessons":
        return <TeacherLessons />
      case "quizzes":
        return <TeacherQuizzes />
      case "analytics":
        return <TeacherAnalytics />
      case "settings":
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
          <h1 className="text-xl font-bold text-foreground">EcoLearn</h1>
          <p className="text-sm text-muted-foreground">Teacher Portal</p>
        </div>
      </div>
      <div className="space-y-2 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-eco-leaf text-white"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
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
      {/* Sidebar */}
      <div className="fixed left-0 top-16 w-80 bg-card border-r border-border z-40" style={{ height: 'calc(100vh - 4rem)' }}>
        <div className="p-6">
          {sidebarContent}
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-80 p-8">
        {renderContent()}
      </div>






    </div>
  )
}

export default TeacherDashboard
