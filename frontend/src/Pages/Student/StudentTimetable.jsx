import './StudentTimetable.css'

function StudentTimetable() {

    const classes = [
        ['8:00 AM', 'Mathematics', 'JSS 2A'],
        ['9:00 AM', 'English Language', 'JSS 2A'],
        ['10:00 AM', 'Basic Science', 'JSS 2A'],
        ['11:00 AM', 'Break', ''],
        ['12:00 PM', 'Computer Studies', 'JSS 2A'],
        ['1:00 PM', 'Social Studies', 'JSS 2A'],
    ]

    return (
        <div className="student-page">

            <div className="page-heading">

                <span>ACADEMICS</span>

                <h1>Timetable</h1>

                <p>
                    Your weekly class schedule.
                </p>

            </div>


            <section className="timetable-card">

                <div className="timetable-header">

                    <div>
                        <h2>Today's Schedule</h2>
                        <p>JSS 2A</p>
                    </div>

                </div>


                <div className="timetable-list">

                    {classes.map((item, index) => (

                        <div
                            className="timetable-row"
                            key={index}
                        >

                            <span className="timetable-time">
                                {item[0]}
                            </span>

                            <div className="timetable-subject">
                                <strong>{item[1]}</strong>

                                {item[2] && (
                                    <span>{item[2]}</span>
                                )}
                            </div>

                        </div>

                    ))}

                </div>

            </section>

        </div>
    )
}

export default StudentTimetable