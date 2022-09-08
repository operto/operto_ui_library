import React from "react";

import styled from "styled-components";
import { Collapse } from "@mui/material";
import { BaseContainer } from "components/BaseComponents/BaseComponents";

interface TableActionBarProps {
  endSection?: any;
  startSection?: any;
  showSecondary?: boolean;
  secondaryContent?: any;
  fullWidth?: boolean;
  isMobile?: boolean;
}

export const TableActionBar = ({
  endSection,
  startSection,
  showSecondary,
  secondaryContent,
  fullWidth,
  isMobile,
}: TableActionBarProps) => {
  return (
    <MainContainer isMobile={isMobile}>
      <PrimaryContainer>
        {startSection && (
          <StartSection isMobile={isMobile} fullWidth={fullWidth}>
            {startSection}
          </StartSection>
        )}
        {endSection && <EndSection>{endSection}</EndSection>}
      </PrimaryContainer>
      <SecondaryContainer>
        <Collapse in={showSecondary}>
          <SecondaryActionBar>{secondaryContent}</SecondaryActionBar>
        </Collapse>
      </SecondaryContainer>
    </MainContainer>
  );
};

export const Base = styled.div`
  color: ${(props: any) =>
    props.color ? `${props.color} !important` : props.theme.textColor};
  height: ${(props: any) => props.height};
  width: ${(props: any) => props.width};
`;

const SecondaryActionBar = styled.div`
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SecondaryContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background-color: ${(props) => props.theme.sideBarColor};
  z-index: 2;
`;

const PrimaryContainer = styled(BaseContainer)<{
  isMobile?: boolean;
  fullWidth?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  height: 40px;
`;
const StartSection = styled(BaseContainer)<{
  isMobile?: boolean;
  fullWidth?: boolean;
}>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${(props) => props.isMobile && props.fullWidth && "100%"};
  margin-right: ${(props) => props.isMobile && "0.875rem"};
`;

const EndSection = styled(BaseContainer)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div + button {
    margin-left: 10px;
  }
  padding-bottom: 4px;
`;

const MainContainer = styled(BaseContainer)<{ isMobile: boolean }>`
  background-color: ${(props) => props.theme.containerAccentBGColor};
  position: relative;
  border-top-left-radius: 10px 10px;
  border-top-right-radius: 10px 10px;
  border-color: ${(props) => props.theme.borderColor};
  border-width: 1px;
  border-style: solid;
  padding: ${(props) => (props.isMobile ? "12px" : "12px 24px 12px")};
`;
