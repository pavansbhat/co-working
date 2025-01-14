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
import { Facilities } from "./components/Facilities/Facilities.tsx";
import { facilities } from "./bhive.constants.ts";
import { useWorkspaces,  } from "./components/query.ts";
import {StyledCardSection} from "./components/Card/card.styles.ts";
import { type Workspace} from "./types.ts"
import {WorkSpace} from "./components/Workspace/Workspace.tsx";
import {Footer} from "./components/Footer/Footer.tsx";



const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 720px) {
    flex-direction: column-reverse;
  }
`;
function App() {

  const url =
      "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json";
  const { data } = useWorkspaces(url) as { data?: Workspace[]; isLoading: boolean; isError: boolean; error?: Error };

  return (
      <>
          <div className={"wrapper"}>
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
                          <PageSubsections
                              bgImage={backgroundImage}
                              width={"65%"}
                              height={"754px"}
                          >
                              <CustomText
                                  variant={TextTypes.PAGE_HEADING}
                                  fontSize={"4em"}
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
                              height={"30em"}
                              margin={"5em"}
                          />
                      </StyledSection>
                      <div
                          style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignContent: "center",
                              margin: "80px 0 0 0",
                              width: "65%",
                          }}
                      >
                          <CustomText
                              variant={TextTypes.SECTION_HEADING}
                              fontSize={"2em"}
                              content={"Why choose us?"}
                          />
                      </div>
                      <StyledSection style={{justifyContent: "space-evenly"}}>
                          <div style={{flex: "1"}}></div>
                          <Facilities height={"8em"} width={"21em"} data={facilities}/>
                          <div style={{flex: "1"}}></div>
                      </StyledSection>
                  </StyledContainer>

              </div>
              <CustomText
                  variant={TextTypes.SECTION_HEADING}
                  fontSize={"2em"}
                  content={"Our Spaces"}
              />
              <StyledCardSection>
                  {
                      data?.map((value: Workspace) => {
                          return <Card component={() => <WorkSpace data={value}
                                                                   img={`https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/${value.images[0]}`}/>}/>
                      })
                  }

              </StyledCardSection>
              <CustomText
                  variant={TextTypes.SECTION_HEADING}
                  fontSize={"2em"}
                  content={"Download our app now"}
              />
              {/*<Footer />*/}
          </div>

      </>

  );
}

export default App;
