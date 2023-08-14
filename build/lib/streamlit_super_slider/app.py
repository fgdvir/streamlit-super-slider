import streamlit as st
from streamlit_super_slider import st_slider

max_val = 1234567890
value = st_slider(0, max_val, max_val-1, key="my_slider")
st.subheader(f"value: {value}")