"use client"

import { BookOpen, Users, Clock, Calendar } from "lucide-react"
import "../styles/CourseCard.css"

export default function CourseCard({ course, onEnroll, onViewDetails, userRole }) {
  return (
    <div className="course-card">
      <div className="course-header">
        <div className="course-icon">
          <BookOpen size={24} />
        </div>
        <span className={`course-status ${course.status}`}>{course.status === "active" ? "Đang mở" : "Sắp mở"}</span>
      </div>

      <h3 className="course-title">{course.name}</h3>
      <p className="course-code">{course.code}</p>
      <p className="course-description">{course.description}</p>

      <div className="course-meta">
        <div className="meta-item">
          <Users size={16} />
          <span>{course.students} sinh viên</span>
        </div>
        <div className="meta-item">
          <Clock size={16} />
          <span>{course.credits} tín chỉ</span>
        </div>
        <div className="meta-item">
          <Calendar size={16} />
          <span>{course.semester}</span>
        </div>
      </div>

      <div className="course-teacher">
        <div className="teacher-avatar">{course.teacher.charAt(0)}</div>
        <div>
          <p className="teacher-label">Giảng viên</p>
          <p className="teacher-name">{course.teacher}</p>
        </div>
      </div>

      <div className="course-actions">
        <button className="btn-secondary" onClick={() => onViewDetails(course)}>
          Xem chi tiết
        </button>
        {userRole === "student" && course.status === "active" && (
          <button className="btn-primary" onClick={() => onEnroll(course)}>
            Đăng ký
          </button>
        )}
      </div>
    </div>
  )
}
