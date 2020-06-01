import { gql } from 'apollo-boost';

export const GET_SHOWCASE_PRODUCTS = gql`
    {
        productsForShowCase {
            id
            title
            description
            price
            coverImageSrc
            shipping {
                free
                instantly
            }
            isFavorite
        }
    }
`;

export const GET_PRODUCT_PRICE_DETAILS = gql`
    query productPriceHistory($id: ID!) {
        productPriceHistory(id: $id) {
            id
            title
            priceHistory {
                date
                price
            }
        }
    }
`