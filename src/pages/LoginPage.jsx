"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { GraduationCap, Mail, Lock, AlertCircle } from "lucide-react"
import "../styles/LoginPage.css"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const result = login(email, password)

    if (result.success) {
      navigate("/")
    } else {
      setError(result.error)
    }

    setLoading(false)
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo">
            <GraduationCap size={48} />
          </div>
          <h1>Hệ Thống Quản Lý Học Tập</h1>
          <p>Đại Học Quốc Gia</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && (
            <div className="error-message">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <Mail size={20} />
              <input
                id="email"
                type="email"
                placeholder="email@university.edu.vn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <div className="input-wrapper">
              <Lock size={20} />
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>

        <div className="demo-accounts">
          <p className="demo-title">Tài khoản demo:</p>
          <div className="demo-list">
            <div className="demo-item">
              <strong>Admin:</strong> admin@university.edu.vn / admin123
            </div>
            <div className="demo-item">
              <strong>Giảng viên:</strong> teacher@university.edu.vn / teacher123
            </div>
            <div className="demo-item">
              <strong>Sinh viên:</strong> student@university.edu.vn / student123
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
