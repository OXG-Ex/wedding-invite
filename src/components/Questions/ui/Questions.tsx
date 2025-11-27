import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import type {FC} from "react";
import {questions} from "../lib/consts";

export const Questions: FC = () => {
  return (
    <div className="w-full justify-center flex">
      <div className="flex flex-col gap-15 items-center">
        <Typography variant="h3" fontWeight={700} textAlign="center">
          ОТВЕТЫ НА ВОПРОСЫ
        </Typography>
        <div className="flex w-full flex-col gap-1">
          {questions.map((item, idx) => (
            <Accordion elevation={2}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls={`panel${idx}-content`}
                id={`panel${idx}-header`}
              >
                <Typography component="span" variant="h5" fontWeight={700}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};
