import { createBrowserRouter } from "react-router-dom";
import HomePage from '../src/Pages/HomePage'
import { UseRefPage } from "../src/Pages/UseRefPage";
import  UseMemoPage  from "../src/Pages/UseMemoPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/useRef",
    element: <UseRefPage />,
  },
  {
    path: "/useMemo",
    element: <UseMemoPage />,
  },
]);
