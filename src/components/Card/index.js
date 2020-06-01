import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Utils
import { formatMoney } from '../../utils';

// Components
import LikeButton from '../LkeButton';
import CargoDetails from '../CargoDetails/CargoDetails';

// Styled
import { Wrapper, ImageContainer, Image, ProductDetails, TitleWrapper, Title, SubTitle, Price } from './styled';

const Card = ({product}) => {
    const {id, title, description, price, coverImageSrc, shipping: {free, instantly}, isFavorite} = product;
    return (
        <Wrapper>
            <ImageContainer>
                <LikeButton isfavorite={isFavorite} productId={id} />
                <NavLink to={`/${product.id}`}>
                    <Image src={coverImageSrc} alt="Iphone" />
                </NavLink>
            </ImageContainer>
            <ProductDetails>
                <TitleWrapper to={`/${product.id}`} title={title}>
                    <Title>
                        {title}
                    </Title>
                    <SubTitle>
                        {description}
                    </SubTitle>
                </TitleWrapper>
                <div>
                    <Price>
                        {formatMoney(price)}
                        {' '}
                        TL
                    </Price>
                    <CargoDetails free={free} instantly={instantly} />
                </div>
            </ProductDetails>
        </Wrapper>
    )
}

Card.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        coverImageSrc: PropTypes.string,
        shipping: PropTypes.shape({
            free: PropTypes.bool,
            instantly: PropTypes.bool
        }),
        isFavorite: PropTypes.bool
    }).isRequired
}

export default Card;