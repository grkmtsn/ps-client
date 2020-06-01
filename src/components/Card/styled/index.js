import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    background-color: #fff;
    position: relative;
    margin-bottom: 30px;
    box-shadow: 0 0 7px rgba(0,0,0,0.1);
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
`

export const ImageContainer = styled.div`
    position: relative;
    overflow: hidden;

    &:hover {
        button {
            opacity: 1;
        }
    }
`

export const Image = styled.img`
    max-width: 100%;
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px 8px 0 0;
`

export const ProductDetails = styled.div`
    padding: 15px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
`;

export const TitleWrapper = styled(NavLink)`
    @media (max-width: 768px) {
        margin-bottom: 25px;
    }
`

export const Title = styled.h5`
    display: block;
    display: -webkit-box;
    max-width: 100%;
    max-height: 40px;
    margin: 0 auto 5px auto;
    font-size: 1rem;
    line-height: 1.2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: #2c789e;
    }
`;

export const SubTitle = styled.h6`
    font-size: 0.85rem;
    font-weight: normal;
    color: #a9a9a9;
`

export const Price = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
`