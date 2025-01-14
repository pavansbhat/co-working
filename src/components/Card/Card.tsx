import { StyledCardContainer } from "./card.styles.ts";
import { ElementType } from "react";

export const Card = ({
  component: Component,
  height,
  width
}: {
  component?: ElementType;
  height?: string;
  width?: string;
}) => {
  return (
      <StyledCardContainer width={width} height={height}>
        {Component && <Component/>}
      </StyledCardContainer>
  );
};
