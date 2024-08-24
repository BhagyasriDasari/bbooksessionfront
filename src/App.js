import React, { Component } from 'react';
import BookingForm from './components/BookingForm/BookingForm';
import MentorList from './components/MentorList/MentorList';
import './App.css'; 

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Book a Schedule</h1>
                <MentorList />
                <BookingForm />
            </div>
        );
    }
}

export default App;
