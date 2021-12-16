import React, {Component} from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import {WarningAlert} from './Alert';
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

  async componentDidMount() { 
    this.mounted = true; 
    const accessToken = localStorage.getItem('access_token'); 
    const isTokenValid = (await checkToken(accessToken)).error ? false : true; 
    const searchParams = new URLSearchParams(window.location.search); 
    const code = searchParams.get("code"); 
    this.setState({ showWelcomeScreen: !(code || isTokenValid) }); 
    if ((code || isTokenValid) && this.mounted) { 
      getEvents().then((events) => { 
        if (this.mounted) { 
          this.setState({events, locations: extractLocations(events)}); 
        } 
        if (!navigator.onLine) {
          this.setState({
            warningText: 'Network error, the events you are viewing may be out of date. To make sure you are viewing the latest information, make sure you are connected to the internet'
          });
          console.log("offline mode");
        } else {
          this.setState({ warningText: '' });
        };
      }); 
    } 
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
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />

    return (
      <div className="App">
        <h1 className="app-title">Meet App</h1>
        <h4 className="choose-city">Choose your nearest city</h4>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <p className="event-numbers">Number of events to display</p>
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEventsNumber={this.updateEventsNumber}/>
        <EventList events={this.state.events}/>
        <WarningAlert text={this.state.warningText} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => {getAccessToken()}}/>
      </div>
    );
  }
}

export default App;
