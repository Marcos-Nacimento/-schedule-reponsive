import styled from 'styled-components';

export const Container = styled.div `
    display: flex;

    justify-content: space-between;
    align-items: center;
    margin: 2rem;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;
export const ContentRight = styled.div `
    padding: 3rem;

    @media (max-width: 1024px) {
        padding: 1.5rem;
    }
`;
export const ContentLeft = styled.div `
    padding: 3rem;

    @media (max-width: 1024px) {
        padding: 1.5rem;
    }
`;
export const Title = styled.h3 `
    font-family: Poppins, sans-serif;
    margin-bottom: 1rem;
`;

export const SubTitle = styled.h4 `
    font-family: Poppins, sans-serif;
    opacity: 0.8;

    font-weight: 500;
`;
