import { ElementType } from "react";
import styled from "styled-components";

const StyledIconContainer = styled.div<{ $width: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.$width ? `${props.$width}` : "100%")};
  height: ${(props) => (props.$width ? `${props.$width}` : "100%")};
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #f2b304;
`;

export const CustomIcons = ({
  component: Component,
  size,
  width,
  color,
}: {
  component: ElementType;
  size: string;
  width: string;
  color?: string;
}) => {
  return (
    <StyledIconContainer $width={width}>
      <Component style={{ fontSize: size, color: color }} />
    </StyledIconContainer>
  );
};
