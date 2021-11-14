import React, {Component, } from "react";
import { useState, useEffect } from React;
import { Button} from 'react-bootstrap';
import {Collapse} from 'react-bootstrap';

class Event extends Component {
    state = {
        collapsed: true,
    };
    
    handleItemClick = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    const [open, setOpen] = useState(false);
    render() {
        const { events } = this.props;
        const { collapsed } = this.state;
        return (
            <div className="Event">
                <h2 className="summary">{events.summary}</h2>
                <p className="start-date">
                    {events.start.dateTime} ({events.start.timeZone})
                </p>
                <p className="end-date">
                    {events.end.dateTime} ({events.end.timeZone})
                </p>
                <p className="location">
                    {events.location}
                </p>
                <Button variant="primary" className="details" onClick={this.handleItemClick}>
                    Toggle details
                </Button>
            </div>
        );
    }
}

export default Event;