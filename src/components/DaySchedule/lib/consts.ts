import NewlyWeds from "../../../assets/icons/newlyweds.svg";
import WeddingLocation from "../../../assets/icons/wedding-location.svg";
import Dinner from "../../../assets/icons/wedding-reception.svg";
import Rings from "../../../assets/icons/wedding-rings.svg";

type ScheduleItem = {
  time: string;
  icon: string;
  title: string;
  subtitle: string;
};
export const scheduleItems: ScheduleItem[] = [
  {
    time: "12:00",
    icon: WeddingLocation,
    title: "Сбор гостей",
    subtitle: "Просим взять с собой хорошее настроение и свои улыбки",
  },
  {
    time: "12:30",
    icon: NewlyWeds,
    title: "Свадебная церемония",
    subtitle:
      "На всякий случай приготовьте носовые платочки для трогательного момента",
  },
  {
    time: "14:00",
    icon: Dinner,
    title: "Праздничный банкет",
    subtitle: "Время вкусной еды, танцев и развлечений",
  },
  {
    time: "23:00",
    icon: Rings,
    title: "Окончание мероприятия",
    subtitle: "К сожалению, даже такой прекрасный вечер может закончиться",
  },
];
