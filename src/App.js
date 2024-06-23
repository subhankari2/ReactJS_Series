      import React,{Suspense, lazy} from "react";
      import ReactDOM from "react-dom/client";      
      import Header from "./components/Header";
      import Body from "./components/Body"
      import Footer from "./components/Footer";
      import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
      import About from "./components/About";
      import Error from "./components/Error";
      import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

const Grocery=lazy(()=>import("./components/GroceryStore"))
      const AppLayout=()=>{
        return (
          <>
          <Header/>
          <Outlet/>
          <Footer/>
          </>
        );
      }

      const appRouter=createBrowserRouter([
        {
          path:"/",
          element:<AppLayout/>,
          children:[
            
            {
              path:"/",
            element:<Body/>
            },
            {
              path:"/about",
            element:<About/>
            },
            {
              path:"/contact",
            element:<Contact/>
            },
            {
              path:"/menu/:id",
              element:<RestaurantMenu/>
            },
            {
path:"/grocery",
element:<Suspense fallback={<p>Loading...</p>}> <Grocery/></Suspense>
            }
          ],
          errorElement:<Error />
        }
      ]);
      
      const root=ReactDOM.createRoot(document.getElementById("root"));
      root.render(<RouterProvider router={appRouter} />);
