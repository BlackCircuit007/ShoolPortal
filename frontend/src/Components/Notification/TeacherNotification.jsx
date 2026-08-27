import { useState } from 'react'
import './TeacherNotification.css'

function TeacherNotification() {

    const [isOpen, setIsOpen] = useState(false)

    const [selectedClass, setSelectedClass] = useState('')

    const [message, setMessage] = useState('')

    const [sent, setSent] = useState(false)


    const handleSend = (event) => {

        event.preventDefault()

        if (!selectedClass || !message.trim()) {
            return
        }

        setSent(true)

        setMessage('')
        setSelectedClass('')

        setTimeout(() => {
            setSent(false)
            setIsOpen(false)
        }, 1500)
    }


    return (
        <div className="teacher-notification">

            {/* NOTIFICATION BUTTON */}

            <button
                className="notification-btn"
                onClick={() => setIsOpen(true)}
            >
                Notifications
            </button>


            {/* NOTIFICATION PANEL */}

            {isOpen && (

                <div
                    className="notification-overlay"
                    onClick={(event) => {

                        if (
                            event.target ===
                            event.currentTarget
                        ) {
                            setIsOpen(false)
                        }

                    }}
                >

                    <div className="notification-panel">


                        {/* HEADER */}

                        <div className="notification-header">

                            <div>

                                <span className="notification-label">
                                    TEACHER
                                </span>

                                <h2>
                                    Send Notification
                                </h2>

                                <p>
                                    Send a message to your students.
                                </p>

                            </div>


                            <button
                                className="notification-close"
                                onClick={() =>
                                    setIsOpen(false)
                                }
                            >
                                ×
                            </button>

                        </div>


                        {/* SUCCESS */}

                        {sent ? (

                            <div className="notification-success">

                                <div className="success-icon">
                                    ✓
                                </div>

                                <h3>
                                    Notification sent
                                </h3>

                                <p>
                                    Your message has been sent successfully.
                                </p>

                            </div>

                        ) : (

                            /* FORM */

                            <form
                                className="notification-form"
                                onSubmit={handleSend}
                            >

                                {/* RECIPIENT */}

                                <div className="notification-form-group">

                                    <label>
                                        Send to
                                    </label>


                                    <select
                                        value={selectedClass}
                                        onChange={(event) =>
                                            setSelectedClass(
                                                event.target.value
                                            )
                                        }
                                    >

                                        <option value="">
                                            Select recipients
                                        </option>


                                        <optgroup label="Junior Secondary">

                                            <option value="JSS 1">
                                                JSS 1 — All Students
                                            </option>

                                            <option value="JSS 2">
                                                JSS 2 — All Students
                                            </option>

                                            <option value="JSS 3">
                                                JSS 3 — All Students
                                            </option>

                                            <option value="ALL_JSS">
                                                All JSS Students
                                            </option>

                                        </optgroup>


                                        <optgroup label="Senior Secondary">

                                            <option value="SS 1">
                                                SS 1 — All Students
                                            </option>

                                            <option value="SS 2">
                                                SS 2 — All Students
                                            </option>

                                            <option value="SS 3">
                                                SS 3 — All Students
                                            </option>

                                            <option value="ALL_SS">
                                                All SS Students
                                            </option>

                                        </optgroup>


                                        <optgroup label="Everyone">

                                            <option value="ALL_STUDENTS">
                                                All Students
                                            </option>

                                        </optgroup>

                                    </select>

                                </div>


                                {/* MESSAGE */}

                                <div className="notification-form-group">

                                    <label>
                                        Message
                                    </label>

                                    <textarea
                                        value={message}
                                        onChange={(event) =>
                                            setMessage(
                                                event.target.value
                                            )
                                        }
                                        placeholder="Write your notification..."
                                        rows="5"
                                    />

                                </div>


                                {/* ACTIONS */}

                                <div className="notification-actions">

                                    <button
                                        type="button"
                                        className="notification-cancel"
                                        onClick={() =>
                                            setIsOpen(false)
                                        }
                                    >
                                        Cancel
                                    </button>


                                    <button
                                        type="submit"
                                        className="notification-send"
                                        disabled={
                                            !selectedClass ||
                                            !message.trim()
                                        }
                                    >
                                        Send Notification
                                    </button>

                                </div>

                            </form>

                        )}

                    </div>

                </div>

            )}

        </div>
    )
}

export default TeacherNotification