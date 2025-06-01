import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("../src/Pages/HomePage"));
const UseRefPage = lazy(() => import("../src/Pages/UseRefPage"));
const UseMemoPage = lazy(() => import("../src/Pages/UseMemoPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={"loading..."}>
        <HomePage />
      </Suspense>
    ),
  },
  { 
    path: "/useRef",
    element: (
      <Suspense fallback={"loading..."}>
        <UseRefPage />
      </Suspense>
    ),
  },
  {
    path: "/useMemo",
    element: (
      <Suspense fallback={"loading"}>
        <UseMemoPage />
      </Suspense>
    ),
  },
]);
