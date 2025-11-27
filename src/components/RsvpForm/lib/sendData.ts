import {alcoholDict, SCRIPT_URL} from "./consts";
import type {TForm} from "./types";

export const sendData = async (formData: TForm) => {
  const dataToSend = {
    name: formData.name,
    presence:
      formData.presence === "will"
        ? "Я приду / Мы придём"
        : "Прийти не получится",
    message: formData.message,
    alcohol: Object.entries(formData.alcohol)
      .filter(([_, value]) => !!value)
      .map(([key]) => alcoholDict[key])
      .join(", "),
  };

  const response = await fetch(SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(dataToSend),
  });

  return await response.json();
};
