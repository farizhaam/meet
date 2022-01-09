import React from 'react';
import { loadFeature, defineFeature } from "jest-cucumber";
import NumberOfEvents from "../NumberOfEvents";
import { shallow } from 'enzyme';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user has not specified a number, 32 is the default number', ({ given, when, then }) => {

        given('the user is on the main page', () => {

        });

    
        when('the user does not specify number of events', () => {

        });
        
        let NumberOfEventsWrapper;
        then('the user should see 32 events by default', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents />);
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        

        given('the user has searched for events', () => {

        });

        let NumberOfEventsWrapper;
        when('the user specifies the number of events to see', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents />);
            NumberOfEventsWrapper.setState({ numberOfEvents: 16 })

        });

        then('the user should see the specified number of events', () => {
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(16);
        });
    });
});