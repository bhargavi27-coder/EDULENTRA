import React from "react";
import "./Home.css";
import homeimg from "../assets/home1.png";
function Home(){
   
     const homeStyle = {
        margin: '0',
        padding: '0',
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        width: '100%',
        overflow: "hidden",

     };
     const headerStyle = {
            // backgroundColor: 'white',
            color: 'white',
            padding: '10px 20px',
            display: 'flex',
            flexDirection:'row',
            alignItems: 'center',
            justifyContent:'space-between',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex:10,
            width: '100%',
            boxSizing: "border-box",
        };
        const heading = {
             background: "linear-gradient(to right, #3bd5f7, #fc30fc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "45px",
    fontWeight: "bold",
    //  display: "inline-block",
        };
        const navbarStyle = {
            display:'flex',
            gap:'25px',
            // background: "linear-gradient(to right, #3bd5f7, #fc30fc)",
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
            fontSize: "24px",
            fontWeight: "bold",
        //  display: "inline-block",
     
        };
        const linkStyle={
        textDecoration: "none",
        // color: "#333",
        fontSize: "18px",
        fontWeight: "600",
  
        };
        const content = {
        textAlign: "center",
        // padding: "60px 20px",
        };
    
    return(
        
        
        <div className="home-container" style={homeStyle}>
            <div style={headerStyle}>
            <h1 className="heading" style={heading}>EduLentra</h1>
            <nav className="navbar" style={navbarStyle}>
                <a href="/" style={linkStyle}>Home</a>
                <a href="#about" style={linkStyle}>About            </a>
                <a href="/highlights" style={linkStyle}>Highlights          </a>
                <a href="/gallery" style={linkStyle}>Gallery            </a>
                <a href="/contact" style={linkStyle}>Contact            </a>
            </nav>
            </div>
            <div className="content" style={content}>
                 <img src={homeimg} alt="Education" className="home-image" />
            </div>
        </div>  
    );

}
export default Home;