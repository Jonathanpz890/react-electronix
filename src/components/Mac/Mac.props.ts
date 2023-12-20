import { ReactNode } from "react";

export interface MacProps {
    open: boolean;
    width: number;
    startup?: boolean;
    animateOpen?: boolean;
    openAngle?: number;
    children?: ReactNode;
}