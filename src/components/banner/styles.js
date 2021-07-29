import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6rem;

    @media (max-width: 800px) {
        flex-direction: column-reverse;
    }
`;
export const Title = styled.h2 `
    font-family: Poppins, sans-serif;
    font-weight: 800;
    font-size: 4rem;
    line-height: 4.5rem;
    padding: 2rem;

    @media (max-width: 550px) {
        font-size: 2rem;
        line-height: 3rem;
        padding: 0;
    }
`;
export const SubTitle = styled.h3 `
    font-family: Poppins, sans-serif;
    font-weight: 400;
    padding-left: 2rem;
    padding-right: 2rem;
    opacity: 0.9;

    @media (max-width: 700px) {
        padding: 0;
    }
`;

export const Content = styled.div `
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

export const LogoName = styled.div `
    font-family: Poppins, sans-serif;
    font-weight: 800;
    font-size: 4rem;
    color: rgb(0, 107, 255);

    @media (max-width: 700px) {
        font-size: 1.5rem;
    }
`;