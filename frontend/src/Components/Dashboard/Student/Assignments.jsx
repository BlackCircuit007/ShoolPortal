import './Assignments.css'

function Assignments() {
    return (
        <section className="dashboard-section assignments-section">

            <div className="section-header">
                <div>
                    <h2>Upcoming Assignments</h2>
                    <p>Don't miss your deadlines</p>
                </div>

                <button className="view-all-btn">
                    View all
                </button>
            </div>

            <div className="assignments-list">

                <div className="assignment-item">
                    <div className="assignment-info">
                        <h3>Mathematics Assignment</h3>
                        <p>Due tomorrow</p>
                    </div>

                    <span className="assignment-status urgent">
                        Due soon
                    </span>
                </div>

                <div className="assignment-item">
                    <div className="assignment-info">
                        <h3>Physics Lab Report</h3>
                        <p>Due Friday</p>
                    </div>

                    <span className="assignment-status">
                        Upcoming
                    </span>
                </div>

                <div className="assignment-item">
                    <div className="assignment-info">
                        <h3>English Essay</h3>
                        <p>Due Monday</p>
                    </div>

                    <span className="assignment-status">
                        Upcoming
                    </span>
                </div>

            </div>

        </section>
    )
}

export default Assignments