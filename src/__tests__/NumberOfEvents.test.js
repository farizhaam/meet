import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => { 
    let NumberOfEventsWrapper, numberOfEvents;

    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={numberOfEvents}/>);
    });

    //test for rendering text input
    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.event-num')).toHaveLength(1);
    });

    //test for changing state when input changes
    test('change state when text input changes', () => {
        NumberOfEventsWrapper.setState({
            numberOfEvents :  32
        });
        const eventObject = {target: {value: 16 }};
        NumberOfEventsWrapper.find('.event-num').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(16);
    });
});
