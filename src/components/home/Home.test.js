import React from 'react';
import Home from './Home';
import {shallow} from 'enzyme';

import {findElement} from '../../utils/test/testFunc'




describe('Testing Home Component', () => {

    const component = shallow(<Home />);

    test('Home should render without errors', ()=>{
        const comp = findElement(component, '.home_container')
        expect(comp).toBe(1)
    })
})