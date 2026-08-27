import { Link } from 'react-router-dom'
import './LandingPage.css'
import hero from '../assets/hero.jpg'
import student from '../assets/student.jpg'
import teacher from '../assets/teacher.jpg'
function LandingPage() {
    return (
        <div className="landing-page">

            {/* NAVBAR */}

            <header className="landing-header">

                <a href="#home" className="landing-logo">
                    <h2>EduPortal</h2>
                    <span>School Portal</span>
                </a>

                <nav className="landing-nav">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#students">Students</a>
                    <a href="#teachers">Teachers</a>
                    <a href="#about">About</a>
                </nav>

                <Link to="/login" className="landing-login">
                    Login
                </Link>

            </header>


            <main>

                {/* HERO */}

                <section className="hero" id="home">

    <div className="hero-content">

        <span className="hero-label">
            YOUR SCHOOL. ONE PLATFORM.
        </span>

        <h1>
            A smarter way to
            experience school.
        </h1>

        <p>
            EduPortal brings students, teachers,
            and academic activities together in one
            simple and organized digital platform.
        </p>

        <div className="hero-actions">

            <Link
                to="/login"
                className="hero-button primary"
            >
                Access Student Portal
            </Link>

            <Link
                to="/login"
                className="hero-button secondary"
            >
                Access Teacher Portal
            </Link>

        </div>

    </div>


    <div className="hero-image">

        <div className="image-placeholder">
            {/* <span>School Image</span> */}
            <small>
                <img src={hero} className='image-placeholder'/>
            </small>
        </div>

    </div>

</section>

                {/* PLATFORM OVERVIEW */}

                <section className="overview">

                    <div className="section-heading">

                        <span>
                            ONE CONNECTED PLATFORM
                        </span>

                        <h2>
                            Everything your school needs
                        </h2>

                        <p>
                            From everyday academic activities to
                            communication and student progress,
                            EduPortal keeps everything organized.
                        </p>

                    </div>


                    <div className="overview-grid">

                        <div className="overview-item">
                            <strong>Students</strong>
                            <span>
                                Learn, track progress and stay
                                connected with school activities.
                            </span>
                        </div>

                        <div className="overview-item">
                            <strong>Teachers</strong>
                            <span>
                                Manage classes, assignments,
                                attendance and results.
                            </span>
                        </div>

                        <div className="overview-item">
                            <strong>Academics</strong>
                            <span>
                                Keep academic information organized
                                and accessible.
                            </span>
                        </div>

                        <div className="overview-item">
                            <strong>Communication</strong>
                            <span>
                                Keep the school community informed
                                with important announcements.
                            </span>
                        </div>

                    </div>

                </section>


                {/* STUDENTS */}

                <section className="role-section" id="students">

    <div className="role-image">

        <div className="image-placeholder">
            {/* <span>Student Image</span> */}
            <small>
                <img src={student} className='image-placeholder'/>
            </small>
        </div>

    </div>


    <div className="role-content">

        <span className="section-label">
            FOR STUDENTS
        </span>

        <h2>
            Stay on top of your
            academic journey.
        </h2>

        <p>
            Students can access the information they
            need without having to search through
            different systems.
        </p>

        <div className="role-list">

            <span>View your timetable</span>
            <span>Track assignments</span>
            <span>Check attendance</span>
            <span>View academic results</span>
            <span>Receive school announcements</span>

        </div>

    </div>

</section>

                {/* TEACHERS */}

                <section
    className="role-section teacher-section"
    id="teachers"
>

    <div className="role-content">

        <span className="section-label">
            FOR TEACHERS
        </span>

        <h2>
            Everything you need
            to manage your classes.
        </h2>

        <p>
            Teachers can manage everyday classroom
            responsibilities from one organized
            workspace.
        </p>

        <div className="role-list">

            <span>Manage your classes</span>
            <span>Record attendance</span>
            <span>Create assignments</span>
            <span>Enter student results</span>
            <span>Communicate important updates</span>

        </div>

    </div>


    <div className="role-image">

        <div className="image-placeholder">
            {/* <span>Teacher Image</span> */}
            <small>
                <img src={teacher} className='image-placeholder' />
            </small>
        </div>

    </div>

</section>


                {/* HOW IT WORKS */}

                <section className="how-section">

                    <div className="section-heading">

                        <span>
                            HOW IT WORKS
                        </span>

                        <h2>
                            Simple from the moment you sign in.
                        </h2>

                    </div>


                    <div className="steps">

                        <div className="step">

                            <div className="step-number">
                                01
                            </div>

                            <h3>
                                Sign in
                            </h3>

                            <p>
                                Access the portal using your school
                                account.
                            </p>

                        </div>


                        <div className="step">

                            <div className="step-number">
                                02
                            </div>

                            <h3>
                                Access your workspace
                            </h3>

                            <p>
                                Your dashboard shows the information
                                relevant to your role.
                            </p>

                        </div>


                        <div className="step">

                            <div className="step-number">
                                03
                            </div>

                            <h3>
                                Stay connected
                            </h3>

                            <p>
                                Manage academic activities and stay
                                updated throughout the school year.
                            </p>

                        </div>

                    </div>

                </section>


                {/* FEATURES */}

                <section
                    className="landing-features"
                    id="features"
                >

                    <div className="section-heading">

                        <span>
                            PLATFORM FEATURES
                        </span>

                        <h2>
                            Designed around school life.
                        </h2>

                        <p>
                            The tools students and teachers use
                            throughout the academic year.
                        </p>

                    </div>


                    <div className="feature-grid">

                        <div className="feature-card">
                            <h3>Timetable</h3>
                            <p>
                                Keep track of classes and daily
                                schedules.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>Assignments</h3>
                            <p>
                                Organize coursework and keep track
                                of upcoming work.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>Attendance</h3>
                            <p>
                                Keep accurate records of attendance
                                throughout the term.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>Results</h3>
                            <p>
                                Record, manage and view academic
                                performance.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>Announcements</h3>
                            <p>
                                Share important information with
                                the school community.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>Profiles</h3>
                            <p>
                                Keep important student and teacher
                                information organized.
                            </p>
                        </div>

                    </div>

                </section>


                {/* ABOUT */}

                <section
                    className="landing-about"
                    id="about"
                >

                    <div>

                        <span className="section-label">
                            ABOUT EDUPORTAL
                        </span>

                        <h2>
                            Bringing the school
                            community together.
                        </h2>

                        <p>
                            EduPortal is designed to make everyday
                            school activities easier to manage,
                            easier to access and easier to understand.
                        </p>

                    </div>

                </section>


                {/* CTA */}

                <section className="landing-cta">

                    <div>

                        <span>
                            READY TO GET STARTED?
                        </span>

                        <h2>
                            Your school experience,
                            all in one place.
                        </h2>

                        <a href="#">
                            Sign in to EduPortal
                        </a>

                    </div>

                </section>

            </main>


            {/* FOOTER */}

            <footer className="landing-footer">

                <div>
                    <strong>EduPortal</strong>
                    <span>School Management Portal</span>
                </div>

                <div>
                    <span>© 2026 EduPortal</span>
                </div>

            </footer>

        </div>
    )
}

export default LandingPage