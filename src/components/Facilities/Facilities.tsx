import React, { useRef, useState } from "react";
import {
  StyledFacilitiesContainer,
  StyledFacilitiesSection,
  StyledSpacer,
  StyledSvgContainer,
  StyledText,
  StyledTextSection,
  StyledDescription,
} from "./facilities.styles.ts";
import afford from "../../assets/afford.svg";
import { CustomImg } from "../CustomImg.tsx";
import commEvents from "../../assets/commEvents.svg";
import gym from "../../assets/gym.svg";
import coffee from "../../assets/coffee.svg";
import wifi from "../../assets/wifi.svg";
import lounge from "../../assets/lounge.svg";
import booking from "../../assets/booking.svg";
import sports from "../../assets/sports.svg";

const FacilitiesImgs = ({
  source,
  text,
  isHovered,
}: {
  source: string;
  text: string;
  isHovered: boolean;
}) => {
  let imgSrc;

  switch (source) {
    case "commEvents":
      imgSrc = commEvents;
      break;
    case "gym":
      imgSrc = gym;
      break;
    case "wifi":
      imgSrc = wifi;
      break;
    case "coffee":
      imgSrc = coffee;
      break;
    case "afford":
      imgSrc = afford;
      break;
    case "lounge":
      imgSrc = lounge;
      break;
    case "booking":
      imgSrc = booking;
      break;
    case "sports":
      imgSrc = sports;
      break;
    default:
      return null;
  }

  return (
    <StyledSvgContainer>
      <CustomImg imgSrc={imgSrc} width={"30px"} height={"30px"} />
      <StyledTextSection>
        <StyledText>{text}</StyledText>
        {isHovered && (
          <StyledDescription>
            One liner details about the feature
          </StyledDescription>
        )}
      </StyledTextSection>
    </StyledSvgContainer>
  );
};

export const Facilities = ({
  data,
  height,
  width,
}: {
  data: { file: string; text: string }[];
  height?: string;
  width?: string;
}) => {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  return (
    <>
      <StyledSpacer />
      <StyledFacilitiesSection>
        {data.map(({ file, text }, idx) => {
          const key = `facility-${idx}`;

          return (
            <StyledFacilitiesContainer
              onMouseEnter={() => setHoveredKey(key)}
              onMouseLeave={() => setHoveredKey(null)}
              key={key}
              height={height}
              width={width}
            >
              <FacilitiesImgs
                source={file}
                text={text}
                isHovered={hoveredKey === key}
              />
            </StyledFacilitiesContainer>
          );
        })}
      </StyledFacilitiesSection>
      <StyledSpacer />
    </>
  );
};
