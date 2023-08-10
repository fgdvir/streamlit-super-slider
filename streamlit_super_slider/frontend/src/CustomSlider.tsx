import {
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";
import React, { useEffect, useState, useRef } from "react";
import Slider from "rc-slider";
import SliderTooltip from "./SliderTooltip";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useMouseUpHandler,createHandleInputValueChange, createInputChange } from "./callbackHandlers";
import {useKeyboardShortcut} from './useKeyboardShortcut'
import "rc-slider/assets/index.css";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";


type StreamlitTheme = {
  bgColor: string;
  textColor: string;
  primaryColor: string;
  secondaryBackgroundColor: string;
  base: "light" | "dark";
};

const createStreamlitTheme = (streamlitTheme: StreamlitTheme) => {
  const paletteType = streamlitTheme.base === "dark" ? "dark" : "light";
  return createTheme({
    palette: {
      type: paletteType,
      primary: {
        main: streamlitTheme.primaryColor,
      },
    },
  });
};

type NumberOrNumberArray = number | number[];

const MySliderComponent: React.FC<any> = (props) => {
  useEffect(() => Streamlit.setFrameHeight());

  const { minValue, maxValue, initialValue } = props.args;

  const valueRef = useRef(initialValue);
  const [value, setValue] = useState(initialValue);
  const [inputValue, setInputValue] = useState(initialValue);

  const handleOnChange = (newValue: NumberOrNumberArray ): NumberOrNumberArray => {
    setValue(newValue);
    valueRef.current = newValue;
    setInputValue(newValue);
    return newValue;
  };

  const updateStreamlit = () => {
    Streamlit.setComponentValue(valueRef.current);
  };

  useMouseUpHandler(updateStreamlit);
  const handleInputValueChange = createHandleInputValueChange(minValue,maxValue,setInputValue, handleOnChange)
  const handleInputChange = createInputChange(minValue,maxValue,handleOnChange, updateStreamlit)
  
  // Listen to "," and "." to increase/decrease the value
  useKeyboardShortcut(value, handleOnChange, updateStreamlit);


  const marks = {
    [minValue]: minValue,
    [maxValue]: maxValue,
  };

  const { theme } = props;
  const muiTheme = createStreamlitTheme(theme);

  const handleButtonClick = (value: number) => {
    handleOnChange(value);
    updateStreamlit();
  }

  const inputWidth = `${Math.max(70, inputValue.toString().length* 20) }px`;
  console.info("inputWidth", inputWidth);
  const paddingRightByLength = `${Math.max(20, maxValue.toString().length* 3.5) }px`;

  return (
    <ThemeProvider theme={muiTheme}>
    <div style={{ paddingLeft: "20px", paddingRight: paddingRightByLength, paddingTop: "10px"}}>
      
      <div style={{ display: "flex", alignItems: "center" }}>
      <Button variant="contained" color="primary" size="medium"
       onClick={() => handleButtonClick(value - 1)}
          style={{ minWidth: "unset", width: "4px" }}
        >
        &lt;
        </Button>
        <Button variant="contained" color="primary" size="medium"
         onClick={() => handleButtonClick(value + 1)}
          style={{ minWidth: "unset", width: "4px" }}
        >
        &gt;
        </Button>
        <TextField
          type="text"
          value={inputValue}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          onChange={handleInputValueChange}
          onKeyDown={handleInputChange}
          variant="outlined"
          size="small"
          style={{ marginRight: "10px", width: inputWidth, padding: "0" }}
          // className={classes.textField}
        />
        <Slider
          value={value}
          min={minValue}
          max={maxValue}
          marks={marks}
          onChange={handleOnChange}
          trackStyle={{ backgroundColor: theme.primaryColor }}
          handleRender={(renderProps) => {
            return (
              <div {...renderProps.props}>
                <SliderTooltip theme={theme} value={value}>{value}</SliderTooltip>
              </div>
            );
          }}
        />
        
      </div>
    </div>
    </ThemeProvider>
  );
};

export default withStreamlitConnection(MySliderComponent);
