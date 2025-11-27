import {Icon, Typography} from "@mui/material";
import type {FC} from "react";
import NewlyWeds from "../assets//icons/newlyweds.svg";
import WeddingLocation from "../assets/icons/wedding-location.svg";
import Dinner from "../assets/icons/wedding-reception.svg";
import Rings from "../assets/icons/wedding-rings.svg";

export const DaySchedule: FC = () => {
  return (
    <div className="w-full justify-center flex">
      <div className="flex flex-col gap-15 items-center">
        <Typography variant="h3" fontWeight={700}>
          ПРОГРАММА ДНЯ
        </Typography>

        <div className="flex gap-4 h-20 items-center">
          <Typography variant="h5" fontWeight={700}>
            12:00
          </Typography>

          <Icon color="primary" sx={{fontSize: 60}}>
            <img src={WeddingLocation} />
          </Icon>

          <div className="flex flex-col gap-4 w-130">
            <Typography fontWeight={700}>Сбор гостей</Typography>
            <Typography>
              Просим взять с собой хорошее настроение и свои улыбки
            </Typography>
          </div>
        </div>

        <div className="flex gap-4 h-20 items-center">
          <Typography variant="h5" fontWeight={700}>
            12:30
          </Typography>
          <Icon color="primary" sx={{fontSize: 60}}>
            <img src={NewlyWeds} />
          </Icon>
          <div className="flex flex-col gap-4 w-130">
            <Typography fontWeight={700}>Свадебная церемония</Typography>
            <Typography>
              На всякий случай приготовьте носовые платочки для трогательного
              момента
            </Typography>
          </div>
        </div>

        <div className="flex gap-4 h-20 items-center">
          <Typography variant="h5" fontWeight={700}>
            14:00
          </Typography>
          <Icon color="primary" sx={{fontSize: 60}}>
            <img src={Dinner} />
          </Icon>
          <div className="flex flex-col gap-4 w-130">
            <Typography fontWeight={700}>Праздничный банкет</Typography>
            <Typography>Время вкусной еды, танцев и развлечений</Typography>
          </div>
        </div>

        <div className="flex gap-4 h-20 items-center">
          <Typography variant="h5" fontWeight={700}>
            23:00
          </Typography>
          <Icon color="primary" sx={{fontSize: 60}}>
            <img src={Rings} />
          </Icon>
          <div className="flex flex-col gap-4 w-130">
            <Typography fontWeight={700}>Окончание мероприятия</Typography>
            <Typography>
              К сожалению, даже такой прекрасный вечер может закончиться
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
