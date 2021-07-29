import styled from 'styled-components';

export const Container = styled.header `
    top: 0;
    right: 0;
    left: 0;

    z-index: 1000;
    position: fixed;
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    width: 100%;
    height: 4rem;

    @media (max-width: 700px) {
        padding: 2rem;
    }
`;

export const Logo = styled.a `
    height: 3rem;
    width: 3rem;
    border-radius: 1.5rem;

    background-color: rgb(0, 107, 255);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SignUp = styled.div `
    height: 3rem;
    border-radius: 3rem;
    background-color: rgb(0, 107, 255);
    color: #FFFFFF;
    margin-left: 1rem;
    margin-right: 1rem;
    font-family: Poppins;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1;
    width: 7rem;
    opacity: 1;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        opacity: 0.8;
    }
`;

export const Routes = styled.ul `
    list-style: none;
    display: flex;

    @media (max-width: 700px) {
        display: none; 
    }
`;

export const RouteName = styled.li `
    margin: 1rem;
    font-family: Poppins, sans-serif;
    cursor: pointer;
    font-weight: 500;
    opacity: 0.8;
    
    &:hover {
        color: rgb(0, 107, 255);
    }
`;

export const ContentRight = styled.div `
    display: flex;
    align-items: center;
    list-style: none;

    @media (max-width: 700px) {
        display: none; 
    }
`;