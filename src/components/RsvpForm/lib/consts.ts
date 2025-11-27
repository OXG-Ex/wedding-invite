export const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzNTfpmMPjcDLbTxmWVJjV-5L5UxsTZbnJNZkD8Fu-YvzdHJGUEZe1u3XM2dPAvqKZg/exec";

export const alcoholDict: Record<string, string> = {
  vodka: "Водка",
  whiskey: "Виски",
  wine_red: "Вино красное",
  wine_white: "Вино белое",
  champagne: "Шампанское",
  non_alcohol: "Что-нибудь безалкогольное",
};

export const defaultValues = {
  name: "",
  presence: "will",
  message: "",
  alcohol: Object.keys(alcoholDict).reduce(
    (acc, curr) => ({...acc, [curr]: false}),
    {} as Record<string, boolean>
  ),
};
