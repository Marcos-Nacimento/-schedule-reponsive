import styled from 'styled-components';

export const Container = styled.footer `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 8rem;
    padding: 2rem;
`;

export const Label = styled.p `
    font-family: Poppins, sans-serif;
    opacity: 0.9;
    font-weight: 300;
    font-size: 0.9rem;

    @media (max-width: 459px) {
        line-height: 1.4rem;
    }
`;

export const Divider = styled.div `
    height: 0.5rem;
    background-color: rgb(0, 107, 255);
    
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    margin-left: 1rem;
    margin-right: 1rem;

`;

export const Content = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 910px) {
        flex-direction: column;
    }

    @media (max-width: 459px) {
        margin-bottom: 2rem;
    }
`;