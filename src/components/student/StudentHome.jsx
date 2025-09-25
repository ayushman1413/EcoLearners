"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { BookOpen, Brain, Leaf, Award, TrendingUp, Clock, Target, ArrowRight } from "lucide-react"
import { useAuth } from "../../contexts/AuthContext"
import { useEco } from "../../contexts/EcoContext"

const StudentHome = () => {
  const { user } = useAuth()
  const { lessons, badges } = useEco()

  const quickStats = [
    {
      icon: BookOpen,
      label: "Lessons Completed",
      value: "3",
      total: lessons.length,
      color: "text-eco-leaf",
      bgColor: "bg-eco-leaf/10",
    },
    {
      icon: Brain,
      label: "Quizzes Taken",
      value: "2",
      total: "5",
      color: "text-eco-sky",
      bgColor: "bg-eco-sky/10",
    },
    {
      icon: Leaf,
      label: "Eco-Actions",
      value: "5",
      total: "∞",
      color: "text-eco-earth",
      bgColor: "bg-eco-earth/10",
    },
    {
      icon: Award,
      label: "Badges Earned",
      value: badges.filter((b) => b.earned).length.toString(),
      total: badges.length,
      color: "text-eco-sun",
      bgColor: "bg-eco-sun/10",
    },
  ]

  const recentActivities = [
    {
      type: "lesson",
      title: "Completed Climate Change Basics",
      time: "2 hours ago",
      points: "+25 points",
    },
    {
      type: "quiz",
      title: "Scored 100% on Renewable Energy Quiz",
      time: "1 day ago",
      points: "+50 points",
    },
    {
      type: "action",
      title: "Submitted Recycling Action",
      time: "2 days ago",
      points: "+30 points",
    },
  ]

  const upcomingTasks = [
    {
      title: "Complete Waste Management Lesson",
      dueDate: "Due in 2 days",
      priority: "high",
    },
    {
      title: "Take Solar Energy Quiz",
      dueDate: "Due in 5 days",
      priority: "medium",
    },
    {
      title: "Submit Water Conservation Action",
      dueDate: "Due in 1 week",
      priority: "low",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-muted-foreground">Ready to continue your eco-learning journey?</p>
        </div>
        <div className="mt-4 lg:mt-0">
          <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Level 3 Eco Learner</span>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="eco-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">
                  {stat.value}
                  <span className="text-sm text-muted-foreground">/{stat.total}</span>
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="eco-card p-6"
        >
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-primary" />
            Recent Activities
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{activity.title}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                    <span className="text-xs text-primary font-medium">{activity.points}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Tasks */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="eco-card p-6"
        >
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2 text-primary" />
            Upcoming Tasks
          </h2>
          <div className="space-y-4">
            {upcomingTasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{task.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{task.dueDate}</p>
                </div>
                <div
                  className={`w-3 h-3 rounded-full ${
                    task.priority === "high"
                      ? "bg-destructive"
                      : task.priority === "medium"
                        ? "bg-eco-sun"
                        : "bg-eco-leaf"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="eco-card p-6"
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/student/lessons"
            className="flex items-center justify-between p-4 bg-eco-leaf/10 rounded-lg hover:bg-eco-leaf/20 transition-colors group"
          >
            <div className="flex items-center space-x-3">
              <BookOpen className="w-6 h-6 text-eco-leaf" />
              <span className="font-medium text-foreground">Continue Learning</span>
            </div>
            <ArrowRight className="w-4 h-4 text-eco-leaf group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/student/quizzes"
            className="flex items-center justify-between p-4 bg-eco-sky/10 rounded-lg hover:bg-eco-sky/20 transition-colors group"
          >
            <div className="flex items-center space-x-3">
              <Brain className="w-6 h-6 text-eco-sky" />
              <span className="font-medium text-foreground">Take Quiz</span>
            </div>
            <ArrowRight className="w-4 h-4 text-eco-sky group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/student/eco-actions"
            className="flex items-center justify-between p-4 bg-eco-earth/10 rounded-lg hover:bg-eco-earth/20 transition-colors group"
          >
            <div className="flex items-center space-x-3">
              <Leaf className="w-6 h-6 text-eco-earth" />
              <span className="font-medium text-foreground">Submit Action</span>
            </div>
            <ArrowRight className="w-4 h-4 text-eco-earth group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default StudentHome
