import styled from "styled-components";

export const StyledCardContainer = styled.div<{
  height?: string;
  width?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  box-shadow: 0px 1.079px 8.63px 0px rgba(0, 0, 0, 0.06);
  height: ${(props) => (props.height ? `${props.height}` : "384px")};
  width: ${(props) => (props.width ? `${props.width}` : "370px")};
  border-radius: 8px;
  border: 1.079px solid rgba(238, 231, 231, 0.8);
  margin: 2em 4em;

  //& > :first-child {
  //  margin-left: 80px;
  //}
  //
  //& > :last-child {
  //  margin-right: 80px;
  //}

  background: #fff;
  @media (max-width: 768px) {
    width: 34em;
    height: 34em;
    margin: 0 2em 2em 2em;
  }
`;

export const StyledCardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
