import { Box, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import SignInPage from "./Page/signin";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogInPage from "./Page";
import HomePage from "./Page/homepage";
import Appointment from "./Page/bookappointment";
import PatientDetailPage from "./Page/patientdetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogInPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/book-appointment",
    element: <Appointment />,
  },
  {
    path: "/patient-detail/:patientId",
    element: <PatientDetailPage />,
  },
]);

function App() {
  return (
    <>
      <ChakraProvider>
        <Box height="100vh">
          <RouterProvider router={router} />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
