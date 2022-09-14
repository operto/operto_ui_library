import React from "react";
import styled from "styled-components";

export const TestComponent = () => {
  return (
    <>
      <StyledText>"Here is some Text</StyledText>
    </>
  );
};

const StyledText = styled.p`
  color: ${(props) => {
    console.log(props.theme);
    return props.theme.primary;
  }};
`;
