import { GraphQLError } from 'graphql';
import { GET_SHOWCASE_PRODUCTS } from '../graphql/queries';
import { TOGGLE_FAVORITE_PRODUCT } from '../graphql/mutations';


export const productShowCaseMocks = [{
    request: {
        query: GET_SHOWCASE_PRODUCTS,
    },
    result: {
        data: {
            productsForShowCase: [
                {
                    id: "1",
                    title: "Mock Title",
                    description: "Mock Description",
                    price: 12000,
                    coverImageSrc: "Mock Src",
                    shipping: {
                        free: true,
                        instantly: false
                    },
                    isFavorite: false
                }
            ],
        },
    },
}];

export const productShowCasErrorMocks = [{
    request: {
        query: GET_SHOWCASE_PRODUCTS,
    },
    error: new Error([new GraphQLError('Error!')]),
}];

export const productToggleFavoriteMocks = [{
    request: {
        query: TOGGLE_FAVORITE_PRODUCT,
        variables: { id: '1' }
    },
    result: {
        data: {
            toggleFavoriteProduct:{
                success: true
            }
        }
    }
}]