import styled from "styled-components";

export const StyledWorkSpaceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const StyledWorkSpaceheader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.4em;
    width: 100%;
    height: 4.5em;
`

export const StyledDistanceTag = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.466px solid #EEE7E7;
    border-radius: 0.5em;
    width: 3.5em;
    height: 3.5em;
    margin: 0 1em;
`

export const StyledDistanceText = styled.p`
    color: rgba(38, 50, 56, 0.50);

    text-align: center;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 8px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const StyledDistancIcon = styled.img`
    width: 0.3em;
    height: 0.3em;
    font-size: 3em;
`

export const StyledWorkspaceImage = styled.img`
    width: 21em;
    height: 12em;
    border-radius: 5px;
    margin: 1em 0;

    @media (max-width: 768px) {
        width: 95%;
        height: 18em;
        margin: 2em 0 1em 0;
    }
`;

export const StyledPriceSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const StyledDayPassButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;;
    align-items: center;
    width: 12em;
    height: 5.5em;
    border-radius: 6px;
    border: 0.5px solid #EEE7E7;
    background: #F9F9F9;
    margin: 0 0.5em;
    @media (max-width: 768px) {
        width: 18.75em;
        height: 9em;
    }
`

export const StyledBulkPassButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 12em;
    height: 5.5em;
    border-radius: 6px;
    border: 1px solid #FFC422;
    background: #FFCF4B;
    margin: 0 0.5em;
    @media (max-width: 768px) {
        width: 18.75em;
        height: 9em;
    }
`

export const StyledPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const StyledPriceSubSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`

export const StyledPriceText = styled.p<{size?:string, weight?: string}>`
    color: #65624C;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;;
    font-size: ${(props) => (props.size ? `${props.size}` : "14px")};
    font-style: normal;
    font-weight: ${(props) => (props.weight ? `${props.weight}` : "500")};;
    line-height: normal;
    margin: 0.5em 0 0 0;
    display: inline-flex;

    @media (max-width: 768px) {
        font-size: 2em;
        margin: 0.5em 0 0 1em;
    }
`

