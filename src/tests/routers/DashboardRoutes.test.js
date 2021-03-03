import { AuthContext } from "../../auth/AuthContext"
import { DashboardRoutes } from "../../routers/DashboardRoutes"
import React, { Component } from 'react';
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";


describe('Pruebas en DashboardRoutes', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Fernando'
        }
    }

    
    test('debe mostrarse correctamente', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <DashboardRoutes/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Fernando');

    })
    

})
