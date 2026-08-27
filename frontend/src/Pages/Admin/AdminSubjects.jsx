import './AdminSubjects.css'

function AdminSubjects() {

    const subjects = [
        'Mathematics',
        'English Language',
        'Physics',
        'Chemistry',
        'Biology',
        'Economics',
        'Government',
        'Computer Science',
        'Geography',
        'Further Mathematics'
    ]

    return (
        <div className="admin-page">

            <div className="admin-page-header">

                <div>
                    <span>ACADEMICS</span>

                    <h1>
                        Subjects
                    </h1>

                    <p>
                        Manage subjects offered by the school.
                    </p>
                </div>

                <button>
                    Add Subject
                </button>

            </div>


            <div className="subject-grid">

                {subjects.map((subject) => (

                    <div
                        className="subject-card"
                        key={subject}
                    >

                        <h2>
                            {subject}
                        </h2>

                        <p>
                            Active subject
                        </p>

                        <button>
                            Manage
                        </button>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default AdminSubjects