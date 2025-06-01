import "./App.css";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../routes/routes";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeContext.Provider>
  );
};

export default App;
