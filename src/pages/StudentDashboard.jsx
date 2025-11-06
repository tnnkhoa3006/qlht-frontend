import { Routes, Route } from "react-router-dom"
import DashboardLayout from "../components/DashboardLayout"
import {
  BookOpen,
  User,
  ClipboardList,
  UserPlus,
  CalendarCheck,
  BarChart3,
  MessageSquare,
  CreditCard,
  Clock,
  Briefcase,
  CheckCircle,
} from "lucide-react"

const navigationItems = [
  { name: "Tổng quan", path: "/student", icon: BookOpen },
  { name: "Thông tin sinh viên", path: "/student/info", icon: User },
  { name: "Kế hoạch học tập", path: "/student/study-plan", icon: ClipboardList },
  { name: "Đăng ký học phần", path: "/student/register", icon: UserPlus },
  { name: "Thời khóa biểu", path: "/student/schedule", icon: Clock },
  { name: "Xem lịch thi", path: "/student/exam-schedule", icon: CalendarCheck },
  { name: "Kết quả học tập", path: "/student/results", icon: BarChart3 },
  { name: "Đánh giá học phần", path: "/student/evaluation", icon: MessageSquare },
  { name: "Thu học phí", path: "/student/tuition", icon: CreditCard },
  { name: "Sinh viên thực tập", path: "/student/internship", icon: Briefcase },
  { name: "Xét chuẩn đầu ra", path: "/student/output-standards", icon: CheckCircle },
]

function StudentOverview() {
  return (
    <div>
      <h1 className="page-title">Tổng quan học tập</h1>
    </div>
  )
}

function StudentInfo() {
  return <h1>Thông tin sinh viên</h1>
}

function StudyPlan() {
  return <h1>Kế hoạch học tập</h1>
}

function CourseRegistration() {
  return <h1>Đăng ký học phần</h1>
}

function MySchedule() {
  return <h1>Thời khóa biểu</h1>
}

function ExamSchedule() {
  return <h1>Xem lịch thi</h1>
}

function AcademicResults() {
  return <h1>Kết quả học tập</h1>
}

function CourseEvaluation() {
  return <h1>Đánh giá học phần</h1>
}

function TuitionPayment() {
  return <h1>Thu học phí</h1>
}

function Internship() {
  return <h1>Sinh viên thực tập</h1>
}

function OutputStandards() {
  return <h1>Xét chuẩn đầu ra</h1>
}

function MyGrades() {
  return (
    <div>
      <h1 className="page-title">Điểm số</h1>
      <div className="card">
        <p className="text-muted">Bảng điểm các môn học</p>
      </div>
    </div>
  )
}

export default function StudentDashboard() {
  return (
    <DashboardLayout navigationItems={navigationItems} userRole="student">
      <Routes>
        <Route index element={<StudentOverview />} />
        <Route path="info" element={<StudentInfo />} />
        <Route path="study-plan" element={<StudyPlan />} />
        <Route path="register" element={<CourseRegistration />} />
        <Route path="schedule" element={<MySchedule />} />
        <Route path="exam-schedule" element={<ExamSchedule />} />
        <Route path="results" element={<AcademicResults />} />
        <Route path="evaluation" element={<CourseEvaluation />} />
        <Route path="tuition" element={<TuitionPayment />} />
        <Route path="internship" element={<Internship />} />
        <Route path="output-standards" element={<OutputStandards />} />
      </Routes>
    </DashboardLayout>
  )
}
