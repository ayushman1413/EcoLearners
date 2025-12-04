"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Eye, EyeOff, User, GraduationCap, Leaf, Mail, Lock } from "lucide-react"
import { useAuth } from "../contexts/AuthContext"

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [selectedRole, setSelectedRole] = useState("student")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const { login, signup } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
   

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)

    let result
    if (isLogin) {
      result = login(formData.email, formData.password, selectedRole)
    } else {
      result = signup(formData.email, formData.password, selectedRole)
    }

    if (result.success) {
     
      
      navigate(selectedRole === "student" ? "/student" : "/teacher")
    } else {
      setErrors({ general: result.error || "Authentication failed. Please try again." })
    }

    setIsLoading(false)
  }

  const toggleAuthMode = () => {
    setIsLogin(!isLogin)
    setFormData({ email: "", password: "", confirmPassword: "" })
    setErrors({})
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
            >
              <Leaf className="w-8 h-8 text-primary" />
            </motion.div>
          </div>
          <h2 className="text-3xl font-bold text-foreground">{isLogin ? "Welcome Back!" : "Join EcoLearners"}</h2>
          <p className="mt-2 text-muted-foreground">
            {isLogin ? "Sign in to continue your eco-learning journey" : "Start your environmental education adventure"}
          </p>
        </motion.div>

        {/* Role Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="eco-card p-6"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">I am a...</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setSelectedRole("student")}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedRole === "student"
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-primary/50 text-muted-foreground"
              }`}
            >
              <GraduationCap className="w-8 h-8 mx-auto mb-2" />
              <span className="block font-medium">Student</span>
              <span className="block text-xs mt-1">Learn & Explore</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedRole("teacher")}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedRole === "teacher"
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-primary/50 text-muted-foreground"
              }`}
            >
              <User className="w-8 h-8 mx-auto mb-2" />
              <span className="block font-medium">Teacher</span>
              <span className="block text-xs mt-1">Teach & Guide</span>
            </button>
          </div>
        </motion.div>

        {/* Auth Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="eco-card p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {errors.general && (
              <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg text-sm">
                {errors.general}
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.email
                      ? "border-destructive focus:ring-destructive/50"
                      : "border-border focus:ring-primary/50"
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-12 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.password
                      ? "border-destructive focus:ring-destructive/50"
                      : "border-border focus:ring-primary/50"
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-destructive">{errors.password}</p>}
            </div>

            {/* Confirm Password Field (Signup only) */}
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                      errors.confirmPassword
                        ? "border-destructive focus:ring-destructive/50"
                        : "border-border focus:ring-primary/50"
                    }`}
                    placeholder="Confirm your password"
                  />
                </div>
                {errors.confirmPassword && <p className="mt-1 text-sm text-destructive">{errors.confirmPassword}</p>}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full eco-button flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                />
              ) : (
                <>
                  <span>{isLogin ? "Sign In" : "Create Account"}</span>
                  <Leaf className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Toggle Auth Mode */}
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={toggleAuthMode}
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </motion.div>


        {/* Demo Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="eco-card p-4 bg-muted/50"
        >
          <h4 className="text-sm font-medium text-foreground mb-2">Demo ke liye isko use kre :</h4>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>Student: ayush123@gmail.com / password123</p>
            <p>Teacher: ankit123@gmail.com / password123</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AuthPage
