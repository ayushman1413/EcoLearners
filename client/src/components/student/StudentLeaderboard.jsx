"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Medal, Award, Crown, TrendingUp, Filter, Calendar } from "lucide-react"
import { useEco } from "../../contexts/EcoContext"

const StudentLeaderboard = () => {
  const { user } = useEco()
  const [selectedPeriod, setSelectedPeriod] = useState("all-time")
  const [selectedCategory, setSelectedCategory] = useState("overall")

  // Mock leaderboard data
  const leaderboardData = [
    {
      id: 1,
      name: "Emma Davis",
      avatar: "ED",
      points: 2450,
      badges: 12,
      lessonsCompleted: 18,
      rank: 1,
      change: 0,
      streak: 15,
      level: "Eco Champion",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      avatar: "SJ",
      points: 2380,
      badges: 11,
      lessonsCompleted: 16,
      rank: 2,
      change: 1,
      streak: 12,
      level: "Green Guardian",
    },
    {
      id: 3,
      name: "Mike Chen",
      avatar: "MC",
      points: 2290,
      badges: 10,
      lessonsCompleted: 15,
      rank: 3,
      change: -1,
      streak: 8,
      level: "Nature Defender",
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      avatar: "AR",
      points: 2150,
      badges: 9,
      lessonsCompleted: 14,
      rank: 4,
      change: 2,
      streak: 6,
      level: "Earth Protector",
    },
    {
      id: 5,
      name: "Lisa Wang",
      avatar: "LW",
      points: 2080,
      badges: 8,
      lessonsCompleted: 13,
      rank: 5,
      change: -1,
      streak: 10,
      level: "Eco Warrior",
    },
    {
      id: 6,
      name: "David Kim",
      avatar: "DK",
      points: 1950,
      badges: 7,
      lessonsCompleted: 12,
      rank: 6,
      change: 0,
      streak: 4,
      level: "Green Learner",
    },
    {
      id: 7,
      name: "You",
      avatar: "YU",
      points: 1850,
      badges: 6,
      lessonsCompleted: 11,
      rank: 7,
      change: 3,
      streak: 5,
      level: "Eco Explorer",
      isCurrentUser: true,
    },
  ]

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>
    }
  }

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30"
      case 2:
        return "from-gray-400/20 to-gray-500/20 border-gray-400/30"
      case 3:
        return "from-amber-600/20 to-amber-700/20 border-amber-600/30"
      default:
        return "from-muted/10 to-muted/20 border-border"
    }
  }

  const getChangeIcon = (change) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-eco-leaf" />
    if (change < 0) return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />
    return <span className="w-4 h-4 flex items-center justify-center text-muted-foreground">-</span>
  }

  const topThree = leaderboardData.slice(0, 3)
  const restOfLeaderboard = leaderboardData.slice(3)

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-foreground mb-2">Leaderboard</h1>
        <p className="text-muted-foreground">See how you rank among your fellow eco-learners</p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-leaf/20 focus:border-eco-leaf"
          >
            <option value="all-time">All Time</option>
            <option value="this-month">This Month</option>
            <option value="this-week">This Week</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-leaf/20 focus:border-eco-leaf"
          >
            <option value="overall">Overall Points</option>
            <option value="lessons">Lessons Completed</option>
            <option value="badges">Badges Earned</option>
            <option value="streak">Current Streak</option>
          </select>
        </div>
      </motion.div>

      {/* Top 3 Podium */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="flex items-end justify-center space-x-4 mb-8">
          {/* 2nd Place */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-xl">{topThree[1]?.avatar}</span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{topThree[1]?.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{topThree[1]?.points} points</p>
            <div className="w-16 h-12 bg-gray-400/20 rounded-t-lg flex items-center justify-center mx-auto">
              <span className="text-lg font-bold text-gray-400">2</span>
            </div>
          </motion.div>

          {/* 1st Place */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 relative">
              <Crown className="absolute -top-2 w-6 h-6 text-yellow-600" />
              <span className="text-white font-bold text-2xl">{topThree[0]?.avatar}</span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{topThree[0]?.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{topThree[0]?.points} points</p>
            <div className="w-20 h-16 bg-yellow-500/20 rounded-t-lg flex items-center justify-center mx-auto">
              <span className="text-xl font-bold text-yellow-500">1</span>
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-xl">{topThree[2]?.avatar}</span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{topThree[2]?.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{topThree[2]?.points} points</p>
            <div className="w-16 h-10 bg-amber-600/20 rounded-t-lg flex items-center justify-center mx-auto">
              <span className="text-lg font-bold text-amber-600">3</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Full Leaderboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="space-y-3"
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">Full Rankings</h2>

        {leaderboardData.map((student, index) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
            className={`eco-card p-4 ${
              student.isCurrentUser
                ? "bg-gradient-to-r from-eco-leaf/10 to-eco-sky/10 border-eco-leaf/30"
                : student.rank <= 3
                  ? `bg-gradient-to-r ${getRankColor(student.rank)}`
                  : ""
            }`}
          >
            <div className="flex items-center space-x-4">
              {/* Rank */}
              <div className="flex items-center justify-center w-12">{getRankIcon(student.rank)}</div>

              {/* Avatar */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  student.rank === 1
                    ? "bg-yellow-500"
                    : student.rank === 2
                      ? "bg-gray-400"
                      : student.rank === 3
                        ? "bg-amber-600"
                        : student.isCurrentUser
                          ? "bg-eco-leaf"
                          : "bg-eco-sky"
                }`}
              >
                <span className="text-white font-semibold">{student.avatar}</span>
              </div>

              {/* Student Info */}
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className={`font-semibold ${student.isCurrentUser ? "text-eco-leaf" : "text-foreground"}`}>
                    {student.name}
                    {student.isCurrentUser && (
                      <span className="ml-2 text-xs bg-eco-leaf text-white px-2 py-1 rounded-full">You</span>
                    )}
                  </h3>
                  <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">{student.level}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                  <span>{student.points} points</span>
                  <span>{student.badges} badges</span>
                  <span>{student.lessonsCompleted} lessons</span>
                  <span>{student.streak} day streak</span>
                </div>
              </div>

              {/* Change Indicator */}
              <div className="flex items-center space-x-2">
                {getChangeIcon(student.change)}
                {student.change !== 0 && (
                  <span className={`text-sm font-medium ${student.change > 0 ? "text-eco-leaf" : "text-red-500"}`}>
                    {Math.abs(student.change)}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Your Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="eco-card p-6 bg-gradient-to-r from-eco-leaf/10 to-eco-sky/10 border-eco-leaf/30"
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Your Performance</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-eco-leaf">7th</p>
            <p className="text-sm text-muted-foreground">Current Rank</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-eco-sky">1,850</p>
            <p className="text-sm text-muted-foreground">Total Points</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-eco-sun">+3</p>
            <p className="text-sm text-muted-foreground">Rank Change</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-eco-earth">5</p>
            <p className="text-sm text-muted-foreground">Day Streak</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default StudentLeaderboard
