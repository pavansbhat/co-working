import styled from "styled-components";
import { ReactNode } from "react";

const StyledPageContainer = styled.div<{
  bgImage?: string;
  width: string;
  fgImage?: string;
  height?: string;
  margin?:string;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "300px")};
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
  margin: ${(props) => (props.margin ? `${props.margin}` : "2em")};
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const StyledPageSectionContainer = styled.div<{
  width: string;
  height?: string;
}>`
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "300px")};
`

export const PageSubsections = ({
  bgImage,
  fgImage,
  width,
  height,
    margin,
  children,
}: {
  bgImage?: string;
  width: string;
  fgImage?: string;
  height?: string;
  margin?: string,
  children?: ReactNode;
}) => {
  return (
      // <StyledPageSectionContainer width={width} height={height}>
        <StyledPageContainer
            bgImage={bgImage}
            fgImage={fgImage}
            width={width}
            height={height}
            margin={margin}
        >
          {children}
        </StyledPageContainer>
      // </StyledPageSectionContainer>
    
  );
};
