import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

const wait = (amount = 0) => {
    return new Promise(resolve => setTimeout(resolve, amount));
}

export const actWait = async (amount = 0) => {
    await act(async () => {
        await wait(amount);
    });
}

export const mountWithProvider = (component, mocks, addType = false, initialEntries = ['/']) => {
    return mount(
        <MemoryRouter initialEntries={initialEntries}>
            <MockedProvider mocks={mocks} addTypename={addType}>
                {component}
            </MockedProvider>
        </MemoryRouter>
    );
}

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};