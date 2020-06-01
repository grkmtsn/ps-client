import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (max-width: 992px) {
        max-width: 960px;
    }

    @media (max-width: 768px) {
        max-width: 720px;
    }

    @media (max-width: 576px) {
        max-width: 540px;
    }
`;

export const Row = styled.div`
    display:flex;
    flex-flow: row wrap;
    justify-content: flex-start;
`;

export const Col = styled.div`
    height: 450px;
    flex-basis: 25%;
    width: 260px;
    position: relative;
    padding: 10px;

    @media (max-width: 992px) {
        flex-basis: 33.33%;
    }

    @media (max-width: 768px) {
        height: 100%;
        flex-basis: 50%;
    }

    @media (max-width: 576px) {
        flex-basis: 100%;
    }
`;

export const Center = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`