import './TeacherClass.css'

function TeacherClass() {

    const classes = [
        {
            subject: 'Mathematics',
            className: 'JSS 2A',
            students: 31,
            time: '9:00 AM'
        },
        {
            subject: 'Mathematics',
            className: 'JSS 3A',
            students: 29,
            time: '11:00 AM'
        },
        {
            subject: 'Further Mathematics',
            className: 'SS 1B',
            students: 27,
            time: '2:00 PM'
        },
        {
            subject: 'Mathematics',
            className: 'SS 2A',
            students: 28,
            time: '10:00 AM'
        },
        {
            subject: 'Further Mathematics',
            className: 'SS 3A',
            students: 27,
            time: '1:00 PM'
        }
    ]

    return (
        <div className="teacher-page">

            <div className="teacher-page-heading">

                <span>TEACHING</span>

                <h1>My Classes</h1>

                <p>
                    View and manage the classes assigned to you.
                </p>

            </div>


            <section className="classes-card">

                <div className="classes-card-header">

                    <div>
                        <h2>Assigned Classes</h2>

                        <p>
                            Your current teaching schedule.
                        </p>
                    </div>

                </div>


                <div className="class-list">

                    {classes.map((item, index) => (

                        <div
                            className="teacher-class-row"
                            key={index}
                        >

                            <div className="class-main">

                                <strong>
                                    {item.subject}
                                </strong>

                                <span>
                                    {item.className}
                                </span>

                            </div>


                            <div className="class-details">

                                <span>
                                    {item.students} students
                                </span>

                                <strong>
                                    {item.time}
                                </strong>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

        </div>
    )
}

export default TeacherClass