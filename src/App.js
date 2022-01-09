import React, {Component} from 'react';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
// import EventGenre from './EventGenre';
import WelcomeScreen from './WelcomeScreen';
import {WarningAlert} from './Alert';
import {getEvents, extractLocations, checkToken, getAccessToken} from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: "all",
    numberOfEvents: 32, 
    showWelcomeScreen: undefined
  }

  // componentDidMount() {
  //   this.mounted = true;
  //   getEvents().then((events) => {
  //     if(this.mounted) {
  //       this.setState({events, locations: extractLocations(events)});
  //     }
  //   });
  // }

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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

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
        <div className="data-vis-wrapper">
          
          {/* <EventGenre events={this.state.events}/> */}
          <ResponsiveContainer height={400} >
            <h4>Events in each city</h4>
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
        </div>
        
        <EventList events={this.state.events}/>
        <WarningAlert text={this.state.warningText} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => {getAccessToken()}}/>
      </div>
    );
  }
}

export default App;
