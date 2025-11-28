import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type {FC} from "react";
import {questions} from "../lib/consts";

export const Questions: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="w-full justify-center flex">
      <div className="flex flex-col gap-15 items-center">
        <Typography
          variant={isMobile ? "h4" : "h3"}
          fontWeight={700}
          textAlign="center"
        >
          ОТВЕТЫ НА ВОПРОСЫ
        </Typography>
        <div className="flex w-full flex-col gap-1">
          {questions.map((item, idx) => (
            <Accordion elevation={0} key={idx}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls={`panel${idx}-content`}
                id={`panel${idx}-header`}
              >
                <Typography
                  component="span"
                  variant={isMobile ? "h6" : "h5"}
                  fontWeight={700}
                >
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
