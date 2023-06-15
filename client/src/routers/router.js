import SiteRoot from "../SiteRoot/SiteRoot";
import Contact from "../pages/Site/Contact/Contact";
import Movie from "../pages/Site/Movie/Movie";
import ViP from "../pages/Site/VIP/ViP";
import Campaign from "../pages/Site/Campaign/Campaign";
import About from "../pages/Site/About/About";
import AdminRoot from "../AdminRoot/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Cinema from "../pages/Site/Cinema/Cinema";
import Condition from "../pages/Site/Condition/Condition";
import Rule from "../pages/Site/Rule/Rule";
import Home from "../pages/Site/Home/Home";

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
        path:"movie",
        element:<Movie/>

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
        path:"cinema",
        element:<Cinema/>
      },
      {
        path:"condition",
        element:<Condition/>
      },
      {
        path:"rule",
        element:<Rule/>
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
