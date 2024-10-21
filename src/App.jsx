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
import CreateUser from "./pages/CreateUser";
import CreateProduct from "./pages/CreateProduct";
import AllProduct from "./pages/AllProduct";
import AllCategory from "./pages/AllCategory";
import CreateCategory from "./pages/CreateCategory";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route element={<RootLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/alluser" element={<AllUser />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/allcategory" element={<AllCategory />} />
        <Route path="/createcategory" element={<CreateCategory />} />
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
