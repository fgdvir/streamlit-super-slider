import streamlit as st
from aa_data_viewer.custom_widgets.custom_slider import st_slider


value = st_slider(0, 100, 50, key="my_slider")
st.button(f"value: {value}")