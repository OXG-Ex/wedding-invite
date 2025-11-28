import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import clsx from "clsx";
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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <TopBlock />

      <Container className=" flex flex-col gap-15 pb-20" maxWidth="md">
        <div className={clsx("flex w-full items-center justify-center")}>
          <img
            src={UsPhoto}
            alt="aboba"
            className={clsx(" object-cover", !isMobile && "h-[90vh]")}
          />
        </div>
        <DaySchedule />
        <Location />
        <Details />
        <DressCode />
        <RsvpForm />

        <Questions />

        <Typography textAlign="center">\\\ тут ещё одно фото///</Typography>

        <Typography
          variant={isMobile ? "h4" : "h3"}
          fontWeight={700}
          textAlign="center"
        >
          МЫ БУДЕМ СЧАСТЛИВЫ ВИДЕТЬ ВАС!
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default App;
