"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { Leaf, Camera, Send, CheckCircle, Clock, Award } from "lucide-react"

const StudentEcoActions = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData({
        ...formData,
        image: file,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ title: "", description: "", image: null })
      }, 3000)
    }, 2000)
  }

  const recentActions = [
    {
      title: "Planted 5 Trees in Local Park",
      date: "2 days ago",
      status: "approved",
      points: 50,
    },
    {
      title: "Organized Beach Cleanup",
      date: "1 week ago",
      status: "approved",
      points: 75,
    },
    {
      title: "Started Home Composting",
      date: "2 weeks ago",
      status: "pending",
      points: 30,
    },
  ]

  const actionIdeas = [
    {
      title: "Start a Recycling Program",
      description: "Organize recycling in your school or community",
      points: "40-60 points",
      difficulty: "Medium",
    },
    {
      title: "Create a Community Garden",
      description: "Start growing vegetables and herbs locally",
      points: "60-80 points",
      difficulty: "Hard",
    },
    {
      title: "Reduce Water Usage",
      description: "Implement water-saving measures at home",
      points: "20-40 points",
      difficulty: "Easy",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-foreground mb-2">Eco-Actions</h1>
        <p className="text-muted-foreground">Take real-world environmental actions and share your impact</p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="eco-card p-6 text-center">
          <div className="w-12 h-12 bg-eco-leaf/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-6 h-6 text-eco-leaf" />
          </div>
          <p className="text-2xl font-bold text-foreground">5</p>
          <p className="text-sm text-muted-foreground">Actions Completed</p>
        </div>
        <div className="eco-card p-6 text-center">
          <div className="w-12 h-12 bg-eco-sun/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Award className="w-6 h-6 text-eco-sun" />
          </div>
          <p className="text-2xl font-bold text-foreground">155</p>
          <p className="text-sm text-muted-foreground">Points Earned</p>
        </div>
        <div className="eco-card p-6 text-center">
          <div className="w-12 h-12 bg-eco-sky/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Clock className="w-6 h-6 text-eco-sky" />
          </div>
          <p className="text-2xl font-bold text-foreground">1</p>
          <p className="text-sm text-muted-foreground">Pending Review</p>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Submit New Action */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="eco-card p-6"
        >
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <Leaf className="w-5 h-5 mr-2 text-primary" />
            Submit New Action
          </h2>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
                  Action Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                  placeholder="What environmental action did you take?"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                  placeholder="Describe your action and its environmental impact..."
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium text-foreground mb-2">
                  Photo Evidence (Optional)
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <input type="file" id="image" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  <label htmlFor="image" className="cursor-pointer">
                    <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center mx-auto mb-2">
                      {formData.image ? (
                        <CheckCircle className="w-6 h-6 text-eco-leaf" />
                      ) : (
                        <Camera className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {formData.image ? formData.image.name : "Click to upload a photo"}
                    </p>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full eco-button flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Action</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-eco-leaf/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-eco-leaf" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Action Submitted!</h3>
              <p className="text-muted-foreground">
                Your eco-action is now under review. You'll earn points once approved!
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Action Ideas */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="eco-card p-6"
        >
          <h2 className="text-xl font-semibold text-foreground mb-4">Action Ideas</h2>
          <div className="space-y-4">
            {actionIdeas.map((idea, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-medium text-foreground mb-1">{idea.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{idea.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-medium">{idea.points}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      idea.difficulty === "Easy"
                        ? "bg-eco-leaf/10 text-eco-leaf"
                        : idea.difficulty === "Medium"
                          ? "bg-eco-sun/10 text-eco-sun"
                          : "bg-destructive/10 text-destructive"
                    }`}
                  >
                    {idea.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="eco-card p-6"
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">Your Recent Actions</h2>
        <div className="space-y-4">
          {recentActions.map((action, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-3 h-3 rounded-full ${action.status === "approved" ? "bg-eco-leaf" : "bg-eco-sun"}`}
                ></div>
                <div>
                  <h3 className="font-medium text-foreground">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-primary">+{action.points} points</p>
                <p className={`text-xs ${action.status === "approved" ? "text-eco-leaf" : "text-eco-sun"}`}>
                  {action.status === "approved" ? "Approved" : "Pending"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default StudentEcoActions
