import React from 'react';
import { Route } from 'react-router-dom';
import { ProductPriceDetail , ProductList, NotFound } from '../../pages';
import { mountWithProvider } from '../helpers';

describe('routes using memory router', () => {
    it('should show Home component for / router (using memory router)', () => {
        const component = (
            <Route path="/">
                <ProductList />
            </Route>
        )
        const wrapper = mountWithProvider(component,[],false,["/"]);
        expect(wrapper.find(ProductList)).toHaveLength(1);
    })

    it('should show Home component for /:id router (using memory router)', () => {
        const component = (
            <Route path="/:id">
                <ProductPriceDetail />
            </Route>
        )
        const wrapper = mountWithProvider(component,[],false,["/1"]);
        expect(wrapper.find(ProductPriceDetail)).toHaveLength(1);
    })

    it('should show No match component for route not defined', () => {
        const component = (
            <Route path="/unknown">
                <NotFound />
            </Route>
        )
        const wrapper = mountWithProvider(component,[],false,["/unknown"]);
        expect(wrapper.find(NotFound)).toHaveLength(1);
    })
})