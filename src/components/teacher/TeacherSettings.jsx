"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { User, Lock, Bell, Palette, Shield, Save, Eye, EyeOff } from "lucide-react"

const TeacherSettings = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [settings, setSettings] = useState({
    // Profile Settings
    name: "Dr. Sarah Wilson",
    email: "sarah.wilson@school.edu",
    bio: "Environmental Science Teacher with 10+ years of experience in sustainability education.",

    // Notification Settings
    emailNotifications: true,
    studentSubmissions: true,
    weeklyReports: true,
    systemUpdates: false,

    // Privacy Settings
    profileVisibility: "students",
    showEmail: false,
    allowMessages: true,

    // Appearance Settings
    theme: "light",
    language: "english",
  })

  const handleInputChange = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = () => {
    // Save settings logic here
    console.log("Settings saved:", settings)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and teaching settings</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="eco-card p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-eco-leaf/10 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-eco-leaf" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Profile Information</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  value={settings.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-leaf/20 focus:border-eco-leaf"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-leaf/20 focus:border-eco-leaf"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
                <textarea
                  value={settings.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-leaf/20 focus:border-eco-leaf resize-none"
                />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="eco-card p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-eco-sky/10 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-eco-sky" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Security</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Current Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter current password"
                    className="w-full px-3 py-2 pr-10 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-leaf/20 focus:border-eco-leaf"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">New Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-leaf/20 focus:border-eco-leaf"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Confirm New Password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-leaf/20 focus:border-eco-leaf"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Notification & Privacy Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Notification Settings */}
          <div className="eco-card p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-eco-sun/10 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-eco-sun" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Notifications</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  key: "emailNotifications",
                  label: "Email Notifications",
                  description: "Receive notifications via email",
                },
                {
                  key: "studentSubmissions",
                  label: "Student Submissions",
                  description: "Get notified when students submit work",
                },
                { key: "weeklyReports", label: "Weekly Reports", description: "Receive weekly progress reports" },
                { key: "systemUpdates", label: "System Updates", description: "Get notified about platform updates" },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  <button
                    onClick={() => handleInputChange(item.key, !settings[item.key])}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings[item.key] ? "bg-eco-leaf" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings[item.key] ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="eco-card p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-eco-earth/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-eco-earth" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Privacy</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Profile Visibility</label>
                <select
                  value={settings.profileVisibility}
                  onChange={(e) => handleInputChange("profileVisibility", e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-leaf/20 focus:border-eco-leaf"
                >
                  <option value="public">Public</option>
                  <option value="students">Students Only</option>
                  <option value="private">Private</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Show Email</p>
                  <p className="text-xs text-muted-foreground">Display email on your profile</p>
                </div>
                <button
                  onClick={() => handleInputChange("showEmail", !settings.showEmail)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.showEmail ? "bg-eco-leaf" : "bg-muted"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.showEmail ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Allow Messages</p>
                  <p className="text-xs text-muted-foreground">Let students send you messages</p>
                </div>
                <button
                  onClick={() => handleInputChange("allowMessages", !settings.allowMessages)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.allowMessages ? "bg-eco-leaf" : "bg-muted"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.allowMessages ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Appearance Settings */}
          <div className="eco-card p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 text-purple-500" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Appearance</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Theme</label>
                <select
                  value={settings.theme}
                  onChange={(e) => handleInputChange("theme", e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-leaf/20 focus:border-eco-leaf"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Language</label>
                <select
                  value={settings.language}
                  onChange={(e) => handleInputChange("language", e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-leaf/20 focus:border-eco-leaf"
                >
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Save Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-end"
      >
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 px-6 py-3 bg-eco-leaf text-white rounded-lg hover:bg-eco-leaf/90 transition-colors"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </motion.div>
    </div>
  )
}

export default TeacherSettings
