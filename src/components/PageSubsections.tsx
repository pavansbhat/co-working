import styled from "styled-components";
import { ElementType, ReactNode } from "react";

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
      ? `url(${props.bgImage}), url(${props.fgImage})`
      : props.bgImage
        ? `url(${props.bgImage})`
        : props.fgImage
          ? `url(${props.fgImage})`
          : "none"};
  background-size: cover, contain;
  background-repeat: no-repeat;
  background-position: center, center;
  border-radius: 10px;
`;

// const StyledPageContainer = styled.div<{
//   bgImage: string | undefined;
//   width: string;
//   fgImage?: string;
// }>`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   width: ${(props) => (props.width ? `${props.width}` : "100%")};
//   height: 300px;
//   // background-image: url(${(props) => props.bgImage}),
//   //   url(${(props) => props.fgImage});
//   // background-size: cover, contain;
//   // background-repeat: no-repeat;
//   // background-position: center, center;
//   background-image: url(${(props) => props.bgImage}),
//     url(${(props) => props.fgImage});
//   background-size: cover, contain; /* Adjust these if needed */
//   background-repeat: no-repeat;
//   background-position: center, center;
//   border-radius: 10px;
// `;

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
