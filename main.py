import streamlit as st

def main():
    st.title("Project X")
    
    st.markdown("""
    ## Colab Notebook Link
    
    Still Working:
    
    """)
    
    # Create a button that opens the Colab notebook
    if st.button("Open Colab Notebook"):
        st.markdown("""
        <a href="https://colab.research.google.com/drive/1aERdZDJdqINbNh_O9mIn4il_eJo3s60G" 
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
    
    https://colab.research.google.com/drive/1aERdZDJdqINbNh_O9mIn4il_eJo3s60GrajanX
    """)

if __name__ == "__main__":
    main()
