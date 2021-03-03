import { mount, shallow } from "enzyme"
import React, { Component } from 'react';
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";


describe('Pruebas en AppRouter', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test('debe de mostrar el login si no estoy autenticado', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();

    })

    test('debe de mostrar el componente de Marvel si está autenticado', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Fernando'
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect(wrapper.find('.navbar').exists()).toBe(true);

    })
    
    
})
