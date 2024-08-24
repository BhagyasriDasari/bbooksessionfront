import React, { Component } from 'react';
import MentorList from '../components/MentorList/MentorList';
import BookingForm from '../components/BookingForm/BookingForm';
import './Schedule.css';

class Schedule extends Component {
  state = {
    selectedMentor: null,
    mentors: []
  };

  componentDidMount() {
    // Fetch available mentors
    fetch('https://bbooksessionback.onrender.com/api/mentors')
      .then(response => response.json())
      .then(data => this.setState({ mentors: data }))
      .catch(error => console.error('Error fetching mentors:', error));
  }

  handleMentorSelect = (mentor) => {
    this.setState({ selectedMentor: mentor });
  };

  render() {
    const { mentors, selectedMentor } = this.state;

    return (
      <div className="schedule-container">
        <h1>Schedule a Session</h1>
        <div className="mentor-list">
          <MentorList mentors={mentors} onSelect={this.handleMentorSelect} />
        </div>
        {selectedMentor && (
          <div className="booking-form">
            <BookingForm mentor={selectedMentor} />
          </div>
        )}
      </div>
    );
  }
}

export default Schedule;
