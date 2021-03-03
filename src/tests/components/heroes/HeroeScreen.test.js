import React, { Component } from 'react';
import { mount, shallow } from "enzyme"
import { HeroeScreen } from "../../../components/heroes/HeroeScreen"
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en HeroeScreen', () => {

    const history = {
        length: 10,
        goBack: jest.fn(),
        push: jest.fn()
    };

    const wrapper= mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroeScreen history={history}/>
        </MemoryRouter>
    );

    test('debe de mostrar el componente Redirect si no hay argumentos en el url', () => {

        const wrapper= mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroeScreen history={history}/>
            </MemoryRouter>
        );
        
        expect(wrapper.find('Redirect').exists()).toBe(true);

    })

    test('debe de mostrar un heroe si el parametro existe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={HeroeScreen}/>
            </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBe(true);
        
    })

    test('debe de regresar a la pantalla anterior con PUSH', () => {
        
        const history = {
            length: 2,
            push: jest.fn(),
            goBack: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={ () => <HeroeScreen history={history}/>}/>
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();

    })

    test('debe de regresar a la pantalla anterior con GOBACK', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={ () => <HeroeScreen history={history}/>}/>
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(history.push).not.toHaveBeenCalled();
        expect(history.goBack).toHaveBeenCalled();


    });

    test('debe de llamar el redirect si el heroe no existe', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider1242142']}>
                <Route path="/hero/:heroeId" component={ () => <HeroeScreen history={history}/>}/>
            </MemoryRouter>
        );

        expect(wrapper.text()).toBe('')

    })
    
    
})
