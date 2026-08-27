import './AdminClasses.css'

function AdminClasses() {

    const classes = [
        ['JSS 1A', 'Junior Secondary', '38'],
        ['JSS 1B', 'Junior Secondary', '40'],
        ['JSS 2A', 'Junior Secondary', '42'],
        ['JSS 2B', 'Junior Secondary', '39'],
        ['JSS 3A', 'Junior Secondary', '41'],
        ['JSS 3B', 'Junior Secondary', '40'],
        ['SS 1A', 'Senior Secondary', '36'],
        ['SS 1B', 'Senior Secondary', '38'],
        ['SS 2A', 'Senior Secondary', '37'],
        ['SS 2B', 'Senior Secondary', '39'],
        ['SS 3A', 'Senior Secondary', '35'],
        ['SS 3B', 'Senior Secondary', '36']
    ]

    return (
        <div className="admin-page">

            <div className="admin-page-header">

                <div>
                    <span>ADMINISTRATION</span>

                    <h1>Classes</h1>

                    <p>
                        Manage school classes and student enrollment.
                    </p>
                </div>

                <button>
                    Create Class
                </button>

            </div>


            <div className="class-management-grid">

                {classes.map((item) => (

                    <div
                        className="class-management-card"
                        key={item[0]}
                    >

                        <span>
                            {item[1]}
                        </span>

                        <h2>
                            {item[0]}
                        </h2>

                        <p>
                            {item[2]} students
                        </p>

                        <button>
                            Manage Class
                        </button>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default AdminClasses