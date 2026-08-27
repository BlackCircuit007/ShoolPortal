import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {

    const navigate = useNavigate()

    const [userRole, setUserRole] = useState('Student')
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function handleRoleChange(role) {
        setUserRole(role)
        setError('')
    }

    function handleSubmit(event) {

        event.preventDefault()

        setError('')

        if (!userId.trim() || !password.trim()) {
            setError('Please enter your ID and password.')
            return
        }

        if (userRole === 'Student') {
            navigate('/student')
        } else {
            navigate('/teacher')
        }
    }

    return (
        <main className="login-page">

            <div className="login-container">

                {/* BRAND */}

                <div className="login-brand">

                    <h1>
                        EduPortal
                    </h1>

                    <span>
                        School Portal
                    </span>

                </div>


                {/* LOGIN CARD */}

                <div className="login-card">

                    {/* HEADING */}

                    <div className="login-heading">

                        <span>
                            WELCOME BACK
                        </span>

                        <h2>
                            Sign in to your account
                        </h2>

                        <p>
                            Access your school portal and
                            continue where you left off.
                        </p>

                    </div>


                    {/* ROLE SELECTOR */}

                    <div className="role-selector">

                        <button
                            type="button"
                            className={
                                userRole === 'Student'
                                    ? 'role-button active'
                                    : 'role-button'
                            }
                            onClick={() =>
                                handleRoleChange('Student')
                            }
                        >
                            Student
                        </button>


                        <button
                            type="button"
                            className={
                                userRole === 'Teacher'
                                    ? 'role-button active'
                                    : 'role-button'
                            }
                            onClick={() =>
                                handleRoleChange('Teacher')
                            }
                        >
                            Teacher
                        </button>

                    </div>


                    {/* FORM */}

                    <form
                        className="login-form"
                        onSubmit={handleSubmit}
                    >

                        {/* ID */}

                        <div className="form-group">

                            <label htmlFor="user-id">
                                {userRole} ID
                            </label>

                            <input
                                id="user-id"
                                type="text"
                                value={userId}
                                onChange={(event) =>
                                    setUserId(event.target.value)
                                }
                                placeholder={
                                    userRole === 'Student'
                                        ? 'Enter your student ID'
                                        : 'Enter your teacher ID'
                                }
                                autoComplete="username"
                            />

                        </div>


                        {/* PASSWORD */}

                        <div className="form-group">

                            <label htmlFor="password">
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                placeholder="Enter your password"
                                autoComplete="current-password"
                            />

                        </div>


                        {/* ERROR */}

                        {error && (
                            <p className="login-error">
                                {error}
                            </p>
                        )}


                        {/* OPTIONS */}

                        <div className="login-options">

                            <label className="remember-me">

                                <input
                                    type="checkbox"
                                />

                                <span>
                                    Remember me
                                </span>

                            </label>


                            <Link to="/forgot-password">
                                Forgot password?
                            </Link>

                        </div>


                        {/* SUBMIT */}

                        <button
                            type="submit"
                            className="login-button"
                        >
                            Sign in as {userRole}
                        </button>

                    </form>


                    {/* FOOTER */}

                    <div className="login-footer">

                        <span>
                            Need help accessing your account?
                        </span>

                        <a href="mailto:school@example.com">
                            Contact your school
                        </a>

                    </div>

                </div>


                {/* BACK HOME */}

                <Link
                    to="/"
                    className="back-home"
                >
                    ← Back to home
                </Link>

            </div>

        </main>
    )
}

export default Login