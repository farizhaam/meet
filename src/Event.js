import React, {Component} from "react";
import { Button} from 'react-bootstrap';
import {Collapse} from 'react-bootstrap';

class Event extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            collapsed: true
        };
    
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        // e.preventDefault();

        this.setState({
            collapsed: !this.state.collapsed,
        });
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
            <Collapse in={!this.state.collapsed}>
                <div className="info-details">
                    <p className="event-description">
                        {event.description}
                    </p>
                </div>
            </Collapse>
        </div>
    
        );
    }
}

export default Event;