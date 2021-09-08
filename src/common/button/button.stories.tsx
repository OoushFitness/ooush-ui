import React from "react";
import Button from "./button";

export default {
    title: "Common/Button",
    component: Button,
    argTypes: {
        theme: {
            name: "Theme",
            options: ["primary", "secondary"],
            defaultValue: 'primary',
            description: 'Button theme',
            control: { type: "inline-radio" }
        },
        text: {
            name: "Text",
            defaultValue: 'Click me',
            description: 'Button Text',
            control: { type: "text" }
        },
        textColor: {
            name: "Text Color",
            control: { type: "color" }
        },
        textSize: {
            name: "Text Size",
            defaultValue: 16,
            control: { type: "range", min: 4, max: 60, step: 4 }
        },
        backgroundColor: {
            name: "Background Color",
            control: { type: "color" }
        },
        value: {
            name: "Value",
            defaultValue: "Value",
            description: "Value",
            control: { type: "text" }
        },
        type: {
            name: "Type",
            defaultValue: "button",
            control: { type: "select" },
            options: ["button", "reset", "submit"]
        },
        name: {
            name: "Name",
            defaultValue: "ButtonName",
            description: "Button Name",
            control: { type: "text" }
        },
        disabled: {
            name: "Disabled?",
            defaultValue: false,
            control: { type: "boolean" },
        },
        autofocus: {
            name: "AutoFocus?",
            defaultValue: false,
            control: { type: "boolean" },
        },
        borderWidth: {
            name: "Border Width",
            defaultValue: 1,
            control: { type: "range", min: 0, max: 10, step: 1 }
        },
        borderColor: {
            name: "Border Color",
            control: { type: "color" }
        },
        borderRadius: {
            name: "Border Radius",
            control: { type: "range", min: 0, max: 50, step: 2 }
        },
        height: {
            name: "Height",
            control: { type: "text" }
        },
        width: {
            name: "Width",
            control: { type: "text" }
        },
        handleClick: { action: 'clicked' },
    }
};

export const Primary = ({
    theme,
    text,
    textColor,
    textSize,
    backgroundColor,
    handleClick,
    value,
    type,
    name,
    disabled,
    autofocus,
    borderWidth,
    borderColor,
    borderRadius,
    height,
    width,
    ...rest }) => {
    return <Button
        theme={theme}
        text={text}
        textColor={textColor}
        textSize={textSize}
        backgroundColor={backgroundColor}
        onClick={handleClick}
        value={value}
        type={type}
        name={name}
        disabled={disabled}
        autofocus={autofocus}
        borderWidth={borderWidth}
        borderColor={borderColor}
        borderRadius={borderRadius}
        height={height}
        width={width}
    />
}
