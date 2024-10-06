import RootLayout from "./components/layout/RootLayout";
import Sidebar from "./components/Sidebar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AllUser from "./pages/AllUser";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route element={<RootLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="alluser" element={<AllUser />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
