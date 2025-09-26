"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { BookOpen, Brain, Leaf, Award, TrendingUp, Clock, Target, ArrowRight, Star, Mail, Play, Users, Quote, Trophy, Zap, Gift, Coins, Flame, Crown, Gamepad2, Calculator, Sprout, BarChart3, Bot, MapPin, Camera, Heart } from "lucide-react"
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

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Top Student",
      content: "EcoLearners made learning about the environment so much fun! I've learned more in a month than I did in a year of school.",
      rating: 5,
      avatar: "AC",
    },
    {
      name: "Maria Garcia",
      role: "Eco Champion",
      content: "The gamification keeps me motivated. Every badge I earn feels like a real achievement!",
      rating: 5,
      avatar: "MG",
    },
  ]

  const featuredContent = [
    {
      title: "Ocean Conservation",
      description: "Learn about marine life and how to protect our oceans.",
      type: "Lesson",
      duration: "20 min",
      image: "🌊",
    },
    {
      title: "Carbon Footprint Quiz",
      description: "Calculate and understand your environmental impact.",
      type: "Quiz",
      duration: "15 min",
      image: "🌱",
    },
  ]

  const partners = [
    { name: "Greenpeace", logo: "🌿" },
    { name: "WWF", logo: "🐼" },
    { name: "UNEP", logo: "🌍" },
  ]

  const achievements = [
    { name: "First Steps", description: "Complete your first lesson", earned: true, icon: "🎓" },
    { name: "Quiz Master", description: "Score 100% on 5 quizzes", earned: true, icon: "🧠" },
    { name: "Eco Warrior", description: "Submit 10 eco-actions", earned: false, icon: "🌱" },
    { name: "Streak Champion", description: "Maintain a 30-day streak", earned: false, icon: "🔥" },
  ]

  const dailyRewards = [
    { day: 1, reward: "50 XP", claimed: true },
    { day: 2, reward: "Eco Badge", claimed: true },
    { day: 3, reward: "100 XP", claimed: true },
    { day: 4, reward: "Bonus Quiz", claimed: false },
    { day: 5, reward: "200 XP", claimed: false },
    { day: 6, reward: "Special Badge", claimed: false },
    { day: 7, reward: "Mega Reward", claimed: false },
  ]

  const miniGames = [
    {
      name: "Eco Memory",
      description: "Match eco-friendly pairs",
      icon: "🧠",
      difficulty: "Easy",
      reward: "25 XP",
      players: "1,247 playing",
    },
    {
      name: "Carbon Quiz Rush",
      description: "Answer fast for bonus points",
      icon: "⚡",
      difficulty: "Medium",
      reward: "50 XP",
      players: "892 playing",
    },
    {
      name: "Virtual Garden",
      description: "Grow your eco garden",
      icon: "🌱",
      difficulty: "Easy",
      reward: "30 XP",
      players: "654 playing",
    },
  ]

  const techFeatures = [
    {
      name: "AI Learning Assistant",
      description: "Get personalized help anytime",
      icon: <Bot className="w-6 h-6" />,
      status: "Active",
      color: "text-blue-500",
    },
    {
      name: "AR Eco Explorer",
      description: "Explore real-world eco spots",
      icon: <Camera className="w-6 h-6" />,
      status: "Coming Soon",
      color: "text-purple-500",
    },
    {
      name: "Progress Analytics",
      description: "Visual learning insights",
      icon: <BarChart3 className="w-6 h-6" />,
      status: "Active",
      color: "text-green-500",
    },
    {
      name: "Carbon Calculator",
      description: "Track your environmental impact",
      icon: <Calculator className="w-6 h-6" />,
      status: "Active",
      color: "text-orange-500",
    },
  ]

  const socialFeed = [
    {
      user: "Alex Chen",
      avatar: "AC",
      action: "completed Ocean Conservation lesson",
      time: "2m ago",
      likes: 12,
      type: "achievement",
    },
    {
      user: "Maria G.",
      avatar: "MG",
      action: "planted 5 virtual trees in garden",
      time: "5m ago",
      likes: 8,
      type: "game",
    },
    {
      user: "John D.",
      avatar: "JD",
      action: "reduced carbon footprint by 15%",
      time: "10m ago",
      likes: 15,
      type: "action",
    },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-sm md:text-base text-muted-foreground">Ready to continue your eco-learning journey?</p>
        </div>
        <div className="flex-shrink-0">
          <div className="flex items-center space-x-2 bg-primary/10 px-3 md:px-4 py-2 rounded-full">
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span className="text-sm md:text-base text-primary font-medium">Level 3 Eco Learner</span>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="eco-card p-4 md:p-6"
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
          className="eco-card p-4 md:p-6"
        >
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center">
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
        className="eco-card p-4 md:p-6"
      >
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
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

      {/* Daily Goals & Streak */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="eco-card p-4 md:p-6"
        >
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2 text-primary" />
            Daily Goals
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Complete 1 lesson</span>
              <div className="w-24 bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <span className="text-sm font-medium text-primary">1/1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Take 1 quiz</span>
              <div className="w-24 bg-muted rounded-full h-2">
                <div className="bg-eco-sun h-2 rounded-full" style={{ width: '50%' }}></div>
              </div>
              <span className="text-sm font-medium text-eco-sun">0/1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Submit 1 action</span>
              <div className="w-24 bg-muted rounded-full h-2">
                <div className="bg-eco-leaf h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <span className="text-sm font-medium text-eco-leaf">0/1</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="eco-card p-4 md:p-6"
        >
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-primary" />
            Learning Streak
          </h2>
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-primary mb-2">7</div>
            <p className="text-sm md:text-base text-muted-foreground mb-4">Day Streak!</p>
            <div className="flex justify-center flex-wrap gap-2 md:gap-3">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center"
                >
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-xs md:text-sm text-muted-foreground mt-4">Keep it up! 🔥</p>
          </div>
        </motion.div>
      </div>

      {/* Featured Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="eco-card p-4 md:p-6"
      >
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">Featured Content</h2>
        <div className="grid gap-4 md:gap-6">
          {featuredContent.map((content, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-muted/50 rounded-lg"
            >
              <div className="text-2xl md:text-3xl flex-shrink-0">{content.image}</div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {content.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{content.duration}</span>
                </div>
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">{content.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{content.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Community Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="eco-card p-4 md:p-6"
      >
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2 text-primary" />
          Community Highlights
        </h2>
        <div className="grid gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-3 md:p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold text-xs md:text-sm">{testimonial.avatar}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm md:text-base font-semibold text-foreground truncate">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Partners & Newsletter */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="eco-card p-4 md:p-6"
        >
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">Our Partners</h2>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center space-y-1 md:space-y-2 p-2 md:p-3 rounded-lg hover:bg-muted/50 transition-colors min-w-0 flex-1 max-w-[120px]"
              >
                <div className="text-xl md:text-2xl">{partner.logo}</div>
                <span className="text-xs font-medium text-muted-foreground text-center">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="eco-card p-4 md:p-6"
        >
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4 flex items-center">
            <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary" />
            Stay Updated
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
            Get tips, new content, and community updates.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert("Subscribed! Check your email for updates.")
            }}
            className="space-y-3"
          >
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              required
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full eco-button py-2 text-sm font-medium"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* XP & Level Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="eco-card p-4 md:p-6"
      >
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center">
          <Coins className="w-5 h-5 mr-2 text-primary" />
          XP & Level Progress
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Crown className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-xs md:text-sm text-muted-foreground">Current Level</p>
              <p className="text-xl md:text-2xl font-bold text-primary">7</p>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-xs md:text-sm text-muted-foreground">Total XP</p>
            <p className="text-lg md:text-xl font-bold text-foreground">2,450</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs md:text-sm">
            <span>Level 7 Progress</span>
            <span>450/1000 XP</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 md:h-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '45%' }}
              transition={{ duration: 1, delay: 1.5 }}
              className="bg-gradient-to-r from-primary to-eco-sun h-2 md:h-3 rounded-full"
            ></motion.div>
          </div>
          <p className="text-xs text-muted-foreground">550 XP to next level!</p>
        </div>
      </motion.div>

      {/* Achievements Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="eco-card p-4 md:p-6"
      >
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2 text-primary" />
          Recent Achievements
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`p-3 rounded-lg text-center ${
                achievement.earned ? 'bg-primary/10 border border-primary/20' : 'bg-muted/50'
              }`}
            >
              <div className="text-2xl mb-2">{achievement.icon}</div>
              <h3 className={`text-sm font-semibold mb-1 ${
                achievement.earned ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {achievement.name}
              </h3>
              <p className="text-xs text-muted-foreground">{achievement.description}</p>
              {achievement.earned && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  className="mt-2 text-yellow-500"
                >
                  ✓
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link to="/student/badges" className="text-primary hover:text-primary/80 text-sm">
            View All Achievements →
          </Link>
        </div>
      </motion.div>

      {/* Daily Rewards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="eco-card p-4 md:p-6"
      >
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center">
          <Gift className="w-5 h-5 mr-2 text-primary" />
          Daily Rewards
        </h2>
        {/* Mobile: Horizontal scroll, Desktop: Grid */}
        <div className="overflow-x-auto scrollbar-hide pb-2 md:pb-0">
          <div className="flex md:grid md:grid-cols-7 gap-2 md:gap-2 min-w-max md:min-w-0">
            {dailyRewards.map((reward, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className={`p-2 md:p-3 rounded-lg text-center cursor-pointer flex-shrink-0 w-12 md:w-auto ${
                  reward.claimed
                    ? 'bg-primary/20 border border-primary/30'
                    : 'bg-muted/50 hover:bg-muted'
                }`}
                onClick={() => !reward.claimed && alert(`Claim your ${reward.reward}!`)}
              >
                <div className="text-xs font-medium mb-1">Day {reward.day}</div>
                <div className={`text-base md:text-lg mb-1 ${reward.claimed ? 'text-primary' : 'text-muted-foreground'}`}>
                  {reward.claimed ? '✓' : '🎁'}
                </div>
                <div className="text-xs text-muted-foreground">{reward.reward}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4 text-center">
          Come back tomorrow for more rewards! Next: Bonus Quiz
        </p>
      </motion.div>

      {/* Mini Leaderboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="eco-card p-4 md:p-6"
      >
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center">
          <Trophy className="w-5 h-5 mr-2 text-primary" />
          Top Learners This Week
        </h2>
        <div className="space-y-2 md:space-y-3">
          {[
            { rank: 1, name: "You", points: 2450, avatar: "Y", isCurrent: true },
            { rank: 2, name: "Alex Chen", points: 2200, avatar: "AC", isCurrent: false },
            { rank: 3, name: "Maria G.", points: 2100, avatar: "MG", isCurrent: false },
            { rank: 4, name: "John D.", points: 1950, avatar: "JD", isCurrent: false },
          ].map((user, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 + index * 0.1 }}
              className={`flex items-center justify-between p-2 md:p-3 rounded-lg ${
                user.isCurrent ? 'bg-primary/10 border border-primary/20' : 'bg-muted/50'
              }`}
            >
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  user.rank === 1 ? 'bg-yellow-500 text-white' :
                  user.rank === 2 ? 'bg-gray-400 text-white' :
                  user.rank === 3 ? 'bg-amber-600 text-white' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {user.rank}
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold text-xs md:text-sm">{user.avatar}</span>
                </div>
                <span className={`font-medium text-sm md:text-base ${user.isCurrent ? 'text-primary' : 'text-foreground'} truncate`}>
                  {user.name}
                </span>
              </div>
              <div className="flex items-center space-x-1 md:space-x-2">
                <Coins className="w-3 h-3 md:w-4 md:h-4 text-yellow-500" />
                <span className="font-semibold text-foreground text-sm md:text-base">{user.points}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link to="/leaderboard" className="text-primary hover:text-primary/80 text-sm">
            View Full Leaderboard →
          </Link>
        </div>
      </motion.div>

      {/* Spin Wheel Game */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.7 }}
        className="eco-card p-4 md:p-6 text-center"
      >
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">Spin & Win!</h2>
        <p className="text-muted-foreground mb-4">
          Spin the wheel for a chance to win bonus XP, badges, or special rewards!
        </p>
        <div className="flex justify-center mb-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-32 h-32 bg-gradient-to-r from-primary via-eco-sun to-eco-leaf rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => alert("Spinning... You won 50 XP! 🎉")}
          >
            <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center">
              <span className="text-2xl">🎡</span>
            </div>
          </motion.div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert("Spinning... You won 50 XP! 🎉")}
          className="eco-button px-6 py-2 flex items-center space-x-2 mx-auto"
        >
          <span>Spin Now</span>
          <Flame className="w-4 h-4" />
        </motion.button>
        <p className="text-xs text-muted-foreground mt-2">Free spin available!</p>
      </motion.div>

      {/* Mini Games Hub */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="eco-card p-4 md:p-6"
      >
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center">
          <Gamepad2 className="w-5 h-5 mr-2 text-primary" />
          Mini Games Hub
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {miniGames.map((game, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-4 bg-gradient-to-br from-primary/5 to-eco-leaf/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-all cursor-pointer"
              onClick={() => alert(`Starting ${game.name}! 🎮`)}
            >
              <div className="text-3xl mb-3">{game.icon}</div>
              <h3 className="font-semibold text-foreground mb-1">{game.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{game.description}</p>
              <div className="flex items-center justify-between text-xs">
                <span className={`px-2 py-1 rounded ${
                  game.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                  game.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {game.difficulty}
                </span>
                <span className="text-primary font-medium">{game.reward}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">{game.players}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link to="/student/games" className="text-primary hover:text-primary/80 text-sm">
            View All Games →
          </Link>
        </div>
      </motion.div>

      {/* Tech Solutions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.9 }}
        className="eco-card p-4 md:p-6"
      >
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center">
          <Bot className="w-5 h-5 mr-2 text-primary" />
          Smart Learning Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-muted/50 rounded-lg text-center hover:bg-muted transition-colors cursor-pointer"
              onClick={() => alert(`${feature.name} activated! 🤖`)}
            >
              <div className={`w-12 h-12 ${feature.color.replace('text-', 'bg-').replace('-500', '-100')} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <div className={feature.color}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{feature.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">{feature.description}</p>
              <span className={`text-xs px-2 py-1 rounded ${
                feature.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
              }`}>
                {feature.status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Social Feed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.0 }}
        className="eco-card p-4 md:p-6"
      >
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center">
          <Heart className="w-5 h-5 mr-2 text-primary" />
          Community Feed
        </h2>
        <div className="space-y-3 md:space-y-4">
          {socialFeed.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.1 + index * 0.1 }}
              className="flex items-start space-x-2 md:space-x-3 p-2 md:p-3 bg-muted/50 rounded-lg"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-semibold text-xs md:text-sm">{post.avatar}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs md:text-sm">
                  <span className="font-semibold text-foreground">{post.user}</span>
                  {' '}{post.action}
                </p>
                <div className="flex items-center justify-between mt-1 md:mt-2">
                  <span className="text-xs text-muted-foreground">{post.time}</span>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-3 h-3 text-red-500" />
                    <span className="text-xs text-muted-foreground">{post.likes}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link to="/student/community" className="text-primary hover:text-primary/80 text-sm">
            View Full Feed →
          </Link>
        </div>
      </motion.div>

      {/* Interactive Learning Path */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.1 }}
        className="eco-card p-4 md:p-6"
      >
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-primary" />
          Your Learning Journey
        </h2>
        <div className="relative">
          {/* Mobile: Horizontal scroll, Desktop: Flex */}
          <div className="flex md:justify-between overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 mb-3 md:mb-4 scrollbar-hide">
            <div className="flex space-x-3 md:space-x-0 md:justify-between w-max md:w-full">
              {[
                { step: 1, title: "Basics", completed: true, icon: "🌍" },
                { step: 2, title: "Climate", completed: true, icon: "🌡️" },
                { step: 3, title: "Actions", completed: false, icon: "♻️" },
                { step: 4, title: "Advanced", completed: false, icon: "🚀" },
                { step: 5, title: "Expert", completed: false, icon: "👑" },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center flex-shrink-0 md:flex-shrink"
                >
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-base md:text-xl mb-1 md:mb-2 ${
                    step.completed
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.icon}
                  </div>
                  <span className={`text-xs font-medium text-center ${
                    step.completed ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2 md:h-3 mb-3 md:mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '40%' }}
              transition={{ duration: 2, delay: 2.3 }}
              className="bg-gradient-to-r from-primary to-eco-sun h-2 md:h-3 rounded-full"
            ></motion.div>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            40% Complete • Next: Eco Actions Module
          </p>
        </div>
      </motion.div>

      {/* Quiz Teaser */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="eco-card p-4 md:p-6 text-center"
      >
        <Play className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">Test Your Knowledge</h2>
        <p className="text-muted-foreground mb-4">
          Challenge yourself with our interactive quizzes and earn bonus points!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert("Quiz feature coming soon! Stay tuned.")}
          className="eco-button px-6 py-2 flex items-center space-x-2 mx-auto"
        >
          <span>Start Quiz</span>
          <Play className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </div>
  )
}

export default StudentHome
