import styled from 'styled-components';

export const Container = styled.div `
    height: 20rem;
    background-color: rgb(0, 107, 255);
    width: 100%;
    margin: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Circle = styled.div `
    height: 6rem;
    width: 6rem;
    border-radius: 3rem;
    margin-bottom: 2rem;
    margin-top: 2rem;

    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 400px) {
        height: 4rem;
        width: 4rem;
        border-radius: 2rem;
    }
`;

export const Title = styled.p `
    font-family: Poppins, sans-serif;
    color: #FFFFFF;
    line-height: 2rem;

    font-size: 1.4rem;
    margin: 1rem;

    @media (max-width: 400px) {
        font-size: 1rem;
        margin: 0.6rem;
    }
`;

export const Button = styled.div `
    height: 2.5rem;
    width: 12rem;
    font-size: 0.8rem;
    cursor: pointer;
    margin-top: 1rem;

    border-radius: 0.5rem;
    background-color: #029a43;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-family: Poppins, sans-serif;

`;