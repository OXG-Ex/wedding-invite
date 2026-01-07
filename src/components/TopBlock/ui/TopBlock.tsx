import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import {Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Slide, Zoom} from "react-awesome-reveal";
import monogram from "../../../assets/Monogramm.svg";

import clsx from "clsx";
import type {FC} from "react";

const names = [
  "Дорогие Максим и Лена!",
  "Дорогие Артём и Алёна!",
  "Дорогой Олег!",
];

export const TopBlock: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const topText = names[Number.parseInt(urlParams.get("nm") || "255")];

  return (
    <div className="">
      {isMobile && (
        <Typography
          className="absolute top-10 text-center w-full"
          variant={isMobile ? "h6" : "h5"}
        >
          ПРИГЛАШЕНИЕ НА СВАДЬБУ
        </Typography>
      )}
      <Stack direction={isMobile ? "column" : "row"}>
        <Stack
          direction="column"
          className={clsx(
            "justify-center items-center  h-screen",
            isMobile ? "w-full" : "w-[50%]"
          )}
          gap={3}
        >
          <Typography variant={isMobile ? "h2" : "h1"} color="primary">
            МЫ
          </Typography>
          <Typography variant={isMobile ? "h2" : "h1"}>СОЗДАЁМ</Typography>
          <Typography variant={isMobile ? "h2" : "h1"}>СЕМЬЮ!</Typography>
          <Zoom
            triggerOnce
            className={clsx(
              "absolute top-auto left-auto  h-[80%] object-fill",
              isMobile ? "w-[90%]" : "w-[50%]"
            )}
            delay={300}
          >
            <img src={monogram} className=" w-full h-full opacity-20" />
          </Zoom>

          {isMobile && (
            <div className="absolute bottom-10 w-full flex flex-col gap-2 items-center">
              <Typography fontWeight={700} variant="h6">
                СЕМЁН И ДАРЬЯ
              </Typography>
              <Stack direction={"row"} className="items-center gap-1 h-full">
                <Typography variant="body1">10</Typography>
                <div className="border-l-2 border-red-800 h-6" />
                <Typography variant="body1">10</Typography>
                <div className="border-l-2 border-red-800 h-6" />
                <Typography variant="body1">2026</Typography>
              </Stack>
              <Slide direction="down">
                <KeyboardDoubleArrowDownOutlinedIcon
                  color="primary"
                  className="animate-pulse mt-5"
                  fontSize="medium"
                />
              </Slide>
            </div>
          )}
        </Stack>

        {!isMobile && (
          <div className="h-screen flex items-end pb-7">
            <Slide direction="down">
              <KeyboardDoubleArrowDownOutlinedIcon
                color="primary"
                className="animate-pulse"
                sx={{
                  width: "40px",
                  height: "40px",
                }}
              />
            </Slide>
          </div>
        )}

        <Stack
          direction="column"
          className={clsx(
            "justify-center items-center w-[50%] px-10",
            isMobile ? "w-full" : "w-[50%]  h-screen"
          )}
          gap={6}
        >
          <Typography
            variant={isMobile ? "h4" : "h3"}
            fontWeight={700}
            className="text-center"
          >
            {topText || "ДОРОГИЕ ГОСТИ!"}
          </Typography>
          <Typography variant={isMobile ? "h6" : "h5"} className="text-center">
            С огромным волнением и радостью мы приглашаем вас разделить с нами
            этот особенный день - нашу свадьбу.
          </Typography>

          <Stack direction={"row"} className="items-center gap-2">
            <Typography variant={isMobile ? "h4" : "h3"}>10</Typography>
            <div
              className={clsx(
                "border-l-3 border-red-800 ",
                isMobile ? "h-10" : "h-full"
              )}
            />
            <Typography variant={isMobile ? "h4" : "h3"}>10</Typography>
            <div
              className={clsx(
                "border-l-3 border-red-800 ",
                isMobile ? "h-10" : "h-full"
              )}
            />
            <Typography variant={isMobile ? "h4" : "h3"}>2026</Typography>
          </Stack>

          <Typography variant={isMobile ? "h6" : "h5"} className="text-center">
            Это будет незабываемое событие, и мы хотим, чтобы вы стали его
            частью.
          </Typography>

          {isMobile && (
            <Typography
              variant={isMobile ? "h3" : "h2"}
              fontWeight={700}
              className="text-center"
            >
              ~
            </Typography>
          )}
          {!isMobile && (
            <Typography variant={isMobile ? "h4" : "h3"} fontWeight={700}>
              Семён и Дарья
            </Typography>
          )}
        </Stack>
      </Stack>
    </div>
  );
};
