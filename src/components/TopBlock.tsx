import FiberManualRecordTwoToneIcon from "@mui/icons-material/FiberManualRecordTwoTone";
import {Stack, Typography} from "@mui/material";

import type {FC} from "react";

export const TopBlock: FC = () => {
  return (
    <div className="w-screen h-screen">
      <Stack direction={"row"}>
        <Stack direction={"column"}>
          <Typography variant="h1" color="primary">
            МЫ
          </Typography>
          <Typography variant="h1">СОЗДАЁМ</Typography>
          <Typography variant="h1">СЕМЬЮ</Typography>
        </Stack>

        <Stack direction="column">
          <Typography variant="h3">ДОРОГИЕ ГОСТИ!</Typography>
          <Typography variant="h5">
            С огромным желанием и радостью мы приглашаем вас разделить с нами
            этот особенный день - нашу свадьбу.
          </Typography>

          <Stack direction={"row"}>
            <Typography variant="h4">10</Typography>
            <FiberManualRecordTwoToneIcon />
            <Typography variant="h4">10</Typography>
            <FiberManualRecordTwoToneIcon />
            <Typography variant="h4">2026</Typography>
          </Stack>

          <Typography variant="h5">
            Это будет незабываемое событие, и мы хотим, чтобы вы стали его
            частью.
          </Typography>

          <Typography variant="h4">Семён и Дарья</Typography>
        </Stack>
      </Stack>
    </div>
  );
};
