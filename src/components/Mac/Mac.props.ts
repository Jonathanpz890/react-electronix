import { ReactNode } from "react";

export interface MacProps {
    startup: boolean;
    animateOpen: boolean;
    open: boolean;
    width: number;
    openAngle: number;
    children: ReactNode;
}