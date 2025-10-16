"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    // Mock authentication - Replace with real API call
    const mockUsers = [
      { id: 1, email: "admin@university.edu.vn", password: "admin123", role: "admin", name: "Quản Trị Viên" },
      {
        id: 2,
        email: "teacher@university.edu.vn",
        password: "teacher123",
        role: "teacher",
        name: "Nguyễn Văn A",
        department: "Khoa Công Nghệ Thông Tin",
      },
      {
        id: 3,
        email: "student@university.edu.vn",
        password: "student123",
        role: "student",
        name: "Trần Thị B",
        studentId: "SV2024001",
        class: "CNTT-K18",
      },
    ]

    const foundUser = mockUsers.find((u) => u.email === email && u.password === password)

    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
      localStorage.setItem("user", JSON.stringify(userWithoutPassword))
      return { success: true, user: userWithoutPassword }
    }

    return { success: false, error: "Email hoặc mật khẩu không đúng" }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "hsl(var(--background))",
        }}
      >
        <div style={{ color: "hsl(var(--foreground))" }}>Đang tải...</div>
      </div>
    )
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}
