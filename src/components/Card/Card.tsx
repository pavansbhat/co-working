import React from "react";
import { StyledCardContainer, StyledCardSection } from "./card.styles.ts";

export const Card = ({
  height,
  width,
}: {
  height?: string;
  width?: string;
}) => {
  return (
    <StyledCardSection>
      <StyledCardContainer width={width} height={height}></StyledCardContainer>
    </StyledCardSection>
  );
};
