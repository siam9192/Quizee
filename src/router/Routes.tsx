import { Children } from "react";
import App from "../App";
import CommonLayout from "../component/layout/CommonLayout";
import Home from "../pages/Home";
import QuizPage from "../pages/QuizPage";
import RankingPage from "../pages/RankingPage";
import ProfilePage from "../pages/ProfilePage";



const routes = [
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CommonLayout />,
        children:[
          {
            path: "",
            element: <Home />
          },
          {
            path: "quiz",
            element: <QuizPage/>
          },
          {
            path: "ranking",
            element: <RankingPage/>
          },
          {
            path: "profile",
            element: <ProfilePage/>
          },
        ]
      }
    ],

  },
];

export default routes;
