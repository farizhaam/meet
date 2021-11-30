import React, {Component} from 'react';
import {ErrorAlert} from './Alert';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        infoText: '',
    }
    
    handleInputChanged = (event) => {
        const value = event.target.value;
        if ((value <= 0) || (value > 32)) {
            this.setState({
                infoText: 'Select number from 1 to 32',
            });
        } else {
            this.setState({
                numberOfEvents: value,
                infoText: '',
            });
        }
    };

    render() {
        return <div className="numberOfEvents">
            <ErrorAlert text={this.state.infoText} />
            <input
                    type="number"
                    className="event-num"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                />
        </div>
    }
}

export default NumberOfEvents;