"use client"
import { motion } from "framer-motion"
import { Leaf, Target, Users, Award } from "lucide-react"

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To make environmental education accessible, engaging, and actionable for everyone through innovative gamified learning experiences.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "Building a global community of environmentally conscious learners who support and inspire each other to take meaningful action.",
    },
    {
      icon: Award,
      title: "Recognition",
      description:
        "Celebrating every step of the learning journey with badges, points, and achievements that motivate continued engagement.",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About EcoLearn</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Empowering the next generation of environmental stewards through innovative education and community-driven
            action.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="eco-card p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              EcoLearn was born from the recognition that traditional environmental education often fails to engage
              learners and inspire real-world action. We believe that learning about our planet should be as exciting as
              it is important.
            </p>
            <p>
              Developed as part of the Smart India Hackathon (SIH) initiative, our platform combines cutting-edge
              gamification techniques with scientifically accurate environmental content to create an educational
              experience that truly makes a difference.
            </p>
            <p>
              Through interactive lessons, engaging quizzes, real-world eco-actions, and community features, we're
              building a generation of informed environmental advocates who understand both the challenges we face and
              the solutions within our reach.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="eco-card p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* SIH Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="eco-card p-8 bg-primary/5"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Smart India Hackathon Project</h2>
          <p className="text-muted-foreground mb-4">
            EcoLearn is proudly developed as part of the Smart India Hackathon, India's premier innovation challenge
            that brings together the brightest minds to solve real-world problems through technology.
          </p>
          <p className="text-muted-foreground">
            Our team is committed to creating solutions that not only meet the technical requirements but also have the
            potential to create lasting positive impact on environmental awareness and action across India and beyond.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage
