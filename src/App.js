import React, {Component} from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import {getEvents, extractLocations, checkToken, getAccessToken} from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: "all",
    numberOfEvents: 32, 
    showWelcomeScreen: undefined
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if(this.mounted) {
        this.setState({events, locations: extractLocations(events)});
      }
    });
  }

  updateEvents = (location, eventCount) => {
      getEvents().then((events) => {
        const locationEvents = (location === 'all') ? 
          events :
          events.filter((event) => event.location === location);
        
          const shownEvents = locationEvents.slice(0, eventCount);

        this.setState({
          events: shownEvents,
          currentLocation: location
        });
      });
    }

  updateEventsNumber = (eventCount) => {
    const newValue = parseInt(eventCount.target.value);

    this.setState({
      numberOfEvents: newValue
    });
    this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Meet App</h1>
        <h4 className="choose-city">Choose your nearest city</h4>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <p className="event-numbers">Number of events to display</p>
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEventsNumber={this.updateEventsNumber}/>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;
