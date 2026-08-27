import { NavLink } from 'react-router-dom'
import './Sidebar.css'

function Sidebar({
    sidebarOpen,
    setSidebarOpen,
    userRole
}) {

    return (
        <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>

            <button
                className="sidebar-close"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>


            <div>

                {/* BRAND */}

                <div className="sidebar-brand">

                    <h2>
                        EduPortal
                    </h2>

                    <span>
                        School Portal
                    </span>

                </div>


                {/* NAVIGATION */}

                <nav className="sidebar-nav">

                    {/* STUDENT */}

                    {userRole === 'Student' && (
                        <>
                            <NavLink
                                to="/student"
                                className="nav-item"
                            >
                                Dashboard
                            </NavLink>

                            <NavLink
                                to="/student/assignments"
                                className="nav-item"
                            >
                                Assignments
                            </NavLink>

                            <NavLink
                                to="/student/attendance"
                                className="nav-item"
                            >
                                Attendance
                            </NavLink>

                            <NavLink
                                to="/student/results"
                                className="nav-item"
                            >
                                Results
                            </NavLink>

                            <NavLink
                                to="/student/profile"
                                className="nav-item"
                            >
                                Profile
                            </NavLink>
                        </>
                    )}


                    {/* TEACHER */}

                    {userRole === 'Teacher' && (
                        <>
                            <NavLink
                                to="/teacher"
                                className="nav-item"
                            >
                                Dashboard
                            </NavLink>

                            <NavLink
                                to="/teacher/classes"
                                className="nav-item"
                            >
                                My Classes
                            </NavLink>

                            <NavLink
                                to="/teacher/students"
                                className="nav-item"
                            >
                                Students
                            </NavLink>

                            <NavLink
                                to="/teacher/assignments"
                                className="nav-item"
                            >
                                Assignments
                            </NavLink>

                            <NavLink
                                to="/teacher/attendance"
                                className="nav-item"
                            >
                                Attendance
                            </NavLink>

                            <NavLink
                                to="/teacher/results"
                                className="nav-item"
                            >
                                Results
                            </NavLink>

                            <NavLink
                                to="/teacher/profile"
                                className="nav-item"
                            >
                                Profile
                            </NavLink>
                        </>
                    )}


                    {/* ADMIN */}

                    {userRole === 'Admin' && (
                        <>
                            <NavLink
                                to="/admin"
                                className="nav-item"
                            >
                                Dashboard
                            </NavLink>

                            <NavLink
                                to="/admin/students"
                                className="nav-item"
                            >
                                Students
                            </NavLink>

                            <NavLink
                                to="/admin/teachers"
                                className="nav-item"
                            >
                                Teachers
                            </NavLink>

                            <NavLink
                                to="/admin/classes"
                                className="nav-item"
                            >
                                Classes
                            </NavLink>

                            <NavLink
                                to="/admin/subjects"
                                className="nav-item"
                            >
                                Subjects
                            </NavLink>

                            <NavLink
                                to="/admin/timetable"
                                className="nav-item"
                            >
                                Timetable
                            </NavLink>

                            <NavLink
                                to="/admin/results"
                                className="nav-item"
                            >
                                Results
                            </NavLink>

                            <NavLink
                                to="/admin/attendance"
                                className="nav-item"
                            >
                                Attendance
                            </NavLink>

                            <NavLink
                                to="/admin/notifications"
                                className="nav-item"
                            >
                                Notifications
                            </NavLink>

                        </>
                    )}

                </nav>

            </div>


            {/* BOTTOM */}

            <div className="sidebar-bottom">

                <NavLink
                    to={
                        userRole === 'Admin'
                            ? '/admin/settings'
                            : userRole === 'Teacher'
                                ? '/teacher/settings'
                                : '/student/settings'
                    }
                    className="nav-item"
                >
                    Settings
                </NavLink>

                <button
                    className="nav-item logout-button"
                    onClick={() => {
                        console.log('Logout clicked')
                    }}
                >
                    Logout
                </button>

            </div>

        </aside>
    )
}

export default Sidebar