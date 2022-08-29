import * as React from 'react';
export interface AdderCardProps {
    noPaddingContent?: boolean;
    title?: React.ReactNode;
    action?: React.ReactNode;
    children?: any;
    onNextClick?: Function;
    onPreviousClick?: Function;
    onSaveClick?: Function;
    footerChildren?: any;
    showFooter?: boolean;
    bodyHeight?: number;
    headerChildren?: React.Component | Element;
    dimmed?: boolean;
}
export declare const AddCard: ({ noPaddingContent, action, title, onNextClick, onPreviousClick, onSaveClick, children, showFooter: footer, footerChildren, bodyHeight, headerChildren, dimmed, }: AdderCardProps) => JSX.Element;
export declare const HeaderContainer: import("styled-components").StyledComponent<import("@mui/material/").OverridableCardHeader, any, {}, never>;
