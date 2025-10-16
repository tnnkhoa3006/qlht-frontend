import { Routes, Route } from "react-router-dom"
import DashboardLayout from "../components/DashboardLayout"
import {
  User,
  BookOpen,
  ClipboardCheck,
  FileEdit,
  MessageSquare,
  Briefcase,
  FileText,
  BookMarked,
  Settings,
  BarChart3,
} from "lucide-react"

const navigationItems = [
  { name: "Tổng quan", path: "/teacher", icon: BookOpen },
  { name: "Thông tin cá nhân", path: "/teacher/profile", icon: User },
  { name: "Quản lý học phần giảng dạy", path: "/teacher/courses", icon: BookOpen },
  { name: "Điểm danh & quản lý lớp học", path: "/teacher/attendance", icon: ClipboardCheck },
  { name: "Nhập và quản lý điểm", path: "/teacher/grades", icon: FileEdit },
  { name: "Đánh giá & phản hồi", path: "/teacher/evaluation", icon: MessageSquare },
  { name: "Hướng dẫn sinh viên thực tập / đồ án", path: "/teacher/supervision", icon: Briefcase },
  { name: "Thi cử & coi thi", path: "/teacher/exams", icon: FileText },
  { name: "Nghiên cứu & công tác chuyên môn", path: "/teacher/research", icon: BookMarked },
  { name: "Quản trị và phối hợp", path: "/teacher/administration", icon: Settings },
  { name: "Báo cáo & thống kê", path: "/teacher/reports", icon: BarChart3 },
]

function TeacherOverview() {
  return (
    <div>
      <h1 className="page-title">Tổng quan giảng dạy</h1>
    </div>
  )
}

function Profile() {
  return <h1>Thông tin cá nhân</h1>
}

function CourseManagement() {
  return <h1>Quản lý học phần giảng dạy</h1>
}

function Attendance() {
  return <h1>Điểm danh & quản lý lớp học</h1>
}

function GradeManagement() {
  return <h1>Nhập và quản lý điểm</h1>
}

function Evaluation() {
  return <h1>Đánh giá & phản hồi</h1>
}

function Supervision() {
  return <h1>Hướng dẫn sinh viên thực tập / đồ án</h1>
}

function Exams() {
  return <h1>Thi cử & coi thi</h1>
}

function Research() {
  return <h1>Nghiên cứu & công tác chuyên môn</h1>
}

function Administration() {
  return <h1>Quản trị và phối hợp</h1>
}

function Reports() {
  return <h1>Báo cáo & thống kê</h1>
}

export default function TeacherDashboard() {
  return (
    <DashboardLayout navigationItems={navigationItems} userRole="teacher">
      <Routes>
        <Route index element={<TeacherOverview />} />
        <Route path="profile" element={<Profile />} />
        <Route path="courses" element={<CourseManagement />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="grades" element={<GradeManagement />} />
        <Route path="evaluation" element={<Evaluation />} />
        <Route path="supervision" element={<Supervision />} />
        <Route path="exams" element={<Exams />} />
        <Route path="research" element={<Research />} />
        <Route path="administration" element={<Administration />} />
        <Route path="reports" element={<Reports />} />
      </Routes>
    </DashboardLayout>
  )
}
