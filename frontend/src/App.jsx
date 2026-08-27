import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './Pages/LandingPage'
import Login from './Pages/Login'
import ForgotPassword from './Pages/ForgotPassword'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import PortalLayout from './Components/Layout/PortalLayout'

// Student
import StudentDashboard from './Pages/Student/StudentDashboard'
import StudentProfile from './Pages/Student/StudentProfile'
import StudentAttendance from './Pages/Student/StudentAttendance'
import StudentResults from './Pages/Student/StudentResult'
import StudentAssignments from './Pages/Student/StudentAssignment'

// Teacher
import TeacherDashboard from './Pages/Teacher/TeacherDashboard'
import TeacherProfile from './Pages/Teacher/TeacherProfile'
import TeacherAttendance from './Pages/Teacher/TeacherAttendance'
import TeacherResults from './Pages/Teacher/TeacherResult'
import TeacherAssignments from './Pages/Teacher/TeacherAssignment'
import TeacherClass from './Pages/Teacher/TeacherClass'
import TeacherStudents from './Pages/Teacher/TeacherStudent'


function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* =========================
                    PUBLIC PAGES
                ========================= */}

                <Route
                    path="/"
                    element={<LandingPage />}
                />
                <Route
                    path="/admin"
                    element={
                        <PortalLayout
                            userName="Administrator"
                            userRole="Admin"
                            userInitials="AD"
                        >
                            <AdminDashboard />
                        </PortalLayout>
                    }
                />
                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/forgot-password"
                    element={<ForgotPassword />}
                />


                {/* =========================
                    STUDENT
                ========================= */}

                <Route
                    path="/student"
                    element={
                        <PortalLayout
                            userName="John Doe"
                            userRole="Student"
                            userInitials="JD"
                        >
                            <StudentDashboard />
                        </PortalLayout>
                    }
                />

                <Route
                    path="/student/profile"
                    element={
                        <PortalLayout
                            userName="John Doe"
                            userRole="Student"
                            userInitials="JD"
                        >
                            <StudentProfile />
                        </PortalLayout>
                    }
                />

                <Route
                    path="/student/attendance"
                    element={
                        <PortalLayout
                            userName="John Doe"
                            userRole="Student"
                            userInitials="JD"
                        >
                            <StudentAttendance />
                        </PortalLayout>
                    }
                />

                <Route
                    path="/student/results"
                    element={
                        <PortalLayout
                            userName="John Doe"
                            userRole="Student"
                            userInitials="JD"
                        >
                            <StudentResults />
                        </PortalLayout>
                    }
                />

                <Route
                    path="/student/assignments"
                    element={
                        <PortalLayout
                            userName="John Doe"
                            userRole="Student"
                            userInitials="JD"
                        >
                            <StudentAssignments />
                        </PortalLayout>
                    }
                />


                {/* =========================
                    TEACHER
                ========================= */}

                <Route
                    path="/teacher"
                    element={
                        <PortalLayout
                            userName="Sarah Adams"
                            userRole="Teacher"
                            userInitials="SA"
                        >
                            <TeacherDashboard />
                        </PortalLayout>
                    }
                />

                <Route
                    path="/teacher/profile"
                    element={
                        <PortalLayout
                            userName="Sarah Adams"
                            userRole="Teacher"
                            userInitials="SA"
                        >
                            <TeacherProfile />
                        </PortalLayout>
                    }
                />

                <Route
                    path="/teacher/classes"
                    element={
                        <PortalLayout
                            userName="Sarah Adams"
                            userRole="Teacher"
                            userInitials="SA"
                        >
                            <TeacherClass />
                        </PortalLayout>
                    }
                />

                <Route
                    path="/teacher/students"
                    element={
                        <PortalLayout
                            userName="Sarah Adams"
                            userRole="Teacher"
                            userInitials="SA"
                        >
                            <TeacherStudents />
                        </PortalLayout>
                    }
                />

                <Route
                    path="/teacher/assignments"
                    element={
                        <PortalLayout
                            userName="Sarah Adams"
                            userRole="Teacher"
                            userInitials="SA"
                        >
                            <TeacherAssignments />
                        </PortalLayout>
                    }
                />

                <Route
                    path="/teacher/attendance"
                    element={
                        <PortalLayout
                            userName="Sarah Adams"
                            userRole="Teacher"
                            userInitials="SA"
                        >
                            <TeacherAttendance />
                        </PortalLayout>
                    }
                />

                <Route
                    path="/teacher/results"
                    element={
                        <PortalLayout
                            userName="Sarah Adams"
                            userRole="Teacher"
                            userInitials="SA"
                        >
                            <TeacherResults />
                        </PortalLayout>
                    }
                />

            </Routes>

        </BrowserRouter>

    )
}

export default App