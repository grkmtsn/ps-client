import React from 'react'
import PropTypes from 'prop-types';

// Styled
import { Wrapper, Icon } from './styled';

const CargoDetails = ({free, instantly}) => {
    return (
        <Wrapper>
            {free && (
                <>
                    <Icon /> 
                    <span>
                        Ücretsiz
                    </span>
                    {instantly && (
                        <span style={{marginLeft: 3}}>
                            - Aynı Gün 
                        </span>
                    )}
                    <span style={{marginLeft: 3}}>
                        Kargo
                    </span>
                </>
            )}
        </Wrapper>
    )
}

CargoDetails.propTypes = {
    free: PropTypes.bool.isRequired,
    instantly: PropTypes.bool.isRequired,
}

export default CargoDetails;