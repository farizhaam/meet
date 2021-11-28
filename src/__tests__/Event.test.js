import React from "react";
import {shallow} from 'enzyme';
import Event from '../Event';
import {mockData} from '../mock-data';

describe('<Event /> component', () => {
    let EventWrapper;
    
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[0]}/>);
    });


    test('render element collapsed by default', () => {
        EventWrapper.setState({
            collapsed: true
        })
        expect(EventWrapper.state("collapsed")).toBe(true);
    });

    test('render event summary correctly', () => {
        expect(EventWrapper.find(".summary")).toHaveLength(1);
    });

    test('render event start date correctly', () => {
        expect(EventWrapper.find(".start-date")).toHaveLength(1);
    });

    test('render event end date correctly', () => {
        expect(EventWrapper.find(".end-date")).toHaveLength(1);
    });

    test('render event location correctly', () => {
        expect(EventWrapper.find(".location")).toHaveLength(1);
    });

    test('render toggle details button correctly', () => {
        expect(EventWrapper.find(".toggle-details")).toHaveLength(1);
    });

    test('render change the state of toggle details button when clicked', () => {
        EventWrapper.find('.toggle-details').simulate('click');
        expect(EventWrapper.state("collapsed")).toBe(false);
    });

    test('render details correctly when the collapsed state is false', () => {
        EventWrapper.setState({
            collapsed: false,
        });
        expect(EventWrapper.find(".info-details")).toHaveLength(1);
    });
});