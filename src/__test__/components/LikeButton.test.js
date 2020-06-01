/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mountWithProvider, actWait } from '../helpers';
// import { productToggleFavoriteMocks } from '../mocks';
import { TOGGLE_FAVORITE_PRODUCT } from '../../graphql/mutations';

import LikeButton from '../../components/LkeButton';

const props = {
    productId: "1",
    isfavorite: false
}
it('Like Button renders without error', () => {
    const wrapper = mountWithProvider(<LikeButton {...props} />,[])
    expect(wrapper.find(LikeButton)).toHaveLength(1);
});

it('Toggle Favorite mutation', async () => {
    const deleteMutationCalled = false;
    const mocks = [
        {
            request: {
                query: TOGGLE_FAVORITE_PRODUCT,
                variables: { id: '1' }
            },
            result: jest.fn(() => ({
                data: {
                    toggleFavoriteProduct: {
                        success: true
                    
                    }
                }
            })),
        },
    ];

    const wrapper = mountWithProvider(<LikeButton {...props} />, mocks);
    // const component = wrapper.find(LikeButton);
    const button = wrapper.find('button');

    await button.simulate('click');
    await actWait(0);

    // TODO: Fix "Error: No more mocked responses for the query: mutation toggleFavoriteProduct" error.
    console.log(deleteMutationCalled)
})