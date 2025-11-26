import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import "./App.css";
import UsPhoto from "./assets/us_photo.jpg";
import {DaySchedule} from "./components/DaySchedule";
import {Details} from "./components/Details";
import {Location} from "./components/Location";
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

      <div className=" flex flex-col gap-15">
        <TopBlock />
        <div className="flex w-full items-center justify-center">
          <img src={UsPhoto} alt="aboba" className="w-136 h-192 object-fill" />
        </div>
        <DaySchedule />
        <Location />
        <Details />
      </div>
    </ThemeProvider>
  );
};

export default App;
