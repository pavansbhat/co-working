import styled from "styled-components";

export const StyledFooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`;

export const StyledFooterText = styled.h6`
    color: #605F5F;
    font-size: 21px;
    width: 600px;
    text-align: left;

    @media (max-width: 768px) {
        display: none;
    }
`

export const StyledFoorterTextArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`

export const StyledGoogleImage = styled.img`
    width: 146px;
    height: 45px;
    flex-shrink: 0;
    margin: 1em 1em 0 0 ;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const StyledAppleImage = styled.img`
    width: 10em;
    height: 45px;
    flex-shrink: 0;
    margin: 1em 1em 0 0 ;

    @media (max-width: 768px) {
        width: 132px;
        height: 45px;
    }
`

export const StyledImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: center;
    }
`


