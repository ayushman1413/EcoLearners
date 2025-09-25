"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Home, Leaf } from "lucide-react"

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Eco-friendly  */}
          <div className="mb-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Leaf className="w-16 h-16 text-primary" />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Oops! This page got lost in the forest
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Don't worry, even the best explorers sometimes take a wrong turn. Let's get you back on the path to
            environmental learning!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="eco-button flex items-center justify-center space-x-2">
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/auth"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <Leaf className="w-4 h-4" />
              <span>Start Learning</span>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-sm text-muted-foreground"
          >
            <p>Lost? Try these popular destinations:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link to="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link to="/leaderboard" className="hover:text-foreground transition-colors">
                Leaderboard
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFoundPage
