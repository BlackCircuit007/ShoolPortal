import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ForgotPassword.css'

function ForgotPassword() {

    const navigate = useNavigate()

    const [userRole, setUserRole] = useState('Student')
    const [userId, setUserId] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(event) {

        event.preventDefault()

        if (!userId.trim()) {
            return
        }

        setSubmitted(true)
    }

    return (
        <div className="forgot-page">

            <div className="forgot-container">

                <div className="forgot-brand">

                    <h1>
                        EduPortal
                    </h1>

                    <span>
                        School Portal
                    </span>

                </div>


                <div className="forgot-card">

                    {!submitted ? (

                        <>

                            <div className="forgot-heading">

                                <span>
                                    ACCOUNT RECOVERY
                                </span>

                                <h2>
                                    Forgot your password?
                                </h2>

                                <p>
                                    Enter your school ID and we'll
                                    help you recover your account.
                                </p>

                            </div>


                            <div className="forgot-role-selector">

                                <button
                                    type="button"
                                    className={
                                        userRole === 'Student'
                                            ? 'forgot-role active'
                                            : 'forgot-role'
                                    }
                                    onClick={() =>
                                        setUserRole('Student')
                                    }
                                >
                                    Student
                                </button>


                                <button
                                    type="button"
                                    className={
                                        userRole === 'Teacher'
                                            ? 'forgot-role active'
                                            : 'forgot-role'
                                    }
                                    onClick={() =>
                                        setUserRole('Teacher')
                                    }
                                >
                                    Teacher
                                </button>

                            </div>


                            <form
                                className="forgot-form"
                                onSubmit={handleSubmit}
                            >

                                <div className="forgot-form-group">

                                    <label>
                                        {userRole} ID
                                    </label>

                                    <input
                                        type="text"
                                        placeholder={
                                            userRole === 'Student'
                                                ? 'Enter your student ID'
                                                : 'Enter your teacher ID'
                                        }
                                        value={userId}
                                        onChange={(event) =>
                                            setUserId(event.target.value)
                                        }
                                    />

                                </div>


                                <button
                                    type="submit"
                                    className="forgot-button"
                                >
                                    Continue
                                </button>

                            </form>


                            <button
                                className="back-login"
                                onClick={() => navigate('/login')}
                            >
                                ← Back to login
                            </button>

                        </>

                    ) : (

                        <div className="forgot-success">

                            <span className="success-label">
                                REQUEST RECEIVED
                            </span>

                            <h2>
                                Contact your school
                            </h2>

                            <p>
                                Your password recovery request has
                                been received. Please contact your
                                school administrator to reset your
                                account password.
                            </p>

                            <button
                                className="forgot-button"
                                onClick={() => navigate('/login')}
                            >
                                Return to login
                            </button>

                        </div>

                    )}

                </div>

            </div>

        </div>
    )
}

export default ForgotPassword