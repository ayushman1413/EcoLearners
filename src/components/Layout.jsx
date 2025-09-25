"use client"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Leaf, User, LogOut } from "lucide-react"
import { useAuth } from "../contexts/AuthContext"

const Layout = ({ children }) => {
  const { user, logout, isAuthenticated } = useAuth()
  const location = useLocation()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="min-h-screen eco-bg">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center"
              >
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <span className="text-xl font-bold text-foreground">EcoLearn</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {!isAuthenticated ? (
                <>
                  <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                  <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                  <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={user?.role === "student" ? "/student" : "/teacher"}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Dashboard
                  </Link>
                  <Link to="/leaderboard" className="text-muted-foreground hover:text-foreground transition-colors">
                    Leaderboard
                  </Link>
                </>
              )}
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  {user?.role === "student" && (
                    <div className="flex items-center space-x-2 bg-eco-leaf/10 px-3 py-1 rounded-full">
                      <Leaf className="w-4 h-4 text-eco-leaf" />
                      <span className="text-sm font-medium text-eco-leaf">{user.ecoPoints} points</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-foreground">{user?.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm">Logout</span>
                  </button>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link to="/auth" className="text-muted-foreground hover:text-foreground transition-colors">
                    Login
                  </Link>
                  <Link to="/auth" className="eco-button text-sm">
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">EcoLearn - Learn. Act. Save the Planet.</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
              <span>© 2025 EcoLearn</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
