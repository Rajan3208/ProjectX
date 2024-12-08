import streamlit as st

def main():
    st.title("Project X")
    
    st.markdown("""
    ## Colab Notebook Link
    
    Still Working:
    
    """)
    
    # Create a button that opens the Colab notebook
    if st.button("Open G Colab Notebook"):
        st.markdown("""
        <a href="https://colab.research.google.com/drive/1w1DJXh3w1SPmRIYv8#scrollTo=czZZDSdxRcYB&uniqifier=1" 
           target="_blank" 
           style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; 
           color: white; text-decoration: none; border-radius: 5px;">
           Open Notebook
        </a>
        """, unsafe_allow_html=True)
    
    # Optional: Display the link as text
    st.markdown("""
    ### Direct Link
    If the button doesn't work, you can copy and paste this link:
    
    https://colab.research.google.com/drive/rajan11w1DJXh3wphJXcM-aCUbWvB-1SPmRIYv8#scrollTo=czZZDSdxRcYB&uniqifier=1
    """)

if __name__ == "__main__":
    main()
