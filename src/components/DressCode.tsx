import {Stack, Typography} from "@mui/material";
import type {FC} from "react";

export const DressCode: FC = () => {
  return (
    <div className="w-full justify-center flex">
      <div className="flex flex-col gap-6 items-center">
        <Typography variant="h3" fontWeight={700}>
          ДРЕСС-КОД
        </Typography>

        <Typography className="w-120 text-center">
          Мы очень ждём и с удовольствием готовимся к нашему незабываемому дню!
        </Typography>
        <Typography className="w-120 text-center">
          Поддержите нас вашими улыбками и объятиями, а также красивыми нарядами
          в палитре торжества.
        </Typography>

        <Stack direction="row" gap={4}>
          <div className="w-20 h-20 bg-white border border-black rounded-2xl " />
          <div className="w-20 h-20 bg-black rounded-2xl" />
          <div className="w-20 h-20 bg-red-800 rounded-2xl " />
          <div className="w-20 h-20 bg-emerald-800 rounded-2xl" />
        </Stack>
      </div>
    </div>
  );
};
