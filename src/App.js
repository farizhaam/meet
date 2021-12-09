import React, {Component} from 'react';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

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
    const { locations, numberOfEvents, events } = this.state;
    return (
      <div className="App">
        <h1>Meet App</h1><br/>

        <h4>Choose your nearest city</h4>
        <CitySearch updateEvents={this.updateEvents} locations={locations} /><br/>

        <h4>Select the number events to display</h4>
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={numberOfEvents} /> <br/>     
        
        <h4>Events in each city</h4>
        <ResponsiveContainer height={300} >
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="city" />
            <YAxis
              allowDecimals={false}
              type="number"
              dataKey="number"
              name="number of events"
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={events} />

      </div>
    );
  }
}

export default App;
