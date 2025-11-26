import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import "./App.css";
import {TopBlock} from "./components/TopBlock";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#a20005",
    },
    secondary: {
      main: "#009c67",
    },
    background: {
      default: "#ffffff",
      paper: "#efefef",
    },
  },
});

export const App = () => {
  console.log(123);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBlock />
    </ThemeProvider>
  );
};

export default App;
