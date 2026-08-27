import './TeacherProfile.css'

function TeacherProfile() {

    return (
        <div className="teacher-page">

            <div className="teacher-page-heading">

                <span>TEACHER</span>

                <h1>My Profile</h1>

                <p>
                    View your staff and professional information.
                </p>

            </div>


            <section className="teacher-profile-card">

                <div className="teacher-profile-header">

                    <div className="teacher-avatar">
                        SA
                    </div>

                    <div>

                        <h2>Sarah Adams</h2>

                        <p>
                            Staff ID: STF-2024-018
                        </p>

                        <span className="teacher-status">
                            Active Staff
                        </span>

                    </div>

                </div>


                <div className="teacher-profile-divider"></div>


                <div className="teacher-profile-grid">

                    <div className="teacher-profile-field">
                        <span>Full Name</span>
                        <strong>Sarah Adams</strong>
                    </div>

                    <div className="teacher-profile-field">
                        <span>Staff ID</span>
                        <strong>STF-2024-018</strong>
                    </div>

                    <div className="teacher-profile-field">
                        <span>Department</span>
                        <strong>Mathematics</strong>
                    </div>

                    <div className="teacher-profile-field">
                        <span>Position</span>
                        <strong>Subject Teacher</strong>
                    </div>

                    <div className="teacher-profile-field">
                        <span>Classes</span>
                        <strong>5 Classes</strong>
                    </div>

                    <div className="teacher-profile-field">
                        <span>Academic Session</span>
                        <strong>2025/2026</strong>
                    </div>

                </div>

            </section>

        </div>
    )
}

export default TeacherProfile