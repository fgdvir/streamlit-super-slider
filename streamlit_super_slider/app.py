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
value = st_slider(values={0: "zero", 10:'10', 20:'30', 90:'90', max_value: "max"}, key="my_slider2_dots_steps" ,dots=True, steps=10, default_value=10)
st.write("Slider with custom values from list")
value = st_slider(values=[0,100,350,34560], key="my_slider3")

st.write(f"Selected value: {slider_value}")