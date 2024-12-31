import styled from "styled-components";

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const StyledPageheadingText = styled.p<{ fontSize: string }>`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "40px")};
  color: #263238;
  text-align: left;
  text-wrap: wrap;
  font-weight: 700;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  margin: 0 50px;

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    letter-spacing: -1px;
    font-weight: 600;
    margin: 0 10px;
  }
`;

export const StyledSectionHeadingText = styled.p<{ fontSize: string }>`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "20px")};
  color: #263238;
  text-align: left;
  text-wrap: wrap;
  font-weight: 700;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  margin: 0 50px;
  @media (max-width: 768px) {
    font-size: 20px;
    width: 100%;
    margin: 0 10px;
  }
`;

export const StyledColoredText = styled.p<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#263238")};
  display: inline;
`;
