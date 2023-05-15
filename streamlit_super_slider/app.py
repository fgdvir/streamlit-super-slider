import streamlit as st
from streamlit_super_slider import st_slider


value = st_slider(0, 100, 50, key="my_slider")
st.subheader(f"value: {value}")