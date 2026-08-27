import './StudentAcademic.css'

function StudentAcademics() {

    return (
        <div className="student-page">

            <div className="page-heading">

                <span>ACADEMICS</span>

                <h1>Academic Overview</h1>

                <p>
                    Track your academic performance across your subjects.
                </p>

            </div>


            <div className="academic-stats">

                <div className="academic-stat">
                    <span>Overall Average</span>
                    <strong>82%</strong>
                </div>

                <div className="academic-stat">
                    <span>Class Position</span>
                    <strong>8th</strong>
                </div>

                <div className="academic-stat">
                    <span>Subjects</span>
                    <strong>9</strong>
                </div>

            </div>


            <section className="academic-card">

                <div className="academic-card-heading">
                    <h2>Subject Performance</h2>

                    <p>
                        Your current performance by subject.
                    </p>
                </div>


                <div className="subject-list">

                    <div className="subject-row">
                        <span>Mathematics</span>
                        <strong>88%</strong>
                    </div>

                    <div className="subject-row">
                        <span>English Language</span>
                        <strong>84%</strong>
                    </div>

                    <div className="subject-row">
                        <span>Basic Science</span>
                        <strong>81%</strong>
                    </div>

                    <div className="subject-row">
                        <span>Social Studies</span>
                        <strong>79%</strong>
                    </div>

                    <div className="subject-row">
                        <span>Computer Studies</span>
                        <strong>86%</strong>
                    </div>

                </div>

            </section>

        </div>
    )
}

export default StudentAcademics