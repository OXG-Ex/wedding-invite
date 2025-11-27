import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import type {FC} from "react";

export const Questions: FC = () => {
  return (
    <div className="w-full justify-center flex">
      <div className="flex flex-col gap-15 items-center">
        <Typography variant="h3" fontWeight={700} textAlign="center">
          ОТВЕТЫ НА ВОПРОСЫ
        </Typography>
        <div className="flex w-full flex-col gap-1">
          <Accordion elevation={2}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span" variant="h5" fontWeight={700}>
                Будет ли дресс-код?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Мы будем рады, если девушки выберут вечерние или коктейльные
                платья в пастельных тонах, а мужчины — костюм.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={2}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span" variant="h5" fontWeight={700}>
                Нужно ли дарить цветы?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Просим вас не дарить цветы, так как на следующий день мы улетаем
                в свадебное путешествие и не успеем насладиться красивыми
                букетами.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={2}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span" variant="h5" fontWeight={700}>
                Какие подарки предпочтительны?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Мы составили wish-лист подарков, которые были бы нам особенно
                приятны или полезны. Но мы будем рады и сюрпризам, а также
                поздравлениям в конвертах.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={2}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography component="span" variant="h5" fontWeight={700}>
                Возможно ли приехать на своём автомобиле?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Да, на территории отеля имеется парковка. Для бронирования места
                просим заранее сообщить марку и номер автомобиля.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={2}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel5-content"
              id="panel5-header"
            >
              <Typography component="span" variant="h5" fontWeight={700}>
                Кому можно задать вопросы по организации мероприятия?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Наш свадебный организатор — Елена с радостью ответит на ваши
                вопросы. Ее номер телефона: +7 (ххх) ххх-хх-хх.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
