import styled from "styled-components";
import { ReactNode } from "react";

const StyledPageContainer = styled.div<{
  bgImage?: string;
  width: string;
  fgImage?: string;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: 300px;
  background-image: ${(props) =>
    props.bgImage && props.fgImage
      ? `url(${props.fgImage})`
      : props.bgImage && !props.fgImage
        ? `url(${props.bgImage})`
        : props.fgImage && `url(${props.fgImage})`};
  background-size: cover, contain;
  background-repeat: no-repeat, no-repeat;
  background-position: center, center;
  border-radius: 10px;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const PageSubsections = ({
  bgImage,
  fgImage,
  width,
  children,
}: {
  bgImage?: string;
  width: string;
  fgImage?: string;
  children?: ReactNode;
}) => {
  return (
    <StyledPageContainer bgImage={bgImage} fgImage={fgImage} width={width}>
      {children}
    </StyledPageContainer>
  );
};
