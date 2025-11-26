import {Typography} from "@mui/material";
import type {FC} from "react";

export const Details: FC = () => {
  return (
    <div className="w-full justify-center flex">
      <div className="flex flex-col gap-6 items-center">
        <Typography variant="h4" fontWeight={700}>
          ДЕТАЛИ
        </Typography>

        <Typography className="w-140 text-center">
          Ваши улыбки и смех подарят нам незабываемое счастье в этот день, а
          пожелания в конвертах помогут осуществить наши мечты!
        </Typography>

        <Typography variant="h4" fontWeight={700}>
          ~
        </Typography>

        <Typography className="w-140 text-center">
          Приятным комплиментом для нас вместо цветов будет бутылочка вашего
          любимого вина, которую мы откроем на ближайшем совместном празднике.
        </Typography>

        <Typography variant="h4" fontWeight={700}>
          ~
        </Typography>

        <Typography className="w-140 text-center">
          Будем благодарны, если вы воздержитесь от криков "Горько" на
          празднике, ведь поцелуй - это знак выражения чувств, он не может быть
          по заказу.
        </Typography>
      </div>
    </div>
  );
};
