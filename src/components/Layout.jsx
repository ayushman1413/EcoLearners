"use client"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Leaf, User, LogOut, Sun, Moon, Search, Bell, ChevronDown } from "lucide-react"
import { useAuth } from "../contexts/AuthContext"
import { useState, useEffect } from "react"

const Layout = ({ children }) => {
  const { user, logout, isAuthenticated } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [isDark, setIsDark] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
    }
  }

  const handleNotificationToggle = () => {
    setShowNotifications(!showNotifications)
  }

  const handleProfileToggle = () => {
    setShowProfileMenu(!showProfileMenu)
  }

  const handleProfileLogout = () => {
    setShowProfileMenu(false)
    logout()
  }

  const handleMenuItem = (path) => {
    setShowProfileMenu(false)
    navigate(path)
  }

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
              <span className="text-xl font-bold text-foreground">EcoLearners</span>
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
                  <Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                    Help
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
                  <Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                    Help
                  </Link>
                </>
              )}
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {isAuthenticated && user?.role === "student" && (
                <>
                  {/* Search */}
                  <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center">
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search lessons..."
                        className="w-48 pl-3 pr-10 py-2 text-sm bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <Search className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </form>

                  {/* Notifications */}
                  <div className="relative notification-dropdown">
                    <button
                      onClick={handleNotificationToggle}
                      className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors relative"
                      aria-label="Notifications"
                    >
                      <Bell className="w-4 h-4" />
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full text-xs flex items-center justify-center text-white">3</span>
                    </button>
                    {showNotifications && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg z-50"
                      >
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground mb-2">Notifications</h3>
                          <div className="space-y-2">
                            <div className="text-sm text-muted-foreground">New lesson: Climate Change Basics</div>
                            <div className="text-sm text-muted-foreground">Eco-action completed! +50 points</div>
                            <div className="text-sm text-muted-foreground">Weekly leaderboard update</div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </>
              )}

              {isAuthenticated ? (
                <>
                  {user?.role === "student" && (
                    <div className="flex items-center space-x-2 bg-eco-leaf/10 px-3 py-1 rounded-full">
                      <Leaf className="w-4 h-4 text-eco-leaf" />
                      <span className="text-sm font-medium text-eco-leaf">{user.ecoPoints} points</span>
                    </div>
                  )}

                  {/* Profile Dropdown */}
                  <div className="relative profile-dropdown">
                    <button
                      onClick={handleProfileToggle}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <User className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm text-foreground hidden md:block">{user?.name}</span>
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    </button>
                    {showProfileMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50"
                      >
                        <div className="p-2">
                          <button
                            onClick={() => handleMenuItem(user?.role === "student" ? "/student" : "/teacher")}
                            className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded"
                          >
                            Dashboard
                          </button>
                          <button
                            onClick={() => handleMenuItem("/settings")}
                            className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded"
                          >
                            Settings
                          </button>
                          <button
                            onClick={handleProfileLogout}
                            className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded text-destructive"
                          >
                            Logout
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </div>
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
              <span className="text-sm text-muted-foreground">EcoLearners - Learn. Act. Save the Planet.</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
              <span>© 2025 EcoLearners</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
