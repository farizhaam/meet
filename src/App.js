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
      console.log(events); //to verify that events is not undefined
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
        <h1 className="app-title">Meet App</h1><br/>
        
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEventsNumber={this.updateEventsNumber}/>
        <EventList events={this.state.events}/>

      </div>
    );
  }
}

export default App;
