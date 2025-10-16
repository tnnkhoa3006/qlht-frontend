"use client"

import { useState } from "react"
import CourseCard from "./CourseCard"
import CourseModal from "./CourseModal"
import { Search, Filter, Plus, BookOpen } from "lucide-react"
import "../styles/CourseManagement.css"

const mockCourses = [
  {
    id: 1,
    name: "Lập trình Web",
    code: "IT301",
    description: "Học các công nghệ web hiện đại: HTML, CSS, JavaScript, React",
    teacher: "Nguyễn Văn A",
    students: 45,
    credits: 3,
    semester: "HK1 2024-2025",
    status: "active",
  },
  {
    id: 2,
    name: "Cơ sở dữ liệu",
    code: "IT302",
    description: "Thiết kế và quản lý cơ sở dữ liệu quan hệ, SQL, NoSQL",
    teacher: "Trần Thị B",
    students: 52,
    credits: 3,
    semester: "HK1 2024-2025",
    status: "active",
  },
  {
    id: 3,
    name: "Trí tuệ nhân tạo",
    code: "IT401",
    description: "Các thuật toán AI, Machine Learning, Deep Learning",
    teacher: "Lê Văn C",
    students: 38,
    credits: 4,
    semester: "HK1 2024-2025",
    status: "active",
  },
  {
    id: 4,
    name: "An toàn thông tin",
    code: "IT402",
    description: "Bảo mật hệ thống, mã hóa, phòng chống tấn công mạng",
    teacher: "Phạm Thị D",
    students: 41,
    credits: 3,
    semester: "HK1 2024-2025",
    status: "active",
  },
  {
    id: 5,
    name: "Phát triển ứng dụng di động",
    code: "IT403",
    description: "Lập trình Android, iOS, React Native, Flutter",
    teacher: "Hoàng Văn E",
    students: 48,
    credits: 3,
    semester: "HK1 2024-2025",
    status: "active",
  },
  {
    id: 6,
    name: "Kiến trúc phần mềm",
    code: "IT404",
    description: "Design patterns, microservices, cloud architecture",
    teacher: "Nguyễn Thị F",
    students: 35,
    credits: 3,
    semester: "HK2 2024-2025",
    status: "upcoming",
  },
]

export default function CourseManagement({ userRole }) {
  const [courses] = useState(mockCourses)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.teacher.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = filterStatus === "all" || course.status === filterStatus

    return matchesSearch && matchesFilter
  })

  const handleEnroll = (course) => {
    alert(`Đăng ký khóa học: ${course.name}`)
  }

  const handleViewDetails = (course) => {
    setSelectedCourse(course)
  }

  const getTitle = () => {
    if (userRole === "admin") return "Quản lý khóa học"
    if (userRole === "teacher") return "Lớp học của tôi"
    return "Khóa học"
  }

  return (
    <div className="course-management">
      <div className="course-management-header">
        <div>
          <h1 className="page-title">{getTitle()}</h1>
          <p className="page-subtitle">
            {filteredCourses.length} khóa học {filterStatus === "active" ? "đang mở" : ""}
          </p>
        </div>
        {userRole === "admin" && (
          <button className="btn-add-course">
            <Plus size={20} />
            Thêm khóa học
          </button>
        )}
      </div>

      <div className="course-filters">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm khóa học, mã môn, giảng viên..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <Filter size={20} />
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="all">Tất cả</option>
            <option value="active">Đang mở</option>
            <option value="upcoming">Sắp mở</option>
          </select>
        </div>
      </div>

      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onEnroll={handleEnroll}
            onViewDetails={handleViewDetails}
            userRole={userRole}
          />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="empty-state">
          <BookOpen size={48} />
          <h3>Không tìm thấy khóa học</h3>
          <p>Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
        </div>
      )}

      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} userRole={userRole} />
      )}
    </div>
  )
}
