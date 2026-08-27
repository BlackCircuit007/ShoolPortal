import { useNavigate } from 'react-router-dom'
import './AdminDashboard.css'

function AdminDashboard() {

    const navigate = useNavigate()

    return (

        <div className="admin-dashboard">

            {/* HEADER */}

            <section className="admin-dashboard-header">

                <div>

                    <span className="admin-dashboard-label">
                        ADMINISTRATION
                    </span>

                    <h1>
                        Welcome back, Admin
                    </h1>

                    <p>
                        Manage your school's portal from one place.
                    </p>

                </div>

            </section>


            {/* STATS */}

            <section className="admin-stats">

                <div className="admin-stat-card">

                    <span>
                        Students
                    </span>

                    <strong>
                        1,248
                    </strong>

                    <p>
                        Registered students
                    </p>

                </div>


                <div className="admin-stat-card">

                    <span>
                        Teachers
                    </span>

                    <strong>
                        68
                    </strong>

                    <p>
                        Teaching staff
                    </p>

                </div>


                <div className="admin-stat-card">

                    <span>
                        Classes
                    </span>

                    <strong>
                        18
                    </strong>

                    <p>
                        Active classes
                    </p>

                </div>


                <div className="admin-stat-card">

                    <span>
                        Subjects
                    </span>

                    <strong>
                        32
                    </strong>

                    <p>
                        Available subjects
                    </p>

                </div>

            </section>


            {/* MAIN GRID */}

            <section className="admin-grid">


                {/* SCHOOL MANAGEMENT */}

                <div className="admin-card">

                    <span className="admin-card-label">
                        SCHOOL MANAGEMENT
                    </span>

                    <h2>
                        Manage School
                    </h2>

                    <p>
                        Manage students, teachers, classes and subjects.
                    </p>


                    <div className="admin-actions">

                        <button
                            onClick={() => navigate('/admin/students')}
                        >
                            Students
                        </button>


                        <button
                            onClick={() => navigate('/admin/teachers')}
                        >
                            Teachers
                        </button>


                        <button
                            onClick={() => navigate('/admin/classes')}
                        >
                            Classes
                        </button>


                        <button
                            onClick={() => navigate('/admin/subjects')}
                        >
                            Subjects
                        </button>

                    </div>

                </div>


                {/* NOTIFICATIONS */}

                <div className="admin-card">

                    <span className="admin-card-label">
                        COMMUNICATION
                    </span>

                    <h2>
                        Notifications
                    </h2>

                    <p>
                        Send important announcements to teachers and students.
                    </p>


                    <button
                        className="admin-primary-button"
                        onClick={() => navigate('/admin/notifications')}
                    >
                        Send Notification
                    </button>

                </div>


                {/* ACADEMICS */}

                <div className="admin-card">

                    <span className="admin-card-label">
                        ACADEMICS
                    </span>

                    <h2>
                        Academic Management
                    </h2>

                    <p>
                        Manage results, attendance, assignments and timetables.
                    </p>


                    <div className="admin-actions">

                        <button
                            onClick={() => navigate('/admin/results')}
                        >
                            Results
                        </button>


                        <button
                            onClick={() => navigate('/admin/attendance')}
                        >
                            Attendance
                        </button>


                        <button
                            onClick={() => navigate('/admin/timetable')}
                        >
                            Timetable
                        </button>

                    </div>

                </div>


                {/* SYSTEM */}

                <div className="admin-card">

                    <span className="admin-card-label">
                        SYSTEM
                    </span>

                    <h2>
                        Portal Settings
                    </h2>

                    <p>
                        Configure school settings and portal preferences.
                    </p>


                    <button
                        className="admin-secondary-button"
                        onClick={() => navigate('/admin/settings')}
                    >
                        Settings
                    </button>

                </div>


            </section>

        </div>

    )
}

export default AdminDashboard