import {Typography, useMediaQuery, useTheme} from "@mui/material";
import type {FC} from "react";

export const Details: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="w-full justify-center flex">
      <div className="flex flex-col gap-6 items-center">
        <Typography variant={isMobile ? "h4" : "h3"} fontWeight={700}>
          ДЕТАЛИ
        </Typography>

        <Typography className=" text-center">
          Ваши улыбки и смех подарят нам незабываемое счастье в этот день, а
          пожелания в конвертах помогут осуществить наши мечты!
        </Typography>

        <Typography variant={isMobile ? "h3" : "h2"} fontWeight={700}>
          ~
        </Typography>

        <Typography className=" text-center">
          Будем благодарны, если вы воздержитесь от криков "Горько" на
          празднике, ведь поцелуй — это знак выражения чувств, он не может быть
          по заказу.
        </Typography>

        <Typography variant={isMobile ? "h3" : "h2"} fontWeight={700}>
          ~
        </Typography>

        <Typography className="text-center">
          Мы хотим, чтобы в день праздника все смогли насладиться происходящим,
          поэтому, если в течении мероприятия у вас появятся вопросы, их можно
          задать координатору свадьбы и свидетелям.
        </Typography>
      </div>
    </div>
  );
};
