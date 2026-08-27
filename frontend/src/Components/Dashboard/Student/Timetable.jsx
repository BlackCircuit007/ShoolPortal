import './Timetable.css'

function Timetable() {
    return (
        <section className="dashboard-section timetable-section">

            <div className="section-header">
                <div>
                    <h2>Today's Timetable</h2>
                    <p>Your classes for today</p>
                </div>

                <button className="view-all-btn">
                    View all
                </button>
            </div>

            <div className="timetable-list">

                <div className="timetable-item">
                    <div className="class-time">
                        <strong>09:00</strong>
                        <span>AM</span>
                    </div>

                    <div className="class-info">
                        <h3>Mathematics</h3>
                        <p>Mr. Okafor</p>
                    </div>
                </div>

                <div className="timetable-item">
                    <div className="class-time">
                        <strong>11:00</strong>
                        <span>AM</span>
                    </div>

                    <div className="class-info">
                        <h3>Physics</h3>
                        <p>Mrs. James</p>
                    </div>
                </div>

                <div className="timetable-item">
                    <div className="class-time">
                        <strong>01:00</strong>
                        <span>PM</span>
                    </div>

                    <div className="class-info">
                        <h3>English</h3>
                        <p>Mr. Smith</p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Timetable