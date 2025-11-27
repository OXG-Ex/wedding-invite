import {Typography} from "@mui/material";
import type {FC} from "react";
import Restaurant from "../../../assets/restaurant.webp";

export const Location: FC = () => {
  return (
    <div className="w-full justify-center flex">
      <div className="flex flex-col gap-8 items-center">
        <Typography variant="h3" fontWeight={700}>
          ЛОКАЦИЯ
        </Typography>

        <Typography>
          Наша свадьба пройдёт в парк-отеле "Жардин" (зал Виноград)
        </Typography>

        <div className="flex flex-col items-center">
          <Typography>Он находится по адресу:</Typography>

          <Typography>г. Ростов-на-Дону, ул. Левобережная, 50.</Typography>
        </div>

        <img src={Restaurant} className="object-fill w-140" />

        <Typography variant="h3" fontWeight={700}>
          КАК ДОБРАТЬСЯ?
        </Typography>

        <Typography className="w-120 text-center">
          Мы подготовили для вас карту, чтобы вы точно добрались и порадовали
          нас своим присутствием
        </Typography>

        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A80269f79db9f72ca2dd6ed4c23ab458cd797ae2926a786bf85e42af04501f6dc&amp;source=constructor"
          width="560"
          height="422"
        ></iframe>
      </div>
    </div>
  );
};
