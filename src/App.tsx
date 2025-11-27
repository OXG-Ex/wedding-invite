import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./App.css";
import UsPhoto from "./assets/us_photo.jpg";
import {DaySchedule} from "./components/DaySchedule";
import {Details} from "./components/Details";
import {DressCode} from "./components/DressCode";
import {Location} from "./components/Location";
import {Questions} from "./components/Questions";
import {RsvpForm} from "./components/RsvpForm";
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
      default: "#fbfbfb",
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

      <Container className=" flex flex-col gap-15 pb-20">
        <div className="flex w-full items-center justify-center">
          <img src={UsPhoto} alt="aboba" className="w-136 h-192 object-fill" />
        </div>
        <DaySchedule />
        <Location />
        <Details />
        <DressCode />
        <RsvpForm />

        <Questions />

        <Typography textAlign="center">\\\ тут ещё одно фото///</Typography>

        <Typography variant="h3" fontWeight={700} textAlign="center">
          МЫ БУДЕМ СЧАСТЛИВЫ ВИДЕТЬ ВАС!
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default App;
