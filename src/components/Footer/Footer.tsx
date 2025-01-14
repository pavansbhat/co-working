import {
    StyledAppleImage,
    StyledFoorterTextArea,
    StyledFooterContainer,
    StyledFooterText,
    StyledGoogleImage, StyledImageContainer
} from "./footer.styles.ts";
import DesktopFooter from "../../assets/desktopFooter.svg";
import {PageSubsections} from "../PageSubsections.tsx";
import playstore from "../../assets/playstore.svg"
import appStore from "../../assets/appleStore.svg"

export const Footer = ()=> {
    return (
        <StyledFooterContainer>
                <PageSubsections bgImage={DesktopFooter} width={"28em"}
                                 height={"28em"} />
            <StyledFoorterTextArea>
                <StyledFooterText>
                    Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
                </StyledFooterText>
                <StyledImageContainer>
                    <StyledGoogleImage src={playstore}/>
                    <StyledAppleImage src={appStore}/>
                </StyledImageContainer>

            </StyledFoorterTextArea>

        </StyledFooterContainer>
    )
}