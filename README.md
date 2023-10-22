# streamlit-super-slider
![](./assets/slider_img.png)

# Streamlit Super Slider

Streamlit Super Slider is a custom component for Streamlit that extends the functionality of the default slider. It provides a more interactive and user-friendly experience with additional features to enhance usability.

## Features

1. Updates Streamlit only on mouse release, not during dragging the mouse.
2. Includes an input text box attached to the slider where changing the value in either updates the value in the other (input text changes the slider and vice versa).
3. Arrow buttons to increase/decrease the value by one, providing a "next" or "previous" button functionality.
4. Built-in keyboard shortcuts for quick navigation: "," (comma) for previous and "." (period) for next.

## Installation

You can install the package via pip:

```pip install streamlit-super-slider```

## Arguments 

| Argument       | Type                                    | Description                                                                                                                                         | Default |
| -------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `min_value`    | int                                      | Minimum value for the slider.                                                                                                                       | 0       |
| `max_value`    | int (optional)                           | Maximum value for the slider. Must be specified if `values` is not provided.                                                                        | None    |
| `default_value`| int (optional)                           | The default value to set the slider to.                                                                                                             | 0       |
| `values`       | Union[List, Dict[int,str], None] (optional) | By default, the slider will have a range from `min_value` to `max_value`. Specify special set of values through a list or dict.                    | None    |
| `dots`         | bool (optional)                          | If True, will show dots on the slider for each step.                                                                                                | False   |
| `steps`        | int (optional)                           | Determines the spacing between the dots.                                                                                                            | None    |
| `key`          | Any (optional)                           | Streamlit key for the component.                                                                                                                    | None    |

## Usage

To use the Streamlit Super Slider in your Streamlit app, you simply need to import it and use the `st_slider` function:

```python
import streamlit as st
from streamlit_super_slider import st_slider

st.title("Streamlit Super Slider Example")

min_value = 0
max_value = 100
default_value = 50

# Use the Streamlit Super Slider component
slider_value = st_slider(min_value, max_value, default_value)

st.write("Slider with range")
value = st_slider(values={0: "zero", 10:'10', 25:'25', max_value: "max"}, key="my_slider2" ,dots=False)
st.write("Slider custom values from dictionary and steps")
value = st_slider(values={0: "zero", 10:'10', 20:'30', 90:'90', max_value: "max"}, key="my_slider2_steps" ,dots=False, steps=10)
st.write("Slider custom values from dictionary, steps and dots")
value = st_slider(values={0: "zero", 10:'10', 20:'30', 90:'90', max_value: "max"}, key="my_slider2_dots_steps" ,dots=True, steps=10)
st.write("Slider with custom values from list")
value = st_slider(values=[0,100,350,34560], key="my_slider3")

st.write(f"Selected value: {slider_value}")
```

## Demo

In the following demo you can see usage of the slider to show images, and all the different ways to chose where to go:
* Keyboard shortcut
* Pressing the arrow buttons
* Changing the value in the input text box
* Dragging the slider

![Demo](./assets/ezgif.com-video-to-gif.gif)

## Contributing

We welcome contributions to the Streamlit Super Slider project. If you'd like to report bugs, request features, or contribute to the code, please [open an issue](https://github.com/fgdvir/streamlit-super-slider/issues) or [submit a pull request](https://github.com/fgdvir/streamlit-super-slider/pulls) on the GitHub repository.
