import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './index'

Enzyme.configure({adapter: new Adapter()})

describe('Header component', () => {

    it('It should render a header', () => {
        const component = shallow(<Header />);
        const element = component.find("header");
        expect(element.length).toBe(1)
    })

});