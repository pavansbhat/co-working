import styled from "styled-components";

export const StyledCardContainer = styled.div<{
  height?: string;
  width?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0px 1.079px 8.63px 0px rgba(0, 0, 0, 0.06);
  height: ${(props) => (props.height ? `${props.height}` : "384px")};
  width: ${(props) => (props.width ? `${props.width}` : "370px")};
  border-radius: 8px;
  border: 1.079px solid rgba(238, 231, 231, 0.8);

  background: #fff;
  @media (max-width: 768px) {
    width: 320px;
    height: 340px;
  }
`;

export const StyledCardSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
