import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import { EcoProvider } from "./contexts/EcoContext"
import Layout from "./components/Layout"


import LandingPage from "./pages/LandingPage"
import AuthPage from "./pages/AuthPage"
import StudentDashboard from "./pages/StudentDashboard"
import TeacherDashboard from "./pages/TeacherDashboard"
import LeaderboardPage from "./pages/LeaderboardPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import NotFoundPage from "./pages/NotFoundPage"


import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
  return (
    <AuthProvider>
      <EcoProvider>
        <Router>
          <Layout>
            <Routes>
              {/* Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />

              {/*  Routes */}
              <Route
                path="/student/*"
                element={
                  <ProtectedRoute requiredRole="student">
                    <StudentDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/teacher/*"
                element={
                  <ProtectedRoute requiredRole="teacher">
                    <TeacherDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </Router>
      </EcoProvider>
    </AuthProvider>
  )
}

export default App
