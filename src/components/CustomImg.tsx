import styled from "styled-components";

const StyledImg = styled.img<{
  height?: string;
  width?: string;
  color?: string;
}>`
  height: ${(props) => (props.height ? `${props.height}` : "10px")};
  width: ${(props) => (props.width ? `${props.width}` : "10px")};
  color: ${(props) => (props.color ? props.color : "#FFBB00")};
`;

export const CustomImg = ({
  imgSrc,
  width,
  height,
  color,
}: {
  imgSrc: string;
  width?: string;
  height?: string;
  color?: string;
}) => {
  return <StyledImg src={imgSrc} height={height} width={width} color={color} />;
};
