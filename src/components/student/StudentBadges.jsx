"use client"
import { motion } from "framer-motion"
import { Award, Lock, CheckCircle, Target, TrendingUp } from "lucide-react"
import { useEco } from "../../contexts/EcoContext"

const StudentBadges = () => {
  const { badges } = useEco()

  const badgeCategories = [
    {
      title: "Learning Badges",
      description: "Earned through completing lessons and quizzes",
      badges: badges.filter((_, index) => index < 2),
    },
    {
      title: "Action Badges",
      description: "Earned through real-world environmental actions",
      badges: badges.filter((_, index) => index >= 2),
    },
  ]

  const achievements = [
    {
      title: "First Steps",
      description: "Complete your first lesson",
      progress: 100,
      completed: true,
    },
    {
      title: "Quiz Master",
      description: "Score 100% on 3 quizzes",
      progress: 66,
      completed: false,
    },
    {
      title: "Action Hero",
      description: "Complete 10 eco-actions",
      progress: 50,
      completed: false,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-foreground mb-2">Badges & Achievements</h1>
        <p className="text-muted-foreground">Celebrate your environmental learning milestones and accomplishments</p>
      </motion.div>

      {/* Badge Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="eco-card p-6 text-center">
          <div className="w-12 h-12 bg-eco-sun/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Award className="w-6 h-6 text-eco-sun" />
          </div>
          <p className="text-2xl font-bold text-foreground">{badges.filter((b) => b.earned).length}</p>
          <p className="text-sm text-muted-foreground">Badges Earned</p>
        </div>
        <div className="eco-card p-6 text-center">
          <div className="w-12 h-12 bg-eco-leaf/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Target className="w-6 h-6 text-eco-leaf" />
          </div>
          <p className="text-2xl font-bold text-foreground">{badges.length - badges.filter((b) => b.earned).length}</p>
          <p className="text-sm text-muted-foreground">Available to Earn</p>
        </div>
        <div className="eco-card p-6 text-center">
          <div className="w-12 h-12 bg-eco-sky/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <TrendingUp className="w-6 h-6 text-eco-sky" />
          </div>
          <p className="text-2xl font-bold text-foreground">25%</p>
          <p className="text-sm text-muted-foreground">Completion Rate</p>
        </div>
      </motion.div>

      {/* Badge Categories */}
      {badgeCategories.map((category, categoryIndex) => (
        <motion.div
          key={categoryIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
          className="space-y-4"
        >
          <div>
            <h2 className="text-2xl font-semibold text-foreground">{category.title}</h2>
            <p className="text-muted-foreground">{category.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.badges.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`eco-card p-6 text-center relative overflow-hidden ${
                  badge.earned ? "bg-gradient-to-br from-eco-sun/10 to-eco-leaf/10" : "opacity-60"
                }`}
              >
                {badge.earned && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle className="w-5 h-5 text-eco-leaf" />
                  </div>
                )}
                {!badge.earned && (
                  <div className="absolute top-2 right-2">
                    <Lock className="w-5 h-5 text-muted-foreground" />
                  </div>
                )}

                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl ${
                    badge.earned ? "bg-eco-sun/20" : "bg-muted/20"
                  }`}
                >
                  {badge.icon}
                </div>

                <h3
                  className={`text-lg font-semibold mb-2 ${badge.earned ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {badge.name}
                </h3>
                <p className={`text-sm ${badge.earned ? "text-muted-foreground" : "text-muted-foreground/60"}`}>
                  {badge.description}
                </p>

                {badge.earned && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-3 text-xs text-eco-leaf font-medium"
                  >
                    Earned!
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Achievements Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-4"
      >
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Achievement Progress</h2>
          <p className="text-muted-foreground">Track your progress towards earning new badges</p>
        </div>

        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="eco-card p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      achievement.completed ? "bg-eco-leaf/20" : "bg-muted/20"
                    }`}
                  >
                    {achievement.completed ? (
                      <CheckCircle className="w-5 h-5 text-eco-leaf" />
                    ) : (
                      <Target className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{achievement.progress}%</p>
                  <p className="text-xs text-muted-foreground">{achievement.completed ? "Complete" : "In Progress"}</p>
                </div>
              </div>

              <div className="w-full bg-muted/30 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${achievement.progress}%` }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  className={`h-2 rounded-full ${achievement.completed ? "bg-eco-leaf" : "bg-eco-sky"}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default StudentBadges
