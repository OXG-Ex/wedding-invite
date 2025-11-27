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

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzNTfpmMPjcDLbTxmWVJjV-5L5UxsTZbnJNZkD8Fu-YvzdHJGUEZe1u3XM2dPAvqKZg/exec";

const defaultValues = {
  name: "",
  presence: "will",
  message: "",
  alcohol: {
    vodka: false,
    whiskey: false,
    wine_red: false,
    wine_white: false,
    champagne: false,
    non_alcohol: false,
  },
};

const alcoholDict = {
  vodka: "Водка",
  whiskey: "Виски",
  wine_red: "Вино красное",
  wine_white: "Вино белое",
  champagne: "Шампанское",
  non_alcohol: "Что-нибудь безалкогольное",
};

export const RsvpForm: FC = () => {
  const [formData, setFormData] = useState(defaultValues);

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

    const dataToSend = {
      name: formData.name,
      presence:
        formData.presence === "will"
          ? "Я приду / Мы придём"
          : "Прийти не получится",
      message: formData.message,
      alcohol: Object.entries(formData.alcohol)
        .filter(([_, value]) => !!value)
        .map(([key]) => alcoholDict[key as "vodka"])
        .join(", "),
    };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      if (result.status === "success") {
        setFormData(defaultValues);
        alert("Данные отправлены!");
      } else {
        alert("Ошибка при отправке");
      }
    } catch (err) {
      console.error(err);
      alert("Ошибка сети");
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
              helperText=""
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
                      checked={formData.alcohol[key as "vodka"]}
                      onChange={handleCheckboxChange}
                      name={key}
                    />
                  }
                  label={alcoholDict[key as "vodka"]}
                />
              ))}
              {/* <FormControlLabel
                control={
                  <Checkbox
                    checked={vodka}
                    onChange={handleCheckboxChange}
                    name="vodka"
                  />
                }
                label="Водка"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={whiskey}
                    onChange={handleCheckboxChange}
                    name="whiskey"
                  />
                }
                label="Виски"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={wine_red}
                    onChange={handleCheckboxChange}
                    name="wine_red"
                  />
                }
                label="Вино красное"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={wine_white}
                    onChange={handleCheckboxChange}
                    name="wine_white"
                  />
                }
                label="Вино белое"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={champagne}
                    onChange={handleCheckboxChange}
                    name="champagne"
                  />
                }
                label="Шампанское"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={non_alcohol}
                    onChange={handleCheckboxChange}
                    name="non_alcohol"
                  />
                }
                label="Что-нибудь безалкогольное"
              /> */}
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

          <Button type="submit" variant="outlined">
            Отправить
          </Button>
        </form>
      </div>
    </div>
  );
};
