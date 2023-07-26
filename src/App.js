import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./pages/layout";
import AboutUs from "./pages/about-us";
import ContactUs from "./pages/contact-us";
import Store from "./pages/store";
import Library from "./pages/library";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routerConfig} />
    </>
  );
}

export default App;
