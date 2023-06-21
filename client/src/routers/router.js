import SiteRoot from "../SiteRoot/SiteRoot";
import Contact from "../pages/Site/Contact/Contact";
import ViP from "../pages/Site/VIP/ViP";
import Campaign from "../pages/Site/Campaign/Campaign";
import About from "../pages/Site/About/About";
import AdminRoot from "../AdminRoot/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Condition from "../pages/Site/Condition/Condition";
import Rule from "../pages/Site/Rule/Rule";
import Home from "../pages/Site/Home/Home";
import Login from "../pages/Site/Login/Login";
import Regist from "../pages/Site/Regist/Regist";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
        {
            path:"",
            element:<Home/>
        },
     
      
      {
        path:"vip",
        element:<ViP/>
      },
      {
        path:"campaign",
        element:<Campaign/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"about",
        element:<About/>
      },
   
      {
        path:"condition",
        element:<Condition/>
      },
      {
        path:"rule",
        element:<Rule/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"regist",
        element:<Regist/>
      }

    ],
  },

  {
    path:"/admin",
    element:<AdminRoot/>,
    children:[{
        path:"",
        element:<Dashboard/>

    }]
  }
];
