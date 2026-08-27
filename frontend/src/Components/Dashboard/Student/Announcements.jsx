import './Announcements.css'

function Announcements() {
    return (
        <section className="dashboard-section announcements-section">

            <div className="section-header">
                <div>
                    <h2>Announcements</h2>
                    <p>Latest updates from your school</p>
                </div>

                <button className="view-all-btn">
                    View all
                </button>
            </div>

            <div className="announcements-list">

                <div className="announcement-item">
                    <div className="announcement-indicator"></div>

                    <div className="announcement-info">
                        <h3>School Assembly</h3>
                        <p>Tomorrow · 8:00 AM</p>
                    </div>
                </div>

                <div className="announcement-item">
                    <div className="announcement-indicator"></div>

                    <div className="announcement-info">
                        <h3>Sports Day</h3>
                        <p>Friday · School Field</p>
                    </div>
                </div>

                <div className="announcement-item">
                    <div className="announcement-indicator"></div>

                    <div className="announcement-info">
                        <h3>Exam Timetable Released</h3>
                        <p>Posted yesterday</p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Announcements