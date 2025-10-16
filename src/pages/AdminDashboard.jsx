import { Routes, Route } from "react-router-dom"
import DashboardLayout from "../components/DashboardLayout"
import {
  Users,
  BookOpen,
  BarChart3,
  Building2,
  ClipboardList,
  Calendar,
  Award,
  CreditCard,
  Briefcase,
  MessageCircle,
  Settings,
} from "lucide-react"

const navigationItems = [
  { name: "Tổng quan", path: "/admin", icon: BarChart3 },
  { name: "Quản lý người dùng", path: "/admin/users", icon: Users },
  { name: "Quản lý khoa, ngành, lớp", path: "/admin/departments", icon: Building2 },
  { name: "Quản lý học phần & kế hoạch đào tạo", path: "/admin/curriculum", icon: BookOpen },
  { name: "Quản lý đăng ký học phần", path: "/admin/registration", icon: ClipboardList },
  { name: "Quản lý thời khóa biểu & lịch thi", path: "/admin/schedule", icon: Calendar },
  { name: "Quản lý điểm & kết quả học tập", path: "/admin/grades", icon: Award },
  { name: "Quản lý thu học phí", path: "/admin/tuition", icon: CreditCard },
  { name: "Thống kê & báo cáo", path: "/admin/reports", icon: BarChart3 },
  { name: "Quản lý thực tập & chuẩn đầu ra", path: "/admin/internship", icon: Briefcase },
  { name: "Hệ thống thông tin & tương tác", path: "/admin/communication", icon: MessageCircle },
  { name: "Cấu hình hệ thống", path: "/admin/settings", icon: Settings },
]

function AdminOverview() {
  return (
    <div>
      <h1 className="page-title">Tổng quan hệ thống</h1>
    </div>
  )
}

function UserManagement() {
  return <h1>Quản lý người dùng</h1>
}

function DepartmentManagement() {
  return <h1>Quản lý khoa, ngành, lớp</h1>
}

function CurriculumManagement() {
  return <h1>Quản lý học phần & kế hoạch đào tạo</h1>
}

function RegistrationManagement() {
  return <h1>Quản lý đăng ký học phần</h1>
}

function ScheduleManagement() {
  return <h1>Quản lý thời khóa biểu & lịch thi</h1>
}

function GradeManagement() {
  return <h1>Quản lý điểm & kết quả học tập</h1>
}

function TuitionManagement() {
  return <h1>Quản lý thu học phí</h1>
}

function Reports() {
  return <h1>Thống kê & báo cáo</h1>
}

function InternshipManagement() {
  return <h1>Quản lý thực tập & chuẩn đầu ra</h1>
}

function CommunicationSystem() {
  return <h1>Hệ thống thông tin & tương tác</h1>
}

function SystemSettings() {
  return <h1>Cấu hình hệ thống</h1>
}

export default function AdminDashboard() {
  return (
    <DashboardLayout navigationItems={navigationItems} userRole="admin">
      <Routes>
        <Route index element={<AdminOverview />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="departments" element={<DepartmentManagement />} />
        <Route path="curriculum" element={<CurriculumManagement />} />
        <Route path="registration" element={<RegistrationManagement />} />
        <Route path="schedule" element={<ScheduleManagement />} />
        <Route path="grades" element={<GradeManagement />} />
        <Route path="tuition" element={<TuitionManagement />} />
        <Route path="reports" element={<Reports />} />
        <Route path="internship" element={<InternshipManagement />} />
        <Route path="communication" element={<CommunicationSystem />} />
        <Route path="settings" element={<SystemSettings />} />
      </Routes>
    </DashboardLayout>
  )
}
