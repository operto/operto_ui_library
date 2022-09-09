import React from 'react';
declare type SettingCardProps = {
    title?: string;
    subtitle?: string;
    description?: string;
    children?: React.ReactNode;
    footerChildren?: React.ReactNode;
};
export declare const MainLabel: import("styled-components").StyledComponent<import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").TypographyTypeMap<{}, "span">>, any, {}, never>;
export declare const SettingCard: React.FC<SettingCardProps>;
export {};
