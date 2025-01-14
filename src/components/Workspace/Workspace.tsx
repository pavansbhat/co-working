import {
    StyledWorkSpaceContainer,
    StyledWorkSpaceheader,
    StyledDistanceTag,
    StyledDistancIcon,
    StyledWorkspaceImage,
    StyledDistanceText,
    StyledPriceSection,
    StyledDayPassButton,
    StyledBulkPassButton,
    StyledPriceContainer,
    StyledPriceText, StyledPriceSubSection
} from "./workspace.styles.ts"
import {Workspace} from "../../types.ts";
import distance from "../../assets/assistant_direction.svg"
import {CustomText} from "../Text/CustomText.tsx";
import {TextTypes} from "../Text/text.types.ts";

export const WorkSpace = ({data, img}: {data?: Workspace, img?: string}) => {

    console.log(img, "IMG")
    return (
        <StyledWorkSpaceContainer>
            <StyledWorkSpaceheader>
                <div  style={{margin: "0 1em"}}>
                    <CustomText
                        variant={TextTypes.CARD_HEADING}
                        fontSize={"20px"}
                        content={data ? data.name : ""}
                    />{ }
                </div>
                <StyledDistanceTag>
                <StyledDistancIcon src={distance} alt={"Distance indicator"}/>
                    <StyledDistanceText>
                        6 KMS
                    </StyledDistanceText>
                </StyledDistanceTag>
            </StyledWorkSpaceheader>
            <StyledWorkspaceImage src={img}/>
            <StyledPriceSection>
                <StyledDayPassButton>
                    <StyledPriceContainer>
                        <StyledPriceText >
                            Day Pass
                        </StyledPriceText>
                        <StyledPriceSubSection>
                            <StyledPriceText size={"1.3em"} weight={"800"}>
                                ₹ {data && data.day_pass_price} {" "} <br/>
                                <div style={{margin: 0, fontSize: "0.7em", fontWeight: "500", lineHeight: "2"}}>/ Day
                                </div>
                            </StyledPriceText>
                            <div style={{margin: "0 0 0 3.5em"}}><svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929L11.5858 6L7.29289 1.70711C6.90237 1.31658 6.90237 0.683417 7.29289 0.292893C7.68342 -0.0976314 8.31658 -0.0976313 8.70711 0.292893L13.7071 5.29289Z" fill="#263238"/>
                                <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976315 11.3166 -0.0976314 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893C0.683417 -0.0976314 1.31658 -0.0976313 1.70711 0.292893L6.70711 5.29289Z" fill="#263238"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L15.7071 11.7071C15.3166 12.0976 14.6834 12.0976 14.2929 11.7071C13.9024 11.3166 13.9024 10.6834 14.2929 10.2929L18.5858 6L14.2929 1.70711C13.9024 1.31658 13.9024 0.683417 14.2929 0.292893C14.6834 -0.0976314 15.3166 -0.0976313 15.7071 0.292893L20.7071 5.29289Z" fill="#263238"/>
                            </svg>
                            </div>
                        </StyledPriceSubSection>

                    </StyledPriceContainer>
                </StyledDayPassButton>
                <StyledBulkPassButton>
                    <StyledPriceContainer>
                        <StyledPriceText >
                            Bulk Pass
                        </StyledPriceText>
                        <StyledPriceSubSection>
                            <StyledPriceText size={"1.3em"} weight={"800"}>
                                ₹ 2499 {" "} <br/>
                                <div style={{margin: 0, fontSize: "0.7em", fontWeight: "500", lineHeight: "2"}}>/ Day
                                </div>
                            </StyledPriceText>
                            <div style={{margin: "0 0 0 2.5em"}}>
                                <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929L11.5858 6L7.29289 1.70711C6.90237 1.31658 6.90237 0.683417 7.29289 0.292893C7.68342 -0.0976314 8.31658 -0.0976313 8.70711 0.292893L13.7071 5.29289Z" fill="#263238"/>
                                <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976315 11.3166 -0.0976314 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893C0.683417 -0.0976314 1.31658 -0.0976313 1.70711 0.292893L6.70711 5.29289Z" fill="#263238"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L15.7071 11.7071C15.3166 12.0976 14.6834 12.0976 14.2929 11.7071C13.9024 11.3166 13.9024 10.6834 14.2929 10.2929L18.5858 6L14.2929 1.70711C13.9024 1.31658 13.9024 0.683417 14.2929 0.292893C14.6834 -0.0976314 15.3166 -0.0976313 15.7071 0.292893L20.7071 5.29289Z" fill="#263238"/>
                                </svg>
                            </div>
                        </StyledPriceSubSection>

                    </StyledPriceContainer>
                </StyledBulkPassButton>
            </StyledPriceSection>

        </StyledWorkSpaceContainer>
    )
}