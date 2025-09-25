"use client"
import { motion } from "framer-motion"
import { Trophy, Medal, Award, Crown, TrendingUp, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

const LeaderboardPage = () => {
  // Mock global leaderboard data
  const globalLeaderboard = [
    {
      id: 1,
      name: "Priya Sharma",
      school: "Green Valley High",
      avatar: "PS",
      points: 2450,
      badges: 12,
      rank: 1,
      country: "India",
    },
    {
      id: 2,
      name: "Sneha Verma",
      school: "Delhi Eco Academy",
      avatar: "SV",
      points: 2380,
      badges: 11,
      rank: 2,
      country: "India",
    },
    {
      id: 3,
      name: "Rohan Kumar",
      school: "Mumbai Green School",
      avatar: "RK",
      points: 2290,
      badges: 10,
      rank: 3,
      country: "India",
    },
    {
      id: 4,
      name: "Maria Santos",
      school: "São Paulo Environmental",
      avatar: "MS",
      points: 2150,
      badges: 9,
      rank: 4,
      country: "Brazil",
    },
    {
      id: 5,
      name: "Ahmed Hassan",
      school: "Cairo Sustainability Institute",
      avatar: "AH",
      points: 2080,
      badges: 8,
      rank: 5,
      country: "Egypt",
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

  const getCountryFlag = (country) => {
    const flags = {
      USA: "🇺🇸",
      Japan: "🇯🇵",
      Denmark: "🇩🇰",
      Brazil: "🇧🇷",
      Egypt: "🇪🇬",
    }
    return flags[country] || "🌍"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-eco-leaf to-eco-sky text-white">
        <div className="container mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-12 h-12 text-yellow-300 mr-3" />
              <h1 className="text-4xl font-bold">Global Leaderboard</h1>
            </div>
            <p className="text-xl text-white/90 mb-6">Top eco-learners from around the world</p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Top 3 Podium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-end justify-center space-x-8 mb-8">
            {/* 2nd Place */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-white font-bold text-2xl">{globalLeaderboard[1]?.avatar}</span>
                <div className="absolute -top-2 text-2xl">{getCountryFlag(globalLeaderboard[1]?.country)}</div>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{globalLeaderboard[1]?.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{globalLeaderboard[1]?.school}</p>
              <p className="text-sm font-medium text-foreground mb-3">{globalLeaderboard[1]?.points} points</p>
              <div className="w-20 h-16 bg-gray-400/20 rounded-t-lg flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-gray-400">2</span>
              </div>
            </motion.div>

            {/* 1st Place */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-28 h-28 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <Crown className="absolute -top-3 w-8 h-8 text-yellow-600" />
                <span className="text-white font-bold text-3xl">{globalLeaderboard[0]?.avatar}</span>
                <div className="absolute -top-1 -right-2 text-2xl">{getCountryFlag(globalLeaderboard[0]?.country)}</div>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{globalLeaderboard[0]?.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{globalLeaderboard[0]?.school}</p>
              <p className="text-sm font-medium text-foreground mb-3">{globalLeaderboard[0]?.points} points</p>
              <div className="w-24 h-20 bg-yellow-500/20 rounded-t-lg flex items-center justify-center mx-auto">
                <span className="text-3xl font-bold text-yellow-500">1</span>
              </div>
            </motion.div>

            {/* 3rd Place */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-white font-bold text-2xl">{globalLeaderboard[2]?.avatar}</span>
                <div className="absolute -top-2 text-2xl">{getCountryFlag(globalLeaderboard[2]?.country)}</div>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{globalLeaderboard[2]?.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{globalLeaderboard[2]?.school}</p>
              <p className="text-sm font-medium text-foreground mb-3">{globalLeaderboard[2]?.points} points</p>
              <div className="w-20 h-14 bg-amber-600/20 rounded-t-lg flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-amber-600">3</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Full Rankings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">Top Global Performers</h2>

          <div className="space-y-4">
            {globalLeaderboard.map((student, index) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className={`eco-card p-6 ${
                  student.rank <= 3
                    ? student.rank === 1
                      ? "bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border-yellow-500/30"
                      : student.rank === 2
                        ? "bg-gradient-to-r from-gray-400/10 to-gray-500/10 border-gray-400/30"
                        : "bg-gradient-to-r from-amber-600/10 to-amber-700/10 border-amber-600/30"
                    : ""
                }`}
              >
                <div className="flex items-center space-x-6">
                  {/* Rank */}
                  <div className="flex items-center justify-center w-16">{getRankIcon(student.rank)}</div>

                  {/* Avatar */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center relative ${
                      student.rank === 1
                        ? "bg-yellow-500"
                        : student.rank === 2
                          ? "bg-gray-400"
                          : student.rank === 3
                            ? "bg-amber-600"
                            : "bg-eco-leaf"
                    }`}
                  >
                    <span className="text-white font-bold text-xl">{student.avatar}</span>
                    <div className="absolute -top-1 -right-1 text-lg">{getCountryFlag(student.country)}</div>
                  </div>

                  {/* Student Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{student.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {student.school} • {student.country}
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="font-medium text-eco-leaf">{student.points} points</span>
                      <span className="text-muted-foreground">{student.badges} badges</span>
                    </div>
                  </div>

                  {/* Achievement Badge */}
                  {student.rank <= 3 && (
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        student.rank === 1
                          ? "bg-yellow-500/20 text-yellow-700"
                          : student.rank === 2
                            ? "bg-gray-400/20 text-gray-700"
                            : "bg-amber-600/20 text-amber-700"
                      }`}
                    >
                      {student.rank === 1 ? "Champion" : student.rank === 2 ? "Runner-up" : "Third Place"}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <div className="eco-card p-8 max-w-2xl mx-auto">
            <Trophy className="w-12 h-12 text-eco-leaf mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-4">Ready to Join the Competition?</h3>
            <p className="text-muted-foreground mb-6">
              Start your eco-learning journey today and climb the global leaderboard!
            </p>
            <Link
              to="/auth"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-eco-leaf text-white rounded-lg hover:bg-eco-leaf/90 transition-colors"
            >
              <span>Get Started</span>
              <TrendingUp className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LeaderboardPage
