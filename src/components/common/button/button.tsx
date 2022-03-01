import React from "react";
import "./button.module.scss";

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
    disabled?: boolean;
    autofocus?: boolean;
    borderWidth?: number;
    borderColor?: string;
    borderRadius?: number;
    customClassName?: string;
    height?: string;
    width?: string;
    cursor?: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    textColor,
    textSize,
    backgroundColor,
    theme = "primary",
    onClick,
    value,
    type = "button",
    name,
    disabled = false,
    autofocus = false,
    borderWidth,
    borderColor,
    borderRadius,
    customClassName,
    height,
    width,
    cursor,
}) => (
    <button
        type={type}
        value={value}
        onClick={onClick}
        disabled={disabled}
        autoFocus={autofocus}
        name={name}
        className={`button button_${theme} ${customClassName}`}
        style={{
            border: borderColor && `${borderWidth || 1}px solid ${borderColor}`,
            borderRadius: borderRadius && `${borderRadius || 4}px`,
            height: height,
            width: width,
            color: textColor,
            background: backgroundColor,
            fontSize: textSize,
            cursor: cursor,
        }}
    >
        {text}
    </button>
);

export default Button;
