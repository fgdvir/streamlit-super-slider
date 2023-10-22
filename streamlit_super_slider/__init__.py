import streamlit.components.v1 as components
from typing import Union, List, Dict
from pathlib import Path

# _RELEASE = False
_RELEASE = True


if _RELEASE:
    curr_dir = Path(__file__).parent / 'frontend/build'
    _component_func = components.declare_component("custom_slider", path=str(curr_dir))
else:
    _component_func = components.declare_component(
        "custom_slider",
        url="http://localhost:3002"
    )
    


def st_slider(min_value=0, max_value=None, default_value=0, values: Union[List, Dict[int,str], None]=None, steps = None, dots=False, key=None):
    """Use this to draw a slider in your Streamlit app.

    Args:
        min_value (int, optional): Min value for the slider. Defaults to 0.
        max_value (_type_, optional): Max Value for the slider. Can be left empty (None) if using values, otherwide, must be specified. Defaults to None.
        default_value (int, optional): The default value to set the slider to. Defaults to 0.
        values (Union[List, Dict[int,str], None], optional): By default, slider will have range from min to max. If you need a special set of values, you can specify them here. If a list is provided, the values will be used as the labels. If a dict is provided, the keys will be used as the position in the slider, and the values will be the labels. Defaults to None.
        dots (bool, optional): If True, will show dots on the slider for each step. Defaults to False.
        steps (int, optional): Steps determines the spacing between the dots. If not specified, will be set to 1 if values is a list, or will be set to max_value//len(values) if values is a dict. Defaults to None.
        key (_type_, optional): streamlit key for the compoent.


    Returns:
        int: The value of the slider
    """
    assert max_value is not None or values is not None, "Either max_value or values must be specified"
    
    
    if values is None:
        slider_values = {(min_value): str(min_value), (max_value): str(max_value)}
    elif isinstance(values, dict):
        slider_values = values
        max_value = max_value if max_value is not None else max(values)
        steps=steps if steps is not None else max(max_value//len(values),1)  # either steps or equal spacing
    elif isinstance(values, list):
        slider_values = {i: str(v) for i, v in enumerate(values)}
        max_value = max_value if max_value is not None else len(values)-1 
    else:
        raise ValueError("values must be None, a list, or a dict")
    
    steps= 1 if steps is None else steps
    component_value = _component_func(key=key, default=default_value,initialValue=default_value, minValue=min_value, maxValue=max_value, marks=slider_values, steps=steps, dots=dots)

    # We could modify the value returned from the component if we wanted.
    # There's no need to do this in our simple example - but it's an option.
    return component_value