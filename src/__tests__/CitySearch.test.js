import React from "react";
import {shallow} from 'enzyme';
import CitySearch from "../CitySearch";
import {mockData} from "../mockData";
import {extractLocations} from './api';

describe('<CitySearch /> component', () => {

    let CitySearchWrapper;
    beforeAll(() => {
        CitySearchWrapper = shallow(<CitySearch />);
    });
    //test for rendering text input
    test('render text input', () => {
        expect(CitySearchWrapper.find('.city')).toHaveLength(1);
    });

    //test for rendering of a list of city suggestions
    test('render a list of suggestions', () => {
        expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
    });

    //test for correct text input
    test('renders text input correctly', () => {
        const query = CitySearchWrapper.state('query');
        expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
    });

    //test for changing state when input changes
    test('change state when text input changes', () => {
        CitySearchWrapper.setState({
            query: 'Munich'
        });
        const eventObject = {target: {value: 'Berlin'}};
        CitySearchWrapper.find('.city').simulate('change', eventObject);
        expect(CitySearchWrapper.state('query')).toBe('Berlin');
    });

    //
    test('render list of suggestions correctly', () => {
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({suggestions: locations});
        const suggestions = CitySearchWrapper.state('suggestions');
        expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
        for (let i = 0; i < suggestions.length; i+= 1) {
            expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
        }
    });
})