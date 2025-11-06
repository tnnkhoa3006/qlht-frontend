"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { useTheme } from "../contexts/ThemeContext"
import { GraduationCap, LogOut, Menu, X, ChevronRight, Sun, Moon } from "lucide-react"
import "../styles/DashboardLayout.css"

export default function DashboardLayout({ children, navigationItems, userRole }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  const getRoleLabel = (role) => {
    const labels = {
      admin: "Quản trị viên",
      teacher: "Giảng viên",
      student: "Sinh viên",
    }
    return labels[role] || role
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <GraduationCap size={32} />
            <span>University LMS</span>
          </div>
          <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${isActive ? "active" : ""}`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
                {isActive && <ChevronRight size={16} className="nav-arrow" />}
              </Link>
            )
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">{user?.name?.charAt(0) || "U"}</div>
            <div className="user-details">
              <p className="user-name">{user?.name}</p>
              <p className="user-role">{getRoleLabel(user?.role)}</p>
            </div>
          </div>
          <button className="logout-button" onClick={logout}>
            <LogOut size={20} />
            <span>Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="top-header">
          <button className="menu-button" onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          <div className="header-right">
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="user-badge">
              <div className="user-avatar-small">{user?.name?.charAt(0) || "U"}</div>
              <span>{user?.name}</span>
            </div>
          </div>
        </header>

        <main className="content">{children}</main>
      </div>

      {/* Overlay */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}
    </div>
  )
}
