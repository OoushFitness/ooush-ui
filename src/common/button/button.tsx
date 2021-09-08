import React from "react";
import { ButtonProps } from "./button.types";
import "./button.scss";

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
        }}
    >
        {text}
    </button>
);

export default Button;
