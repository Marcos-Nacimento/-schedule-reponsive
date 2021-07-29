import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.h3 `
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    opacity: 0.9;                                                                                                                  
    margin-right: 1rem;

    @media (max-width: 800px) {
        margin-top: 1.5rem;
    }
`;

export const AnimationContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
        flex-direction: column;
        padding-left: 2rem;
        padding-right: 2rem;
    }
`;


export const Content = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    margin-top: 1rem;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 0.5rem;
    }
`;


export const Item = styled.div `
    height: 20rem;
    width: 20rem;
    padding: 2rem;

    @media (max-width: 650px) {
        height: 15rem;
        width: 15rem;
        padding: 0;
    }
`;

export const Circle = styled.div `
    height: 2rem;
    width: 2rem;
    border-radius: 1rem;
    background-color: rgb(0, 107, 255);
    color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Poppins, sans-serif;
`;

export const Label = styled.p `
    font-family: Poppins, sans-serif;
    margin-left: 1rem;
    font-weight: bold;
`;

export const SubLabel = styled.p `
    font-family: Poppins, sans-serif;
    margin-left: 2rem; 
`;

export const HeaderItem = styled.div `
    display: flex;
`;

export const ContentMsgAnimation = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 3rem;
    padding-right: 3rem;

    @media (max-width: 750px) {
        flex-direction: column;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

export const ButtonAction = styled.div `
    cursor: pointer;
`;

export const LabelBig = styled.h2 `
    font-family: Poppins, sans-serif;
    text-align: center;
    font-size: 2rem;
    margin-top: 1.8rem;

    @media (max-width: 740px) {
        font-size: 1.3rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

export const LabelSmall = styled.h4 `
    font-family: Poppins, sans-serif;
    text-align: center;
    margin-top: 1.1rem;
    opacity: 0.9;
    font-weight: 400;

    @media (max-width: 830px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
`;
    