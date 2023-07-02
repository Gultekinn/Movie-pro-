import SiteRoot from "../SiteRoot/SiteRoot";
import Contact from "../pages/Site/Contact/Contact";
import ViP from "../pages/Site/VIP/ViP";
import Campaign from "../pages/Site/Campaign/Campaign";
import About from "../pages/Site/About/About";
import Condition from "../pages/Site/Condition/Condition";
import Rule from "../pages/Site/Rule/Rule";
import Home from "../pages/Site/Home/Home";
import Login from "../pages/Site/Login/Login";
import Regist from "../pages/Site/Regist/Regist";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import MovieTable from "../pages/Admin/MovieTable/MovieTable";
import ActivityTable from "../pages/Admin/ActivityTable/ActivityTable";
import ContactTable from "../pages/Admin/ContactTable/ContactTable";
import UserData from "../pages/Admin/UserTable/UserData";
import AdminRoot from "../pages/Admin/AdminRoot/AdminRoot";
import Content from "../layout/Admin/Content/Content";
import  AddMovie from "../pages/Admin/AddMovie/AddMovie"
import DetailMovie from "../pages/Admin/DetailMovie/DetailMovie";
import UpdateMovie from "../pages/Admin/UpdateMovie/UpdateMovie";
import Detailactivity from "../pages/Admin/Detailactivity/Detailactivity";
import Updateactivity from "../pages/Admin/Updateactivity/Updateactivity";
import AddActivity from "../pages/AddActivity/AddActivity";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "vip",
        element: <ViP />,
      },
      {
        path: "campaign",
        element: <Campaign />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "condition",
        element: <Condition />,
      },
      {
        path: "rule",
        element: <Rule />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "regist",
        element: <Regist />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "",
        element: <Content />,
        children: [
          {
            path: "moviedata",
            element: <MovieTable />,
          },
          {
            path: "activitydata",
            element: <ActivityTable />,
          },

          {
            path: "contactdata",
            element: <ContactTable />,
          },
          {
            path: "userdata",
            element: <UserData />,
          },
          {
            path: "addmovie",
            element: <AddMovie />
          },
          {
            path: "movie/:id",
            element: <DetailMovie />
          },
          {
            path:"updatemovie/:id",
            element:<UpdateMovie/>
          },
          {
            path:"activity/:id",
            element:<Detailactivity/>
          },
          {
            path:"updateactivity/:id",
            element:<Updateactivity/>
          },
          {
            path:"addactivity",
            element:<AddActivity/>
          }
        ],
      },
    ],
  },
];
