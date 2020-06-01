import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Center } from '../Layout/styled';

// Styled
import { Icon } from './styled';

const Error = ({message}) => {
    return (
        <Center>
            <Icon />
            <span>{message}</span>
        </Center>
    )
}

Error.propTypes = {
    message: PropTypes.string.isRequired
}

export default Error;