export declare const Base: import("styled-components").StyledComponent<"div", any, {}, never>;
interface BaseTextProps {
    uppercase?: boolean;
    capitalize?: boolean;
    light?: boolean;
    bold?: boolean;
    marginLeft?: string;
}
export declare const BaseText: import("styled-components").StyledComponent<"p", any, BaseTextProps, never>;
export declare const BaseContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
interface BaseButtonProps {
    defaultColor?: string;
    errorColor?: string;
    warnColor?: string;
    primaryColor?: string;
    marginLeft?: string;
}
export declare const BaseButton: import("styled-components").StyledComponent<"button", any, BaseButtonProps, never>;
export {};
