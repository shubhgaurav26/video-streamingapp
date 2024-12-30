import { Provider } from "react-redux";
import "./App.css";
import Body from "./component/Body";
import Head from "./component/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MainContainer from "./component/MainContainer";
import WatchPage from "./component/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer/>,
      },
      {
        path: "/watch",
        element: <WatchPage/>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-blue-100 text-gray-800 min-h-screen">
    <Provider store={store}>
      <div className="App">
        <Head/>  
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
     </div>
  );
}

export default App;
