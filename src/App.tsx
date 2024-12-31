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
import { useWorkspaces } from "./components/query.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import WorkspaceList from "./WorkspaceList";

const queryClient = new QueryClient();

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
  const { data, isLoading, isError, error } = useWorkspaces();
  return (
    <QueryClientProvider client={queryClient}>
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
                margin: "50px 0 0 0",
                width: "65%",
              }}
            >
              <CustomText
                variant={TextTypes.SECTION_HEADING}
                fontSize={"24px"}
                content={"Why choose us?"}
              />
            </div>
            <StyledSection style={{ justifyContent: "space-evenly" }}>
              <div style={{ flex: "1" }}></div>
              <Facilities height={"80px"} width={"200px"} data={facilities} />
              <div style={{ flex: "1" }}></div>
            </StyledSection>
          </StyledContainer>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
