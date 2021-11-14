import React from "react";
import {shallow} from 'enzyme';
import Event from '../Event';
import {mockData} from '../mock-data';

describe('<Event /> component', () => {
    let EventWrapper;
    
    beforeAll(() => {
        EventWrapper = shallow(<Event/>);
    });


    test('verify wheteher all necessary elements have been rendered', () => {
        const EventWrapper = shallow(<Event events={mockData} />);
        expect(EventWrapper.find(Event)).toHaveLength(mockData.length);
    });
});