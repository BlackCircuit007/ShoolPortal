import { useState } from 'react'
import './AdminNotifications.css'

function AdminNotifications() {

    const [recipient, setRecipient] = useState('')

    const [message, setMessage] = useState('')

    const [sent, setSent] = useState(false)


    const handleSubmit = (event) => {

        event.preventDefault()

        if (!recipient || !message.trim()) {
            return
        }

        setSent(true)

        setMessage('')
        setRecipient('')

        setTimeout(() => {
            setSent(false)
        }, 2000)
    }


    return (
        <div className="admin-page">

            <div className="admin-page-header">

                <div>
                    <span>COMMUNICATION</span>

                    <h1>
                        Notifications
                    </h1>

                    <p>
                        Send notifications to students, teachers or staff.
                    </p>
                </div>

            </div>


            <div className="admin-notification-card">

                {sent ? (

                    <div className="admin-notification-success">

                        <div>
                            ✓
                        </div>

                        <h2>
                            Notification sent
                        </h2>

                        <p>
                            Your notification has been sent successfully.
                        </p>

                    </div>

                ) : (

                    <form onSubmit={handleSubmit}>

                        <div className="admin-form-group">

                            <label>
                                Send to
                            </label>

                            <select
                                value={recipient}
                                onChange={(event) =>
                                    setRecipient(event.target.value)
                                }
                            >

                                <option value="">
                                    Select recipients
                                </option>

                                <optgroup label="Students">

                                    <option value="ALL_STUDENTS">
                                        All Students
                                    </option>

                                    <option value="ALL_JSS">
                                        All JSS Students
                                    </option>

                                    <option value="ALL_SS">
                                        All SS Students
                                    </option>

                                    <option value="JSS_1">
                                        JSS 1
                                    </option>

                                    <option value="JSS_2">
                                        JSS 2
                                    </option>

                                    <option value="JSS_3">
                                        JSS 3
                                    </option>

                                    <option value="SS_1">
                                        SS 1
                                    </option>

                                    <option value="SS_2">
                                        SS 2
                                    </option>

                                    <option value="SS_3">
                                        SS 3
                                    </option>

                                </optgroup>


                                <optgroup label="Teachers">

                                    <option value="ALL_TEACHERS">
                                        All Teachers
                                    </option>

                                </optgroup>


                                <optgroup label="Staff">

                                    <option value="ALL_STAFF">
                                        All Staff
                                    </option>

                                </optgroup>


                                <optgroup label="Everyone">

                                    <option value="EVERYONE">
                                        Everyone
                                    </option>

                                </optgroup>

                            </select>

                        </div>


                        <div className="admin-form-group">

                            <label>
                                Message
                            </label>

                            <textarea
                                value={message}
                                onChange={(event) =>
                                    setMessage(event.target.value)
                                }
                                placeholder="Write your notification..."
                                rows="7"
                            />

                        </div>


                        <button
                            type="submit"
                            disabled={
                                !recipient ||
                                !message.trim()
                            }
                        >
                            Send Notification
                        </button>

                    </form>

                )}

            </div>

        </div>
    )
}

export default AdminNotifications