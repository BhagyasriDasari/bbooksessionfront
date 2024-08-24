import React, { Component } from 'react';
import axios from 'axios';
import './MentorList.css'; // Import styles

class MentorList extends Component {
    state = {
        areaOfExpertise: '',
        mentors: [],
        error: '',
    };

    handleChange = (event) => {
        this.setState({ areaOfExpertise: event.target.value });
    };

    handleSearch = () => {
        const { areaOfExpertise } = this.state;
        console.log('Searching for area of expertise:', areaOfExpertise); // Add this line
        axios
            .get(`https://bbooksessionback.onrender.com/api/mentors?area_of_expertise=${areaOfExpertise}`)
            .then((response) => {
                console.log('Fetched mentors:', response.data); // Check what is returned
                this.setState({ mentors: response.data, error: '' });
            })
            .catch((error) => {
                console.error('Error fetching mentors:', error);
                this.setState({ error: 'Error fetching mentors.' });
            });
    };

    render() {
        const { areaOfExpertise, mentors, error } = this.state;

        return (
            <div className="mentor-list-container">
                <h2>Find a Mentor</h2>
                <label>
                    Area of Expertise:
                    <input type="text" value={areaOfExpertise} onChange={this.handleChange} />
                </label>
                <button type="button" onClick={this.handleSearch}>
                    Search
                </button>

                {error && <p className="error-message">{error}</p>} {/* Display error if any */}

                <ul>
                    {mentors.length > 0 ? (
                        mentors.map((mentor) => (
                            <li key={mentor.id}>
                                {mentor.name} - {mentor.area_of_expertise}
                            </li>
                        ))
                    ) : (
                        <li>No mentors found.</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default MentorList;
