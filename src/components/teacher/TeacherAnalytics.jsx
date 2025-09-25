"use client"
import { motion } from "framer-motion"
import { TrendingUp, Users, BookOpen, Award, Download } from "lucide-react"

const TeacherAnalytics = () => {
  const overallStats = [
    {
      title: "Total Students",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "eco-leaf",
    },
    {
      title: "Lessons Completed",
      value: "156",
      change: "+8%",
      trend: "up",
      icon: BookOpen,
      color: "eco-sky",
    },
    {
      title: "Average Score",
      value: "87%",
      change: "+5%",
      trend: "up",
      icon: Award,
      color: "eco-sun",
    },
    {
      title: "Engagement Rate",
      value: "92%",
      change: "+3%",
      trend: "up",
      icon: TrendingUp,
      color: "eco-earth",
    },
  ]

  const performanceData = [
    { subject: "Climate Change", score: 89, students: 18 },
    { subject: "Renewable Energy", score: 82, students: 22 },
    { subject: "Water Conservation", score: 94, students: 15 },
    { subject: "Biodiversity", score: 76, students: 12 },
    { subject: "Waste Management", score: 88, students: 20 },
  ]

  const weeklyActivity = [
    { day: "Mon", lessons: 12, quizzes: 8 },
    { day: "Tue", lessons: 15, quizzes: 10 },
    { day: "Wed", lessons: 18, quizzes: 12 },
    { day: "Thu", lessons: 14, quizzes: 9 },
    { day: "Fri", lessons: 20, quizzes: 15 },
    { day: "Sat", lessons: 8, quizzes: 5 },
    { day: "Sun", lessons: 6, quizzes: 3 },
  ]

  const topPerformers = [
    { name: "Sneha Verma", score: 96, lessons: 15, badges: 8 },
    { name: "Priya Sharma", score: 94, lessons: 14, badges: 7 },
    { name: "Rahul Kumar", score: 89, lessons: 12, badges: 6 },
    { name: "Arjun Patel", score: 85, lessons: 10, badges: 5 },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics</h1>
          <p className="text-muted-foreground">Track student progress and class performance metrics</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-eco-leaf text-white rounded-lg hover:bg-eco-leaf/90 transition-colors">
          <Download className="w-4 h-4" />
          <span>Export Report</span>
        </button>
      </motion.div>

      {/* Overall Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {overallStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="eco-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-${stat.color}/10 rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 text-${stat.color}`} />
                </div>
                <div
                  className={`flex items-center space-x-1 text-sm ${
                    stat.trend === "up" ? "text-eco-leaf" : "text-red-500"
                  }`}
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>{stat.change}</span>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Subject Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-foreground">Subject Performance</h2>
          <div className="eco-card p-6">
            <div className="space-y-4">
              {performanceData.map((subject, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{subject.subject}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">{subject.students} students</span>
                      <span className="text-sm font-semibold text-foreground">{subject.score}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${subject.score}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-2 rounded-full ${
                        subject.score >= 90
                          ? "bg-eco-leaf"
                          : subject.score >= 80
                            ? "bg-eco-sky"
                            : subject.score >= 70
                              ? "bg-eco-sun"
                              : "bg-red-500"
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Weekly Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-foreground">Weekly Activity</h2>
          <div className="eco-card p-6">
            <div className="space-y-4">
              {weeklyActivity.map((day, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm font-medium text-foreground w-12">{day.day}</span>
                  <div className="flex-1 mx-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-muted/30 rounded-full h-2">
                        <div
                          className="bg-eco-leaf h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(day.lessons / 20) * 100}%` }}
                        />
                      </div>
                      <div className="flex-1 bg-muted/30 rounded-full h-2">
                        <div
                          className="bg-eco-sky h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(day.quizzes / 15) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-eco-leaf rounded-full" />
                      <span>{day.lessons}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-eco-sky rounded-full" />
                      <span>{day.quizzes}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-eco-leaf rounded-full" />
                  <span>Lessons Completed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-eco-sky rounded-full" />
                  <span>Quizzes Taken</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Top Performers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-foreground">Top Performers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topPerformers.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="eco-card p-6 text-center"
            >
              <div className="w-16 h-16 bg-eco-leaf rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">
                  {student.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{student.name}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Score:</span>
                  <span className="font-semibold text-eco-leaf">{student.score}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lessons:</span>
                  <span className="font-semibold text-foreground">{student.lessons}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Badges:</span>
                  <span className="font-semibold text-eco-sun">{student.badges}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default TeacherAnalytics
