import React, {Component} from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import {getEvents, extractLocations} from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: "all",
    numberOfEvents: 32
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
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events}/>
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEventsNumber={this.updateEventsNumber}/>
      </div>
    );
  }
}

export default App;
