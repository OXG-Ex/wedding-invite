import {Typography, useMediaQuery, useTheme} from "@mui/material";
import type {FC} from "react";
import {Slide} from "react-awesome-reveal";
import Restaurant from "../../../assets/restaurant.webp";

export const Location: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="w-full justify-center flex">
      <div className="flex flex-col gap-8 items-center">
        <Slide direction="up" duration={300} fraction={0} triggerOnce>
          <Typography variant={isMobile ? "h4" : "h3"} fontWeight={700}>
            ЛОКАЦИЯ
          </Typography>

          <Typography className="text-center">
            Наша свадьба пройдёт в парк-отеле "Жардин" (зал Виноград)
          </Typography>

          <div className="flex flex-col items-center">
            <Typography>Он находится по адресу:</Typography>

            <Typography className="text-center">
              г. Ростов-на-Дону, ул. Левобережная, 50.
            </Typography>
          </div>

          <img src={Restaurant} className="object-cover " />

          <Typography variant={isMobile ? "h4" : "h3"} fontWeight={700}>
            КАК ДОБРАТЬСЯ?
          </Typography>

          <Typography className=" text-center">
            Для вашего удобства мы запланировали транспорт, который с комфортом
            довезёт вас к ресторану и обратно, чтобы вы смогли отдохнуть и
            повеселиться, в этот день не задумываясь о собственном автомобиле.
            Так же мы подготовили для вас карту, чтобы вы точно добрались и
            порадовали нас своим присутствием, её можно увидеть в конце сайта.
          </Typography>

          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A80269f79db9f72ca2dd6ed4c23ab458cd797ae2926a786bf85e42af04501f6dc&amp;source=constructor"
            height="422"
            width="100%"
          ></iframe>
        </Slide>
      </div>
    </div>
  );
};
