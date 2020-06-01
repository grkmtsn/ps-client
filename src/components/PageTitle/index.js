import React from 'react'
import PropTypes from 'prop-types';

// Styled
import { TitleWrapper, Title } from './styled';

const PageTitle = ({title}) => (
    <TitleWrapper>
        <Title>
            {title}
        </Title>
    </TitleWrapper>
);

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default PageTitle;