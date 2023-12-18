      import React from "react";
      import ReactDOM from "react-dom/client";

      const HeaderComponent=()=>{
        return (
        <>
           <div className="logo">
            <img  src="https://cdn.dribbble.com/users/6119579/screenshots/14414735/dribble_food_court_4x.png" key="logo" height="90" width="90" alt="not found"/>
            </div>
            <div className="search">
           <input type="text" placeholder="search"/><span><img src="https://icon-library.com/images/search-icon-png-transparent/search-icon-png-transparent-18.jpg" height="20" width="20" alt="search"/></span>
            </div>
    <div className="user">
      <img src="https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png" height="30" width="30" alt="user"/>
    </div>
        </>
        )
      }
      const root=ReactDOM.createRoot(document.getElementById("root"));
      root.render(<HeaderComponent/>);
