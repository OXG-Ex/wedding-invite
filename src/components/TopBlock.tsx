import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import {Stack, Typography} from "@mui/material";
import monogram from "../assets/Monogramm.svg";

import type {FC} from "react";

export const TopBlock: FC = () => {
  return (
    <div className="w-screen h-screen">
      <Stack direction={"row"}>
        <Stack
          direction="column"
          className="justify-center items-center w-[50%] h-screen"
          gap={3}
        >
          <Typography variant="h1" color="primary">
            МЫ
          </Typography>
          <Typography variant="h1">СОЗДАЁМ</Typography>
          <Typography variant="h1">СЕМЬЮ!</Typography>
          <img
            src={monogram}
            className="absolute top-auto left-0 w-[50%] h-[80%] object-fill opacity-20 "
          />
        </Stack>

        <div className="h-screen flex items-end pb-7">
          <KeyboardDoubleArrowDownOutlinedIcon
            color="primary"
            className="animate-pulse"
            sx={{
              width: "40px",
              height: "40px",
            }}
          />
        </div>

        <Stack
          direction="column"
          className="justify-center items-center w-[50%] h-screen px-10"
          gap={6}
        >
          <Typography variant="h3" fontWeight={700}>
            ДОРОГИЕ ГОСТИ!
          </Typography>
          <Typography variant="h5" className="text-center">
            С огромным желанием и радостью мы приглашаем вас разделить с нами
            этот особенный день - нашу свадьбу.
          </Typography>

          <Stack direction={"row"} className="items-center gap-2">
            <Typography variant="h4">10</Typography>
            <div className="border-l-3 border-gray-400 h-full" />
            <Typography variant="h4">10</Typography>
            <div className="border-l-3 border-gray-400 h-full" />
            <Typography variant="h4">2026</Typography>
          </Stack>

          <Typography variant="h5" className="text-center">
            Это будет незабываемое событие, и мы хотим, чтобы вы стали его
            частью.
          </Typography>

          <Typography variant="h4" fontWeight={700}>
            Семён и Дарья
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};
