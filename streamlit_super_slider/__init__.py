import streamlit.components.v1 as components
from pathlib import Path

# _RELEASE = False
_RELEASE = True


if _RELEASE:
    curr_dir = Path(__file__).parent / 'frontend/build'
    _component_func = components.declare_component("custom_slider", path=str(curr_dir))
else:
    _component_func = components.declare_component(
        "custom_slider",
        url="http://localhost:3001"
    )
    


def st_slider(min_value, max_value, default_value=0, key=None):
    
    component_value = _component_func(key=key, default=default_value,initialValue=default_value, minValue=min_value, maxValue=max_value)

    # We could modify the value returned from the component if we wanted.
    # There's no need to do this in our simple example - but it's an option.
    return component_value