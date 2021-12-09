import React, {Component} from "react";
import { Button} from 'react-bootstrap';


class Event extends Component {
    
<<<<<<< HEAD
    state = {
        collapsed: true,
    };
=======
    constructor(props) {
        super(props);
    
        this.state = {
            collapsed: true
        };
    
        this.handleClick = this.handleClick.bind(this);
    }
    //   state = {
    //     collapsed: true,
    // };

    handleClick(e) {
        // e.preventDefault();
>>>>>>> parent of 6af30af (toggle details not working)

    handleClick = () => {
        if (this.state.collapsed === true) {
            this.setState({ collapsed: false });
            } else {
                this.setState({ collapsed: true});
            }
    };

    render() {
    const { event } = this.props;
    return (
        <div className="event">
            <h2 className="summary">{event.summary}</h2>
            <p className="start-date">
                {event.start.dateTime} ({event.start.timeZone})
            </p><p className="end-date">
                {event.end.dateTime} ({event.end.timeZone})
            </p>
            <p className="location">
                {event.location}
            </p>

            <Button variant="primary" className="toggle-details" onClick={this.handleClick}>
                Toggle details
            </Button>
            {this.state.collapsed === false && (
                    <p className="info-details">{event.description}</p>
            )}

        </div>
    
        );
    }
}

export default Event;