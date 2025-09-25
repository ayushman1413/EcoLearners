"use client"

import React, { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Mock authentication functions
  const login = (email, password, role) => {
    // Simple mock authentication
    const mockUser = {
      id: Date.now(),
      email,
      role, // 'student' or 'teacher'
      name: email.split("@")[0],
      ecoPoints: role === "student" ? 150 : 0,
      badges: role === "student" ? ["Eco Beginner"] : [],
    }

    setUser(mockUser)
    setIsAuthenticated(true)
    localStorage.setItem("ecolearn_user", JSON.stringify(mockUser))
    return { success: true }
  }

  const signup = (email, password, role) => {
    // Simple mock signup
    return login(email, password, role)
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("ecolearn_user")
  }

  // Check for existing session on app load
  React.useEffect(() => {
    const savedUser = localStorage.getItem("ecolearn_user")
    if (savedUser) {
      const userData = JSON.parse(savedUser)
      setUser(userData)
      setIsAuthenticated(true)
    }
  }, [])

  const value = {
    user,
    isAuthenticated,
    login,
    signup,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
