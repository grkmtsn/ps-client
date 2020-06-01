/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types';

// GraphQL
import { useMutation } from '@apollo/react-hooks';
import { TOGGLE_FAVORITE_PRODUCT } from '../../graphql/mutations';

// Styled
import { Button, Icon } from './styled';

const LikeButton = ({isfavorite, productId}) => {
    const [value, setValue] = useState(isfavorite);
    const [ toggleFavorite, result] = useMutation(TOGGLE_FAVORITE_PRODUCT);
    const handleClick = async () => {
        setValue(!value);
        try {
            const { data } = await toggleFavorite({ variables: { id: productId } });
            if(!data.toggleFavoriteProduct.success){
                setValue(value);
            }
        } catch (error) {
            setValue(value);
        }
    }
    return (
        <Button onClick={handleClick}>
            <Icon isfavorite={value ? 1 : 0} />
        </Button>
    )
}

LikeButton.propTypes = {
    isfavorite: PropTypes.bool.isRequired,
    productId: PropTypes.string.isRequired
}

export default LikeButton;