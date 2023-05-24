import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import "./App.scss";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <>
      <CssBaseline />
      <AppRouter />
    </>
  );
}

export default App;
