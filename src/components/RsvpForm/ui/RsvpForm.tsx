import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import {useState, type FC} from "react";
import {alcoholDict, defaultValues} from "../lib/consts";
import {sendData} from "../lib/sendData";
import type {TForm} from "../lib/types";

export const RsvpForm: FC = () => {
  const [formData, setFormData] = useState<TForm>(defaultValues);
  const [isLoading, setIsLoading] = useState(false);
  const [requestMessage, setRequestMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    checked: boolean
  ) => {
    const {name} = e.target;
    setFormData((prev) => ({
      ...prev,
      alcohol: {...prev.alcohol, [name]: checked},
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await sendData(formData);
      if (result.status === "success") {
        setFormData(defaultValues);
        setRequestMessage("Данные отправлены!");
      } else {
        setRequestMessage("Ошибка при отправке");
      }
    } catch (err) {
      console.error(err);
      setRequestMessage("Ошибка сети");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full justify-center flex">
      <div className="flex flex-col gap-6 items-center">
        <Typography variant="h3" fontWeight={700}>
          ПРИСУТСТВИЕ НА ТОРЖЕСТВЕ
        </Typography>

        <Typography>
          Ваши ответы на вопросы очень помогут нам при организации свадьбы.
        </Typography>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <FormControl>
            <Typography fontWeight={700}>
              Сможете ли вы присутствовать на торжестве ?
            </Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="will"
              name="presence"
              value={formData.presence}
              onChange={handleChange}
            >
              <FormControlLabel
                value="will"
                control={<Radio />}
                label="Я приду / Мы придём"
              />
              <FormControlLabel
                value="wont"
                control={<Radio />}
                label="Прийти не получится"
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <Typography fontWeight={700}>Имя Фамилия</Typography>

            <Typography variant="body2">
              Если вы будете парой или семьёй, то внесите все имена и фамилии
            </Typography>

            <TextField
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl component="fieldset" variant="standard">
            <Typography fontWeight={700}>Предпочтения по напиткам:</Typography>

            <Typography variant="body2">
              Можно выбрать несколько вариантов
            </Typography>

            <FormGroup>
              {Object.keys(alcoholDict).map((key) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.alcohol[key]}
                      onChange={handleCheckboxChange}
                      name={key}
                    />
                  }
                  label={alcoholDict[key]}
                />
              ))}
            </FormGroup>
          </FormControl>

          <FormControl component="fieldset">
            <Typography fontWeight={700}>Дополнительные пожелания:</Typography>

            <Typography variant="body2">
              Что-то что нам необходимо учесть
            </Typography>
            <TextField
              variant="outlined"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              multiline
            />
          </FormControl>

          <Button type="submit" variant="outlined" loading={isLoading}>
            Отправить
          </Button>
          {!!requestMessage && !isLoading && (
            <Typography variant="body2" textAlign="center" color="primary">
              {requestMessage}
            </Typography>
          )}
        </form>
      </div>
    </div>
  );
};
