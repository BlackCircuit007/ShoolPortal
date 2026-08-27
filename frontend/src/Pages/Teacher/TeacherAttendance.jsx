import './TeacherAttendance.css'

function TeacherAttendance() {

    const classes = [
        {
            className: 'JSS 2A',
            subject: 'Mathematics',
            students: 31,
            present: 29,
            absent: 2,
            percentage: '94%'
        },
        {
            className: 'JSS 3A',
            subject: 'Mathematics',
            students: 29,
            present: 27,
            absent: 2,
            percentage: '93%'
        },
        {
            className: 'SS 1B',
            subject: 'Further Mathematics',
            students: 27,
            present: 26,
            absent: 1,
            percentage: '96%'
        }
    ]

    return (
        <div className="teacher-page">

            <div className="teacher-page-heading">

                <span>CLASS MANAGEMENT</span>

                <h1>Attendance</h1>

                <p>
                    Record and monitor attendance for your classes.
                </p>

            </div>


            <section className="teacher-attendance-card">

                <div className="teacher-attendance-header">

                    <div>
                        <h2>Today's Attendance</h2>

                        <p>
                            Attendance summary for today's classes.
                        </p>
                    </div>

                    <button className="record-attendance-button">
                        Record Attendance
                    </button>

                </div>


                <div className="teacher-attendance-list">

                    {classes.map((item, index) => (

                        <div
                            className="teacher-attendance-row"
                            key={index}
                        >

                            <div className="attendance-class">

                                <strong>
                                    {item.subject}
                                </strong>

                                <span>
                                    {item.className}
                                </span>

                            </div>


                            <div className="attendance-numbers">

                                <div>
                                    <span>Students</span>
                                    <strong>{item.students}</strong>
                                </div>

                                <div>
                                    <span>Present</span>
                                    <strong>{item.present}</strong>
                                </div>

                                <div>
                                    <span>Absent</span>
                                    <strong>{item.absent}</strong>
                                </div>

                                <div>
                                    <span>Rate</span>
                                    <strong>{item.percentage}</strong>
                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

        </div>
    )
}

export default TeacherAttendance