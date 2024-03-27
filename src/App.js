import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import { Home, InvoiceForm, EditInvoice,Error} from "./pages";
import LandingPage from "./components/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Upgrade from "./components/Upgrade";
import SignUp from "./components/Signup/SignUp";
const router = createBrowserRouter([
  {
    path: "/SignUp",
    element: <SignUp/>,
    errorElement:<Error/>
  },
  {
    path: "/Upgrade",
    element: <Upgrade/>,
    errorElement:<Error/>
  },
  {
    path: "/",
    element: <LandingPage />,
    errorElement:<Error/>
  },
  {
    path: "/Home",
    element: <Home />,
    errorElement:<Error/>
  },
  {
    path: "/create-invoice",
    element: <InvoiceForm />,
    errorElement:<Error/>,
  },
  {
    path: "/edit-invoice/:id",
    element: <EditInvoice />,
    errorElement:<Error/>,
  },
]);

const App = () => {
  return (
    <div className="App d-flex flex-column align-items-center w-100">
      <Container>
        <RouterProvider router={router} />
      </Container>
    </div>
  );
};

export default App;
