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
  const [users, setUsers] = useState([
    { email: "ayush123@gmail.com", password: "password123", role: "student" },
    { email: "ankit123@gmail.com", password: "password123", role: "teacher" }
  ])

 
  const login = (email, password, role) => {
    const foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password.toLowerCase() === password.toLowerCase() && u.role === role)
    if (foundUser) {
      const mockUser = {
        id: Date.now(),
        email: foundUser.email,
        role: foundUser.role,
        name: foundUser.email.split("@")[0],
        ecoPoints: foundUser.role === "student" ? 150 : 0,
        badges: foundUser.role === "student" ? ["Eco Beginner"] : [],
      }
      setUser(mockUser)
      setIsAuthenticated(true)
      localStorage.setItem("ecolearn_user", JSON.stringify(mockUser))
      return { success: true }
    } else {
      return { success: false, error: "Invalid email or password" }
    }
  }

  const signup = (email, password, role) => {
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase())
    if (existing) {
      return { success: false, error: "Email already exists" }
    } else {
      const newUser = { email, password, role }
      const newUsers = [...users, newUser]
      setUsers(newUsers)
      localStorage.setItem("ecolearn_users", JSON.stringify(newUsers))
      // auto login
      return login(email, password, role)
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("ecolearn_user")
  }

 
  React.useEffect(() => {
    const savedUsers = localStorage.getItem("ecolearn_users")
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers))
    } else {
      localStorage.setItem("ecolearn_users", JSON.stringify(users))
    }
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
