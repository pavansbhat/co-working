import styled from "styled-components";

export const StyledFacilitiesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row: auto;
  justify-items: center;
  position: static;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    position: static;
  }
`;

export const StyledFacilitiesContainer = styled.div<{
  height?: string;
  width?: string;
}>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 1.079px 8.63px 0px rgba(0, 0, 0, 0.06);
  height: ${(props) => (props.height ? `${props.height}` : "384px")};
  width: ${(props) => (props.width ? `${props.width}` : "370px")};
  &::after {
    content: "";
    top: calc(50% - 10px);
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
    z-index: -1;
  }

  background: #f9faff;
  @media (max-width: 768px) {
    width: 154px;
    height: 80px;
    justify-content: center;
    z-index: 0;
    margin: 10px 0;
  }

  &:hover {
    border-radius: 8px;
    background-color: #fff;
  }
`;

export const StyledSpacer = styled.div`
  flex: 1;
`;

export const StyledSvgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 8px;
  color: #ccc;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledText = styled.h5`
  font-size: 14px;
  font-weight: 600;
  color: #000;
  margin: 0 0px 0 10px;

  &:hover {
    margin: 0 0px 0 10px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0;
  }
`;

// export const StyledDescription = styled.p<{ hovered?: string | null }>`
//   font-size: 8px;
//   margin: 10px 0px 0 10px;
//   color: #000;
//   opacity: ${({ hovered }) => (hovered ? 1 : 0)};
//   transform: ${({ hovered }) =>
//     hovered ? "translateY(0)" : "translateY(-10px)"};
//   transition:
//     opacity 0.3s ease-in-out,
//     transform 0.3s ease-in-out;
// `;

export const StyledDescription = styled.p<{ hovered?: string | null }>`
  font-size: 8px;
  margin: 0px 0px 0 10px;
  color: #000;
  opacity: ${({ hovered }) => (hovered !== null ? 1 : 0)};
  transform: ${({ hovered }) =>
    hovered !== null ? "translateY(0)" : "translateY(-10px)"};
  transition:
    opacity 0.5s ease-in-out,
    transform 0.3s ease-in-out;

  /* Ensures element is always part of layout */
  pointer-events: none;
  @media (max-width: 768px) {
    display: none;
  }
`;
