import { useNavigate } from 'react-router-dom'
import './TeacherDashboard.css'

function TeacherDashboard() {

    const navigate = useNavigate()

    return (
        <div className="teacher-dashboard">

            {/* HEADER */}

            <section className="teacher-dashboard-header">

                <div>
                    <span className="teacher-dashboard-label">
                        TEACHER DASHBOARD
                    </span>

                    <h1>
                        Welcome back, Sarah
                    </h1>

                    <p>
                        Here's what's happening with your classes today.
                    </p>
                </div>

                <button
                    className="teacher-profile-button"
                    onClick={() => navigate('/teacher/profile')}
                >
                    View Profile
                </button>

            </section>


            {/* STATS */}

            <section className="teacher-stats">

                <button
                    className="teacher-stat-card teacher-stat-button"
                    onClick={() => navigate('/teacher/classes')}
                >
                    <span className="stat-label">
                        My Classes
                    </span>

                    <strong className="stat-value">
                        5
                    </strong>

                    <span className="stat-description">
                        Classes assigned
                    </span>
                </button>


                <button
                    className="teacher-stat-card teacher-stat-button"
                    onClick={() => navigate('/teacher/students')}
                >
                    <span className="stat-label">
                        Students
                    </span>

                    <strong className="stat-value">
                        142
                    </strong>

                    <span className="stat-description">
                        Across your classes
                    </span>
                </button>


                <button
                    className="teacher-stat-card teacher-stat-button"
                    onClick={() => navigate('/teacher/results')}
                >
                    <span className="stat-label">
                        Pending Results
                    </span>

                    <strong className="stat-value">
                        3
                    </strong>

                    <span className="stat-description">
                        Awaiting submission
                    </span>
                </button>


                <button
                    className="teacher-stat-card teacher-stat-button"
                    onClick={() => navigate('/teacher/attendance')}
                >
                    <span className="stat-label">
                        Attendance
                    </span>

                    <strong className="stat-value">
                        94%
                    </strong>

                    <span className="stat-description">
                        This term
                    </span>
                </button>

            </section>


            {/* TODAY'S CLASSES + RESULTS */}

            <section className="teacher-dashboard-grid">

                <section className="teacher-card">

                    <div className="teacher-card-header">

                        <div>
                            <span className="card-label">
                                TODAY
                            </span>

                            <h2>
                                Today's Classes
                            </h2>

                            <p>
                                Your teaching schedule for today.
                            </p>
                        </div>

                        <button
                            className="card-action"
                            onClick={() => navigate('/teacher/classes')}
                        >
                            View all
                        </button>

                    </div>


                    <div className="class-list">

                        <button
                            className="class-item class-item-button"
                            onClick={() => navigate('/teacher/classes')}
                        >
                            <div>
                                <strong>
                                    Mathematics
                                </strong>

                                <span>
                                    JSS 2A
                                </span>
                            </div>

                            <span className="class-time">
                                9:00 AM
                            </span>
                        </button>


                        <button
                            className="class-item class-item-button"
                            onClick={() => navigate('/teacher/classes')}
                        >
                            <div>
                                <strong>
                                    Mathematics
                                </strong>

                                <span>
                                    JSS 3A
                                </span>
                            </div>

                            <span className="class-time">
                                11:00 AM
                            </span>
                        </button>


                        <button
                            className="class-item class-item-button"
                            onClick={() => navigate('/teacher/classes')}
                        >
                            <div>
                                <strong>
                                    Further Mathematics
                                </strong>

                                <span>
                                    SS 1B
                                </span>
                            </div>

                            <span className="class-time">
                                2:00 PM
                            </span>
                        </button>

                    </div>

                </section>


                {/* RESULTS */}

                <section className="teacher-card results-card">

                    <div className="teacher-card-header">

                        <div>
                            <span className="card-label">
                                ACADEMICS
                            </span>

                            <h2>
                                Results
                            </h2>

                            <p>
                                Results requiring your attention.
                            </p>
                        </div>

                    </div>


                    <div className="result-summary">

                        <strong>
                            3
                        </strong>

                        <span>
                            classes have results
                            awaiting submission.
                        </span>

                    </div>


                    <button
                        className="results-button"
                        onClick={() => navigate('/teacher/results')}
                    >
                        Enter Results
                    </button>

                </section>

            </section>


            {/* ACTIVITY + ANNOUNCEMENTS */}

            <section className="teacher-dashboard-grid">

                <section className="teacher-card">

                    <div className="teacher-card-header">

                        <div>
                            <span className="card-label">
                                ACTIVITY
                            </span>

                            <h2>
                                Recent Activity
                            </h2>

                            <p>
                                Latest activity from your classes.
                            </p>
                        </div>

                    </div>


                    <div className="activity-list">

                        <div className="activity-item">

                            <strong>
                                Assignment submitted
                            </strong>

                            <span>
                                John Doe submitted a Mathematics assignment.
                            </span>

                        </div>


                        <div className="activity-item">

                            <strong>
                                Attendance recorded
                            </strong>

                            <span>
                                JSS 2A attendance has been recorded.
                            </span>

                        </div>


                        <div className="activity-item">

                            <strong>
                                New announcement
                            </strong>

                            <span>
                                School management posted a new notice.
                            </span>

                        </div>

                    </div>

                </section>


                {/* ANNOUNCEMENTS */}

                <section className="teacher-card">

                    <div className="teacher-card-header">

                        <div>
                            <span className="card-label">
                                SCHOOL
                            </span>

                            <h2>
                                Announcements
                            </h2>

                            <p>
                                Important school updates.
                            </p>

                        </div>

                    </div>


                    <div className="announcement-list">

                        <div className="announcement-item">

                            <strong>
                                Staff Meeting
                            </strong>

                            <span>
                                Staff meeting scheduled for Friday.
                            </span>

                        </div>


                        <div className="announcement-item">

                            <strong>
                                Result Submission
                            </strong>

                            <span>
                                Term results should be submitted before the deadline.
                            </span>

                        </div>

                    </div>

                </section>

            </section>

        </div>
    )
}

export default TeacherDashboard