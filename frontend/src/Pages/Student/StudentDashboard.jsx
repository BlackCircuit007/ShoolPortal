import { useNavigate } from 'react-router-dom'
import './StudentDashboard.css'

import Timetable from '../../Components/Dashboard/Student/Timetable'
import Assignments from '../../Components/Dashboard/Student/Assignments'
import RecentResults from '../../Components/Dashboard/Student/RecentResults'
import Announcements from '../../Components/Dashboard/Student/Announcements'

function StudentDashboard() {

    const navigate = useNavigate()

    return (
        <div className="dashboard">

            {/* HEADER */}

            <section className="dashboard-header">

                <div>
                    <span className="dashboard-label">
                        STUDENT DASHBOARD
                    </span>

                    <h1>
                        Welcome back, John
                    </h1>

                    <p>
                        Here's your academic overview for today.
                    </p>
                </div>

                <button
                    className="profile-button"
                    onClick={() => navigate('/student/profile')}
                >
                    View Profile
                </button>

            </section>


            {/* STATS */}

            <section className="stats-grid">

                <button
                    className="stat-card stat-card-button"
                    onClick={() => navigate('/student/results')}
                >
                    <span className="stat-label">
                        Average
                    </span>

                    <h2>82%</h2>

                    <p>Current average</p>
                </button>


                <button
                    className="stat-card stat-card-button"
                    onClick={() => navigate('/student/attendance')}
                >
                    <span className="stat-label">
                        Attendance
                    </span>

                    <h2>94%</h2>

                    <p>This term</p>
                </button>


                <button
                    className="stat-card stat-card-button"
                    onClick={() => navigate('/student/assignments')}
                >
                    <span className="stat-label">
                        Assignments
                    </span>

                    <h2>4</h2>

                    <p>Pending</p>
                </button>


                <button
                    className="stat-card stat-card-button"
                    onClick={() => navigate('/student/results')}
                >
                    <span className="stat-label">
                        Class Position
                    </span>

                    <h2>8th</h2>

                    <p>Out of 42 students</p>
                </button>

            </section>


            {/* TIMETABLE + ASSIGNMENTS */}

            <section className="dashboard-grid">

                <Timetable />

                <Assignments />

            </section>


            {/* RESULTS + ANNOUNCEMENTS */}

            <section className="dashboard-grid">

                <RecentResults />

                <Announcements />

            </section>

        </div>
    )
}

export default StudentDashboard