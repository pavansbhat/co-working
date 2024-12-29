import "./App.css";
import { CustomIcons } from "./components/Icon/CustomIcons.tsx";
import MdPhone from "@mui/icons-material/Phone";
import { Header } from "./components/Header/Header.tsx";
import backgroundImage from "./assets/pageBackground.svg";
import coworking from "./assets/Coworking_vid_1.svg";
import bgImage from "./assets/bgimage.svg";
import { PageSubsections } from "./components/PageSubsections.tsx";
import styled from "styled-components";
import { CustomText } from "./components/Text/CustomText.tsx";
import { TextTypes } from "./components/Text/text.types.ts";
import { Card } from "./components/Card/Card.tsx";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
`;
function App() {
  return (
    <div>
      <div>
        <Header>
          <CustomIcons
            component={MdPhone}
            size={"16"}
            width={"0px"}
            color={"#FFBB00"}
          />
        </Header>
      </div>
      <div>
        <StyledContainer>
          <StyledSection>
            <PageSubsections bgImage={backgroundImage} width={"65%"}>
              <CustomText
                variant={TextTypes.PAGE_HEADING}
                fontSize={"36px"}
                content={
                  "Host your meeting with world-class amenities. Starting at "
                }
                colouredContent={"₹199/-!"}
                contentColor={"#FFBB00"}
              />
            </PageSubsections>
            <PageSubsections
              bgImage={bgImage}
              fgImage={coworking}
              width={"35%"}
            />
          </StyledSection>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignContent: "center",
              width: "65%",
            }}
          >
            <CustomText
              variant={TextTypes.SECTION_HEADING}
              fontSize={"24px"}
              content={"Why choose us "}
            />
          </div>
          <StyledSection>
            <Card height={"80px"} width={"200px"} />
            <Card height={"80px"} width={"200px"} />
          </StyledSection>
        </StyledContainer>
      </div>
    </div>
  );
}

export default App;
