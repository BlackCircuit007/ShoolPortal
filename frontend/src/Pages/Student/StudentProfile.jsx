import './StudentProfile.css'

function StudentProfile() {

    return (
        <div className="student-page">

            <div className="page-heading">
                <span>STUDENT</span>

                <h1>My Profile</h1>

                <p>
                    View your personal and academic information.
                </p>
            </div>


            <section className="profile-card">

                <div className="profile-header">

                    <div className="profile-avatar">
                        JD
                    </div>

                    <div>
                        <h2>John Doe</h2>

                        <p>
                            Student ID: STU-2026-001
                        </p>

                        <span className="profile-status">
                            Active Student
                        </span>
                    </div>

                </div>


                <div className="profile-divider"></div>


                <div className="profile-grid">

                    <div className="profile-field">
                        <span>Full Name</span>
                        <strong>John Doe</strong>
                    </div>

                    <div className="profile-field">
                        <span>Student ID</span>
                        <strong>STU-2026-001</strong>
                    </div>

                    <div className="profile-field">
                        <span>Class</span>
                        <strong>JSS 2A</strong>
                    </div>

                    <div className="profile-field">
                        <span>Academic Session</span>
                        <strong>2025/2026</strong>
                    </div>

                    <div className="profile-field">
                        <span>Gender</span>
                        <strong>Male</strong>
                    </div>

                    <div className="profile-field">
                        <span>Admission Year</span>
                        <strong>2024</strong>
                    </div>

                </div>

            </section>

        </div>
    )
}

export default StudentProfile