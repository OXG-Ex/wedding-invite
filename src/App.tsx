import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import "./App.css";
import UsPhoto from "./assets/us_photo.jpg";
import {DaySchedule} from "./components/DaySchedule";
import {TopBlock} from "./components/TopBlock";

const theme = createTheme({
  typography: {
    fontFamily: ["Transforma Mix_Trial"].join(","),
  },
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

      <div className=" flex flex-col gap-8">
        <TopBlock />
        <div className="flex w-full items-center justify-center">
          <img src={UsPhoto} alt="aboba" className="w-136 h-192 object-fill" />
        </div>
        <DaySchedule />
      </div>
    </ThemeProvider>
  );
};

export default App;
