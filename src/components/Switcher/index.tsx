import React from "react";
import { SwitcherContainer } from "./style";

interface ISwitcherProps {
    isToggled: boolean;
    onToggle: () => void;
}

export const Switcher = ({isToggled, onToggle} : ISwitcherProps) => {
  return (
    <SwitcherContainer>
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </SwitcherContainer>
  );
};