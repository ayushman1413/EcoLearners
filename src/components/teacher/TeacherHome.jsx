"use client"
import { motion } from "framer-motion"
import { Users, BookOpen, FileText, TrendingUp, Award, Clock, CheckCircle, AlertCircle } from "lucide-react"

const TeacherHome = () => {
  const stats = [
    {
      title: "Total Students",
      value: "24",
      change: "+3 this week",
      icon: Users,
      color: "eco-leaf",
    },
    {
      title: "Active Lessons",
      value: "12",
      change: "2 pending review",
      icon: BookOpen,
      color: "eco-sky",
    },
    {
      title: "Quizzes Created",
      value: "8",
      change: "1 new this week",
      icon: FileText,
      color: "eco-sun",
    },
    {
      title: "Avg. Performance",
      value: "87%",
      change: "+5% from last month",
      icon: TrendingUp,
      color: "eco-earth",
    },
  ]

  const recentActivity = [
    {
      type: "quiz_completed",
      student: "Sarah Johnson",
      action: "completed Climate Change Quiz",
      score: "95%",
      time: "2 hours ago",
      status: "excellent",
    },
    {
      type: "lesson_started",
      student: "Mike Chen",
      action: "started Renewable Energy lesson",
      time: "4 hours ago",
      status: "in_progress",
    },
    {
      type: "quiz_completed",
      student: "Emma Davis",
      action: "completed Water Conservation Quiz",
      score: "78%",
      time: "6 hours ago",
      status: "good",
    },
    {
      type: "help_needed",
      student: "Alex Rodriguez",
      action: "requested help with Biodiversity lesson",
      time: "1 day ago",
      status: "needs_attention",
    },
  ]

  const upcomingTasks = [
    {
      task: "Review pending quiz submissions",
      count: 5,
      priority: "high",
      dueDate: "Today",
    },
    {
      task: "Create new lesson on Ocean Conservation",
      priority: "medium",
      dueDate: "This week",
    },
    {
      task: "Update student progress reports",
      count: 12,
      priority: "low",
      dueDate: "Next week",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-foreground mb-2">Teacher Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your students today.</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => {
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
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-foreground">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="eco-card p-4"
              >
                <div className="flex items-start space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activity.status === "excellent"
                        ? "bg-eco-leaf/20"
                        : activity.status === "good"
                          ? "bg-eco-sky/20"
                          : activity.status === "needs_attention"
                            ? "bg-eco-sun/20"
                            : "bg-muted/20"
                    }`}
                  >
                    {activity.status === "excellent" ? (
                      <Award className="w-4 h-4 text-eco-leaf" />
                    ) : activity.status === "needs_attention" ? (
                      <AlertCircle className="w-4 h-4 text-eco-sun" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-eco-sky" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{activity.student}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.action}
                      {activity.score && <span className="ml-2 font-medium text-foreground">{activity.score}</span>}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Tasks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-foreground">Upcoming Tasks</h2>
          <div className="space-y-3">
            {upcomingTasks.map((task, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="eco-card p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        task.priority === "high"
                          ? "bg-red-500"
                          : task.priority === "medium"
                            ? "bg-eco-sun"
                            : "bg-eco-sky"
                      }`}
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {task.task}
                        {task.count && (
                          <span className="ml-2 text-xs bg-muted px-2 py-1 rounded-full">{task.count}</span>
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">Due: {task.dueDate}</p>
                    </div>
                  </div>
                  <Clock className="w-4 h-4 text-muted-foreground" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TeacherHome
