import {Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import type {FC} from "react";

export const DressCode: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="w-full justify-center flex">
      <div className="flex flex-col gap-6 items-center">
        <Typography variant={isMobile ? "h4" : "h3"} fontWeight={700}>
          ДРЕСС-КОД
        </Typography>

        <Typography className=" text-center">
          Мы очень ждём и с удовольствием готовимся к нашему незабываемому дню!
        </Typography>
        <Typography className="text-center">
          Поддержите нас вашими улыбками и объятиями, а также красивыми нарядами
          в палитре торжества.
        </Typography>

        <Stack direction="row" className="justify-evenly w-full">
          <div className="w-20 h-20 bg-amber-950 rounded-2xl " />
          <div className="w-20 h-20 bg-black rounded-2xl" />
          <div className="w-20 h-20 bg-red-800 rounded-2xl " />
          <div className="w-20 h-20 bg-emerald-800 rounded-2xl" />
        </Stack>
      </div>
    </div>
  );
};
