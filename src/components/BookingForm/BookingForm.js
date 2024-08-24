import React, { Component } from 'react';
import axios from 'axios';
import './BookingForm.css'; // Import styles

class BookingForm extends Component {
    state = {
        mentors: [],
        selectedMentor: '',
        duration: 30,
        sessionTime: '',
        studentId: 1
    };

    componentDidMount() {
        this.fetchMentors();
    }

    fetchMentors = () => {
        axios.get('https://bbooksessionback.onrender.com/api/mentors')
            .then(response => this.setState({ mentors: response.data }))
            .catch(error => console.error('Error fetching mentors:', error));
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { studentId, selectedMentor, duration, sessionTime } = this.state;
        
        axios.post('https://bbooksessionback.onrender.com/api/sessions', {
            student_id: studentId,
            mentor_id: selectedMentor,
            duration: duration,
            session_time: sessionTime
        })
        .then(response => {
            alert('Session booked successfully!');
        })
        .catch(error => {
            console.error('Error booking session:', error);
        });
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSelectChange = (event) => {
        this.setState({ selectedMentor: event.target.value });
    };

    render() {
        const { mentors, selectedMentor, duration, sessionTime } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Book Session</h2>
                <label>
                    Select Mentor:
                    <select name="selectedMentor" value={selectedMentor} onChange={this.handleSelectChange} required>
                        <option value="">Select a mentor</option>
                        {mentors.map(mentor => (
                            <option key={mentor.id} value={mentor.id}>{mentor.name}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Duration:
                    <select name="duration" value={duration} onChange={this.handleChange} required>
                        <option value={30}>30 minutes</option>
                        <option value={45}>45 minutes</option>
                        <option value={60}>60 minutes</option>
                    </select>
                </label>
                <label>
                    Session Time:
                    <input type="datetime-local" name="sessionTime" value={sessionTime} onChange={this.handleChange} required />
                </label>
                <button type="submit">Book Session</button>
            </form>
        );
    }
}

export default BookingForm;
