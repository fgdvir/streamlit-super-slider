from setuptools import setup, find_packages

setup(
    name='streamlit-super-slider',
    version='0.2.0',
    author='Dvir Itzkovits',
    author_email='dvir.itzko@gmail.com',
    description='A slider with a lot more features in it than the built in one.',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    url='https://github.com/fgdvir/streamlit-super-slider',
    # packages=['streamlit-super-slider'],
    # packages=['streamlit_super_slider', 'streamlit_super_slider.frontend', 'streamlit_super_slider.frontend.build', 'streamlit_super_slider.frontend.build.static', 'streamlit_super_slider.frontend.build.static.css', 'streamlit_super_slider.frontend.build.static.js'],
    packages=find_packages(),

    include_package_data=True,
    classifiers=[
        "Programming Language :: Python :: 3",],
    keywords=['Python', 'Streamlit', 'React', 'JavaScript'],
    python_requires=">=3.6",
    install_requires=[
        # By definition, a Custom Component depends on Streamlit.
        # If your component has other Python dependencies, list
        # them here.
        "streamlit >= 0.63",
    ],
)
