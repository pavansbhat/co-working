import { ReactNode } from "react";
import styled from "styled-components";
import logo from "../../assets/logo-bhive.svg";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: fixed;
  background-color: #fff;
`;

const StyledContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.img`
  height: 20px;
  padding: 5px;
  margin: 5px;
`;

const StyledChildContainer = styled.div`
  margin: 5px;
`;

export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <div>
          <StyledLogo src={logo} alt={"logo"} />
        </div>
        <StyledChildContainer>{children}</StyledChildContainer>
      </StyledContainer>
    </StyledHeader>
  );
};
