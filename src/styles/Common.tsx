import { theme } from "./Theme";

type FontPropsType = {
    family?:string;
    weight?:number;
    color?:string;
    lineHeight?:number;
    Fmin?: number;
    Fmax?: number;
} 

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}:FontPropsType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400 };
    color: ${color || theme.colors.font};
    lineHeight: ${lineHeight || 1.2};
     font-size: clamp(${Fmin}px, calc(${Fmin}px + (${Fmax} - ${Fmin}) * ((100vw - 360px) / (1440 - 360))), ${Fmax}px);
    `
    
