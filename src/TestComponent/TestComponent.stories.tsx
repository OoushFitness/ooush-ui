import React from "react";
import TestComponent from "./TestComponent";

export default {
  title: "TestComponent",
  component: TestComponent,
  argTypes: {
    theme: {
      name: "Theme",
      options: ["primary", "secondary"],
      control: { type: "inline-radio" }
    },
    borderWidth: {
      name: "Border Width",
      control: { type: "range", min: 0, max: 10, step: 1 }
    },
    borderColor: {
      name: "Border Color",
      control: { type: "color" }
    },
    borderStyle: {
      name: "Border Style",
      control: { type: "select" },
      options: ["solid", "dotted", "dashed", "double", "groove", "ridge", "inset", "outset"]
    }
  }
};

export const Primary = ({ theme, borderWidth, borderColor, borderStyle, ...rest }) => {
  return <TestComponent theme={theme} borderWidth={borderWidth} borderColor={borderColor} borderStyle={borderStyle} />
}
