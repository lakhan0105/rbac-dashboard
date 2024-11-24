import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Rootlayout, Login, Overview } from "./Components/index.js";

// create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/" element={<Rootlayout />}>
        {/* Here comes all the other pages that will be shown after clicking the links in the sidebar */}
        <Route index path="/overview" element={<Overview />} />
        <Route path="/trainers" />
        <Route path="/all-members" />
      </Route>

      <Route path="*" element={<Error />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
