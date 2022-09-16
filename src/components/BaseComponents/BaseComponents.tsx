import styled from "styled-components";
import styledBy from "styled-by";

// All components here should extend these so they have the basic
// accessible props
//testing
export const Base = styled.div`
  color: ${(props: any) =>
    props.color ? `${props.color} !important` : props.theme.textColor};
  height: ${(props: any) => props.height};
  width: ${(props: any) => props.width};
`;
interface BaseTextProps {
  uppercase?: boolean;
  capitalize?: boolean;
  light?: boolean;
  bold?: boolean;
  marginLeft?: string;
}

export const BaseText = styled.p<BaseTextProps>`
  color: ${(props: any) =>
    props.color ? `${props.color} !important` : props.theme.textColor};
  line-height: 2;
  ${styledBy(
    "uppercase",
    (props: any) => `
   text-transform: 'uppercase';
`
  )}
  ${styledBy(
    "capitalize",
    (props: any) => `
   text-transform: 'capitalize';
`
  )}
${styledBy(
    "light",
    (props: any) => `
   color: ${props.theme.textColorLight};
`
  )}
${styledBy(
    "bold",
    (props: any) => `
   font-weight: 500;
`
  )}
${styledBy(
    "marginLeft",
    (props: any) => `
   margin-left: ${props.marginLeft};
`
  )}
`;

export const BaseContainer = styled(Base)`
  -webkit-transition: all 500ms ease-out;
  -moz-transition: all 500ms ease-out;
  -o-transition: all 500ms ease-out;
  transition: all 500ms ease-out;

  -webkit-transition: height 0.5s linear;
  -moz-transition: height 0.5s linear;
  -ms-transition: height 0.5s linear;
  -o-transition: height 0.5s linear;
  transition: height 0.5s linear;
`;

interface BaseButtonProps {
  defaultColor?: string;
  errorColor?: string;
  warnColor?: string;
  primaryColor?: string;
  marginLeft?: string;
}

export const BaseButton = styled.button<BaseButtonProps>`
  border: 5px solid black;
  -webkit-transition: all 500ms ease-out;
  -moz-transition: all 500ms ease-out;
  -o-transition: all 500ms ease-out;
  transition: all 500ms ease-out;
  cursor: pointer;
  align-items: center;
  text-align: center;
  margin: auto 0;
  border-radius: 4px;
  padding: 5px;
  font-size: 16px;
  max-height: 32px;
  margin-right: 5px;
  height: ${(props: any) => props.height || "auto"};
  width: ${(props: any) => props.width || "150px"};
  ${styledBy(
    "marginLeft",
    (props: any) => `
   margin-left: ${props.marginLeft};
`
  )}
`;
// DO NOT USE THE SAME VARIABLE NAME AS THE ONES IN PALETTE OR STYLE-PROPS DEFAULT WILL NOT WORK
BaseButton.defaultProps = {
  defaultColor: "default",
  primaryColor: "primary",
  warnColor: "warn",
  errorColor: "error",
};
