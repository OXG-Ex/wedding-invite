import {Icon, Typography, useMediaQuery, useTheme} from "@mui/material";
import type {FC} from "react";
import {Slide} from "react-awesome-reveal";
import {scheduleItems} from "../lib/consts";

export const DaySchedule: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="w-full justify-center flex">
      <div className="flex flex-col gap-15 items-center">
        <Typography variant={isMobile ? "h4" : "h3"} fontWeight={700}>
          ПРОГРАММА ДНЯ
        </Typography>

        <Slide duration={300} fraction={0} direction="left" triggerOnce>
          {scheduleItems.map(({icon, subtitle, time, title}, idx) => (
            <div className="flex gap-4 h-20 items-center" key={idx}>
              <Typography variant={isMobile ? "h6" : "h5"} fontWeight={700}>
                {time}
              </Typography>

              <Icon color="primary" sx={{fontSize: 60}}>
                <img src={icon} />
              </Icon>

              <div className="flex flex-col gap-4 ">
                <Typography fontWeight={700}>{title}</Typography>
                <Typography>{subtitle}</Typography>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};
