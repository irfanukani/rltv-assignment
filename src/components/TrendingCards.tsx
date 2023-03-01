import type { FC } from "react";
import { TrendigCard } from "../@types";
import Card from "./Card";

interface TrendingCardsProps {
  cards: TrendigCard[];
}

const TrendingCards: FC<TrendingCardsProps> = ({ cards }) => {
  return (
    <section className="grid lg:grid-cols-5 md:gap-8 mt-24">
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </section>
  );
};
export default TrendingCards;
