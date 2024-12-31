// import {
//   StyledFacilitiesContainer,
//   StyledFacilitiesSection,
//   StyledSpacer,
//   StyledSvgContainer,
//   StyledText,
//   StyledTextSection,
//   StyledDescription,
// } from "./facilities.styles.ts";
// import afford from "../../assets/afford.svg";
// import { CustomImg } from "../CustomImg.tsx";
// import commEvents from "../../assets/commEvents.svg";
// import gym from "../../assets/gym.svg";
// import coffee from "../../assets/coffee.svg";
// import wifi from "../../assets/wifi.svg";
// import lounge from "../../assets/lounge.svg";
// import booking from "../../assets/booking.svg";
// import sports from "../../assets/sports.svg";
//
// const FacilitiesImgs = ({ source, text }: { source: string; text: string }) => {
//   switch (source) {
//     case "commEvents":
//       return (
//         <StyledSvgContainer>
//           <CustomImg imgSrc={commEvents} width={"30px"} height={"30px"} />
//           <StyledTextSection>
//             <StyledText>{text}</StyledText>
//             <StyledDescription>
//               One liner details about the feature
//             </StyledDescription>
//           </StyledTextSection>
//         </StyledSvgContainer>
//       );
//       break;
//     case "gym":
//       return (
//         <StyledSvgContainer>
//           <CustomImg imgSrc={gym} width={"30px"} height={"30px"} />
//           <StyledText>{text}</StyledText>
//         </StyledSvgContainer>
//       );
//       break;
//     case "wifi":
//       return (
//         <StyledSvgContainer>
//           <CustomImg imgSrc={wifi} width={"30px"} height={"30px"} />
//
//           <StyledText>{text}</StyledText>
//         </StyledSvgContainer>
//       );
//       break;
//     case "coffee":
//       return (
//         <StyledSvgContainer>
//           <CustomImg imgSrc={coffee} width={"30px"} height={"30px"} />
//         </StyledSvgContainer>
//       );
//       break;
//     case "afford":
//       return (
//         <StyledSvgContainer>
//           <CustomImg imgSrc={afford} width={"30px"} height={"30px"} />
//         </StyledSvgContainer>
//       );
//       break;
//     case "lounge":
//       return (
//         <StyledSvgContainer>
//           <CustomImg imgSrc={lounge} width={"30px"} height={"30px"} />
//         </StyledSvgContainer>
//       );
//       break;
//     case "booking":
//       return (
//         <StyledSvgContainer>
//           <CustomImg imgSrc={booking} width={"30px"} height={"30px"} />
//         </StyledSvgContainer>
//       );
//       break;
//     case "sports":
//       return (
//         <StyledSvgContainer>
//           <CustomImg imgSrc={sports} width={"30px"} height={"30px"} />
//         </StyledSvgContainer>
//       );
//       break;
//   }
// };
//
// export const Facilities = ({
//   data,
//   height,
//   width,
// }: {
//   data: object[];
//   height?: string;
//   width?: string;
// }) => {
//   return (
//     <>
//       <StyledSpacer />
//       <StyledFacilitiesSection>
//         {data.map((item) => {
//           return (
//             <StyledFacilitiesContainer
//               key={crypto.randomUUID()}
//               height={height}
//               width={width}
//             >
//               <FacilitiesImgs source={item.file} text={item.text} />
//             </StyledFacilitiesContainer>
//           );
//         })}
//       </StyledFacilitiesSection>
//
//       <StyledSpacer />
//     </>
//   );
// };

// import React, { useRef, useState } from "react";
// import {
//   StyledFacilitiesContainer,
//   StyledFacilitiesSection,
//   StyledSpacer,
//   StyledSvgContainer,
//   StyledText,
//   StyledTextSection,
//   StyledDescription,
// } from "./facilities.styles.ts";
// import afford from "../../assets/afford.svg";
// import { CustomImg } from "../CustomImg.tsx";
// import commEvents from "../../assets/commEvents.svg";
// import gym from "../../assets/gym.svg";
// import coffee from "../../assets/coffee.svg";
// import wifi from "../../assets/wifi.svg";
// import lounge from "../../assets/lounge.svg";
// import booking from "../../assets/booking.svg";
// import sports from "../../assets/sports.svg";
//
// const FacilitiesImgs = ({
//   source,
//   text,
//   isHovered,
// }: {
//   source: string;
//   text: string;
//   isHovered: boolean;
// }) => {
//   let imgSrc;
//
//   switch (source) {
//     case "commEvents":
//       imgSrc = commEvents;
//       break;
//     case "gym":
//       imgSrc = gym;
//       break;
//     case "wifi":
//       imgSrc = wifi;
//       break;
//     case "coffee":
//       imgSrc = coffee;
//       break;
//     case "afford":
//       imgSrc = afford;
//       break;
//     case "lounge":
//       imgSrc = lounge;
//       break;
//     case "booking":
//       imgSrc = booking;
//       break;
//     case "sports":
//       imgSrc = sports;
//       break;
//     default:
//       return null;
//   }
//
//   return (
//     <StyledSvgContainer>
//       <CustomImg imgSrc={imgSrc} width={"30px"} height={"30px"} />
//       <StyledTextSection>
//         <StyledText>{text}</StyledText>
//         {isHovered && (
//           <StyledDescription>
//             One liner details about the feature
//           </StyledDescription>
//         )}
//       </StyledTextSection>
//     </StyledSvgContainer>
//   );
// };
//
// export const Facilities = ({
//   data,
//   height,
//   width,
// }: {
//   data: { file: string; text: string }[];
//   height?: string;
//   width?: string;
// }) => {
//   const refs = useRef<Record<string, HTMLDivElement | null>>({});
//
//   const handleMouseEnter = (key: string) => {
//     if (refs.current[key]) {
//       refs.current[key]?.setAttribute("data-hovered", "true");
//     }
//   };
//
//   const handleMouseLeave = (key: string) => {
//     if (refs.current[key]) {
//       refs.current[key]?.removeAttribute("data-hovered");
//     }
//   };
//
//   return (
//     <>
//       <StyledSpacer />
//       <StyledFacilitiesSection>
//         {data.map(({ file, text }, idx) => {
//           const key = `facility-${idx}`;
//           const isHovered =
//             refs.current[key]?.getAttribute("data-hovered") === "true";
//
//           return (
//             <StyledFacilitiesContainer
//               ref={(el) => (refs.current[key] = el)}
//               onMouseEnter={() => handleMouseEnter(key)}
//               onMouseLeave={() => handleMouseLeave(key)}
//               key={key}
//               height={height}
//               width={width}
//             >
//               <FacilitiesImgs
//                 source={file}
//                 text={text}
//                 isHovered={!!isHovered}
//               />
//             </StyledFacilitiesContainer>
//           );
//         })}
//       </StyledFacilitiesSection>
//       <StyledSpacer />
//     </>
//   );
// };

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
