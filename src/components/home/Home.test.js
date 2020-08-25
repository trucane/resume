import React from 'react';
import Home from './Home';
import {shallow} from 'enzyme';

import {findElementWithCLass} from '../../utils/test/testFunc'




describe('Testing Home Component', () => {

    const component = shallow(<Home />);

    test('Home should render without errors', ()=>{
        const comp = findElementWithCLass(component, '.home_container')
        expect(comp).toBe(1)
    })


    test('should be true', () =>{
        const foo = true;
        expect(foo).toBeTruthy()
    })
})