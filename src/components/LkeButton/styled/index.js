import styled from 'styled-components';
import LikeIcon from '../../../assets/icons/heart.svg';

export const Button = styled.button`
    position: absolute;
    z-index: 2;
    right: 15px;
    top: 15px;
    opacity: 0;
    width: 25px;
    height: 25px;
    transition: fill .2s ease;
    transition: opacity 0.2s ease-in-out;
    background-color: transparent;
    border: none;
    outline: none;
    user-select: none;
`;

export const Icon = styled(LikeIcon)(({isfavorite}) =>`
    fill: ${isfavorite ? "#ea7171" : "#ccc"};
    cursor: pointer;
`);