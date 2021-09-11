import React from 'react';

import MainNav from './MainNav';
import {shallow} from 'enzyme';
import {findElement, findElementText} from '../../utils/test/testFunc';




describe('Testing Main Navigation', ()=>{

    const component = shallow(<MainNav />)


    test('Main nav should render without error', ()=>{
        const wrapper = findElement(component, 'nav')
        expect(wrapper).toBe(1)
    })

    //check for App Navigation Logo

    describe('Testing Main Navigation logo', () => {

        const value = 'logo'

        test('Main Nav logo should exist', ()=>{
            const wrapper = findElement(component, `.${value}`)
            expect(wrapper).toBe(1)
        })
    
        test('Main Nav logo text should be', ()=>{
            const text = findElementText(component, `.${value}`)
            expect(text.text()).toBe(value)
        })
    })


    

    //check for Navigation Menu items
    describe('Testing Main Navigation Menu items', () => {

        const Home = 'Home';
        const About = 'About';

        //check for links
        describe('Checking all Links for MainNav exists', ()=>{
            test('Home link should exist', ()=>{
                const link = findElement(component, `[data-test='${Home}']`)
                expect(link).toBe(1)
            })
        
            test('Home link should exist', ()=>{
                const link = findElement(component, `[data-test='${About}']`)
                expect(link).toBe(1)
            })
        })

        //check for link text
        describe('Checking all Links text match', () =>{
            test('Home link text should be', ()=>{
                const text = findElementText(component, `[data-test='${Home}']`)
                expect(text.text()).toBe(Home)
            })

            test('About link text should be', ()=>{
                const text = findElementText(component, `[data-test='${About}']`)
                expect(text.text()).toBe(About)
            })
        })
    })


    describe('Testing MainNav Responsiveness', ()=>{

        const Menu = 'Burger'
        
        //Burger Icon should exist
        test('BurgerButton should exist', ()=>{
            const button = findElement(component, `[data-test='${Menu}']`);
            expect(button).toBe(1);

        })

        //test for button structure
        test('BurgerButton structure should contain', ()=>{
            const structure = component.find(`[data-test='${Menu}'] div`)
            expect(structure.length).toBe(3)
        })

        //test for showing menu on mobile view

        test('', ()=>{
            let mobileview = false;
            const burger = component.find(`[data-test='${Menu}'] div`);
            burger.simulate('click')
        })
    })


})