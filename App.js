      import React from "react";
      import ReactDOM from "react-dom/client";

      const Header = () => {
        return (
          <header style={headerStyle}>
            <div style={leftContainerStyle}>
              <img src="https://cdn.dribbble.com/users/6119579/screenshots/14414735/dribble_food_court_4x.png" alt="Logo" style={logoStyle} />
            </div>
            <div style={centerContainerStyle}>
              <input type="text" placeholder="Search..." style={inputStyle} />
              <span style={searchIconStyle}>&#128269;</span>
            </div>
            <div style={rightContainerStyle}>
              <span style={userIconStyle}>&#128100;</span>
            </div>
          </header>
        );
      };
      
      // Styles
      const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        background: 'rgb(237 228 228)',
        color: 'white',
      };
      
      const leftContainerStyle = {
        flex: '1',
      };
      
      const logoStyle = {
        width: '50px',
        height: '50px',
      };
      
      const centerContainerStyle = {
        flex: '2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
      
      const inputStyle = {
        padding: '5px',
        marginRight: '5px',
        width: '200px',
      };
      
      const searchIconStyle = {
        fontSize: '20px',
        cursor: 'pointer',
      };
      
      const rightContainerStyle = {
        flex: '1',
        display: 'flex',
        justifyContent: 'flex-end',
      };
      
      const userIconStyle = {
        fontSize: '20px',
        cursor: 'pointer',
      };
      
     

      const root=ReactDOM.createRoot(document.getElementById("root"));
      root.render(<Header/>);
