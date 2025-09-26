"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Leaf, BookOpen, Brain, Users, Trophy, Award, ArrowRight, CheckCircle, Globe, Sun } from "lucide-react"

const LandingPage = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Lessons",
      description: "Engaging environmental education content designed for all learning levels.",
    },
    {
      icon: Brain,
      title: "Knowledge Quizzes",
      description: "Test your understanding with fun, interactive quizzes and instant feedback.",
    },
    {
      icon: Users,
      title: "Eco-Actions",
      description: "Take real-world actions and share your environmental impact with the community.",
    },
    {
      icon: Trophy,
      title: "Leaderboard",
      description: "Compete with friends and see who's making the biggest environmental impact.",
    },
    {
      icon: Award,
      title: "Achievement Badges",
      description: "Earn badges and recognition for your environmental learning milestones.",
    },
  ]

  const problems = [
    "Climate change threatens our planet's future",
    "Many people lack environmental awareness",
    "Traditional education methods are often boring",
    "Individual actions feel insignificant",
  ]

  const solutions = [
    "Gamified learning makes education engaging",
    "Interactive content builds real understanding",
    "Community features inspire collective action",
    "Progress tracking shows meaningful impact",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-eco-sky/20 via-eco-leaf/10 to-eco-sun/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
              >
                Learn. Act. <span className="text-primary">Save the Planet</span>
              </motion.h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Join EcoLearners' gamified platform for environmental education. Make learning fun while building a
                sustainable future together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Link to="/auth" className="group eco-button text-lg px-8 py-4 flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors text-lg px-8 py-4"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Visual Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="flex justify-center items-center space-x-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 360 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6,
                    rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
                  }}
                  className="w-16 h-16 bg-eco-leaf/20 rounded-full flex items-center justify-center"
                >
                  <Leaf className="w-8 h-8 text-eco-leaf" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [-10, 10, -10] }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8,
                    y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
                  }}
                  className="w-16 h-16 bg-eco-sky/20 rounded-full flex items-center justify-center"
                >
                  <Globe className="w-8 h-8 text-eco-sky" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, rotate: -360 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.0,
                    rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
                  }}
                  className="w-16 h-16 bg-eco-sun/20 rounded-full flex items-center justify-center"
                >
                  <Sun className="w-8 h-8 text-eco-sun" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Problem Statement */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">The Challenge We Face</h2>
              <motion.ul
                className="space-y-4"
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                    className="flex items-start space-x-3"
                  >
                    <motion.div
                      whileInView={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"
                    ></motion.div>
                    <p className="text-muted-foreground text-lg">{problem}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Solution</h2>
              <motion.ul
                className="space-y-4"
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      initial: { opacity: 0, x: 20 },
                      animate: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                    className="flex items-start space-x-3"
                  >
                    <motion.div
                      whileInView={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    </motion.div>
                    <p className="text-muted-foreground text-lg">{solution}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Learn and Act
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our comprehensive platform combines education, gamification, and community to create an engaging
              environmental learning experience.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="eco-card p-6 group hover:scale-105 transition-transform"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.2 }}
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Join thousands of learners who are already making an impact. Start your environmental education journey
              today.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/auth" className="eco-button text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <span>Start Learning Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/leaderboard"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 rounded-lg font-medium transition-colors text-lg"
              >
                View Leaderboard
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
