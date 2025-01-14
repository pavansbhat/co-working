import { TextTypes } from "./text.types.ts";
import {
  StyledCardHeadingText,
  StyledColoredText,
  StyledPageheadingText,
  StyledSectionHeadingText,
  StyledTextContainer,
} from "./text.styles.ts";

export const CustomText = ({
  variant,
  fontSize,
  content,
  colouredContent,
  contentColor,
}: {
  variant: string;
  fontSize: string;
  content: string;
  colouredContent?: string;
  contentColor?: string;
}) => {
  switch (variant) {
    case TextTypes.PAGE_HEADING:
      return (
        <StyledTextContainer>
          <StyledPageheadingText fontSize={fontSize}>
            {content}{" "}
            {colouredContent && (
              <StyledColoredText color={contentColor}>
                {colouredContent}
              </StyledColoredText>
            )}
          </StyledPageheadingText>
        </StyledTextContainer>
      );
      break;

    case TextTypes.SECTION_HEADING:
      return (
        <StyledTextContainer>
          <StyledSectionHeadingText fontSize={fontSize}>
            {content}
          </StyledSectionHeadingText>
        </StyledTextContainer>
      );
      break;

    case TextTypes.CARD_HEADING: 
      return(
            <StyledCardHeadingText fontSize={fontSize}>
              {content}
            </StyledCardHeadingText>
      )
  }
};
