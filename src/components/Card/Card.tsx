import { StyledCardContainer, StyledCardSection } from "./card.styles.ts";
import { ElementType } from "react";
import { useWorkspaces } from "../query.ts";

export const Card = ({
  component: Component,
  height,
  width,
}: {
  component?: ElementType;
  height?: string;
  width?: string;
}) => {
  const { data, isLoading, isError, error } = useWorkspaces();

  console.log(data, "DATA");
  return (
    <StyledCardSection>
      <StyledCardContainer width={width} height={height}>
        {Component && <Component />}
      </StyledCardContainer>
    </StyledCardSection>
  );
};
