import { motion } from "framer-motion"
import { HelpCircle, Mail, MessageCircle } from "lucide-react"

const HelpPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Help & Support
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get the assistance you need to make the most of EcoLearners. Find answers to common questions and get in touch with our support team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="eco-card p-6"
          >
            <HelpCircle className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-foreground mb-2">How do I earn eco-points?</h3>
                <p className="text-muted-foreground">Complete lessons, quizzes, and eco-actions to earn points and climb the leaderboard.</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Can I track my progress?</h3>
                <p className="text-muted-foreground">Yes, your dashboard shows completed lessons, earned badges, and eco-points.</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">How do I reset my password?</h3>
                <p className="text-muted-foreground">Use the "Forgot Password" link on the login page or contact support.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="eco-card p-6"
          >
            <MessageCircle className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Support</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">Email Support</p>
                  <p className="text-muted-foreground">support@ecolearners.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">Live Chat</p>
                  <p className="text-muted-foreground">Available 9 AM - 6 PM EST</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-4">
                Need immediate help? Our support team is here to assist you.
              </p>
              <button className="eco-button w-full">
                Start Live Chat
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-4">Still need help?</h2>
          <p className="text-muted-foreground mb-6">
            Check out our comprehensive user guide or browse our knowledge base for detailed tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="eco-button">
              View User Guide
            </button>
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-lg font-medium transition-colors">
              Browse Knowledge Base
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HelpPage
