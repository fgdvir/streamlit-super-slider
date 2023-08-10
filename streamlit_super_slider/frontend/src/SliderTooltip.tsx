// SliderTooltip.tsx

import React from "react";



interface SliderTooltipProps {
  children: React.ReactNode;
  value: number;
  theme: any;
}

const SliderTooltip: React.FC<SliderTooltipProps> = ({ children, value,  theme={} }) => {
    const inputWidth = `${Math.min(0, -value.toString().length* 40 ) + 40}%`;
    console.log(`translate(${inputWidth}, -100%)`)
    const themeTooltip = {
        ...theme,
        color: theme.color || "red",
        fontSize: theme.fontSize || "14px",
        fontFamily: theme.fontFamily || "Source Sans Pro, mono",
        whiteSpace: theme.whiteSpace || "nowrap",
        position: "relative",
        transform: `translate(${inputWidth}, -100%)`
      }
  

  return (
    <div style={themeTooltip}>
      {children}
    </div>
  );
};

export default SliderTooltip;
