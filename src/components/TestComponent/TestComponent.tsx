import React from "react";
import "./TestComponent.scss";

export interface TestComponentProps {
  theme: "primary" | "secondary";
  borderWidth: number;
  borderColor: string;
  borderStyle: string;
}


const TestComponent: React.FC<TestComponentProps> = ({ theme, borderWidth, borderColor, borderStyle }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
    style={{ borderWidth: borderWidth && `${borderWidth}px`, borderColor: borderColor && borderColor, borderStyle: borderStyle && borderStyle }}
  >
    <h1 className="heading">Ooush!</h1>
    <h2>I am the test component</h2>
  </div>
);

export default TestComponent;
