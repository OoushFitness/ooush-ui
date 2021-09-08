export interface ButtonProps {
    text: string;
    textColor?: string;
    textSize?: number;
    backgroundColor?: string;
    theme?: string;
    onClick?: any;
    value?: string;
    type?: "button" | "reset" | "submit";
    name?: string;
    disabled: boolean;
    autofocus: boolean;
    borderWidth?: number;
    borderColor?: string;
    borderRadius?: number;
    customClassName?: string;
    height?: string;
    width?: string;
}