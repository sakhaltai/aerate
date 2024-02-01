import React from "react";
import Tooltip from "@mui/material/Tooltip";

// Define a type for your component props
interface TooltipButtonProps {
  tooltipTitle: string;
  buttonText: string;
  onClick: () => void; // Update this if your onClick function needs to take parameters
  buttonClass: string;
}

// Use the type in your component definition
const TooltipButton: React.FC<TooltipButtonProps> = ({
  tooltipTitle,
  buttonText,
  onClick,
  buttonClass,
}) => {
  return (
    <Tooltip title={tooltipTitle} arrow classes={{ tooltip: "tooltip" }}>
      <button className={buttonClass} onClick={onClick}>
        {buttonText}
      </button>
    </Tooltip>
  );
};

export default TooltipButton;
