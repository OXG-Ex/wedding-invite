import {Chip, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import type {FC} from "react";
import {Slide} from "react-awesome-reveal";

export const DressCode: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="w-full justify-center flex">
      <div className="flex flex-col gap-6 items-center">
        <Slide
          direction="up"
          duration={300}
          fraction={0}
          triggerOnce
          className="w-full"
        >
          <Typography
            variant={isMobile ? "h4" : "h3"}
            fontWeight={700}
            className="text-center"
          >
            ДРЕСС-КОД
          </Typography>

          <Typography className=" text-center">
            Мы очень ждём и с удовольствием готовимся к нашему незабываемому
            дню!
          </Typography>
          <Typography className="text-center">
            Поддержите нас вашими улыбками и объятиями, а также красивыми
            нарядами в палитре торжества. Мы будем рады, если девушки выберут
            вечерние или коктейльные платья, а мужчины — костюм в тонах свадьбы
          </Typography>

          <Stack direction="row" className="justify-evenly w-full">
            <div className="flex flex-col gap-2 items-center">
              <div className="w-20 h-20 bg-amber-900 rounded-2xl " />
              <Chip
                variant="outlined"
                color="default"
                label="Коричневый"
                size={isMobile ? "small" : "medium"}
              />
            </div>

            <div className="flex flex-col gap-2 items-center">
              <div className="w-20 h-20 bg-black rounded-2xl" />
              <Chip
                variant="outlined"
                color="default"
                label="Чёрный"
                size={isMobile ? "small" : "medium"}
              />
            </div>

            <div className="flex flex-col gap-2 items-center">
              <div className="w-20 h-20 bg-red-800 rounded-2xl " />
              <Chip
                variant="outlined"
                color="default"
                label="Бордовый"
                size={isMobile ? "small" : "medium"}
              />
            </div>

            <div className="flex flex-col gap-2 items-center">
              <div className="w-20 h-20 bg-emerald-800 rounded-2xl" />
              <Chip
                variant="outlined"
                color="default"
                label="Изумрудный"
                size={isMobile ? "small" : "medium"}
              />
            </div>
          </Stack>
        </Slide>
      </div>
    </div>
  );
};
