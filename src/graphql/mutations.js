/* eslint-disable import/prefer-default-export */
import { gql } from 'apollo-boost';

export const TOGGLE_FAVORITE_PRODUCT = gql`
    mutation toggleFavoriteProduct($id: String!) {
        toggleFavoriteProduct(id: $id) {
            success
        }
    }
`;