import type { FC } from "react";
import { TrendigCard } from "../@types";

interface CardProps {
  card: TrendigCard;
}

const Card: FC<CardProps> = ({ card }) => {
  const {
    totalValueLocked,
    name,
    price,
    priceChangePercantage,
    popularPairs,
    icon,
  } = card;

  const isInProfit = priceChangePercantage > 0;

  return (
    <div className="w-full rounded-xl backdrop-blur-sm bg-gradient-gray p-2 flex flex-col items-center gap-2 relative">
      <section className="p-3 rounded-full bg-[#14172B] absolute -top-20">
        <section className="p-6 rounded-full bg-gray-700">
          <img src={icon} className="w-16" />
        </section>
      </section>
      <h1 className="mt-16 text-xs text-gray-200 font-bold">{name}</h1>
      <div className="rounded-full w-full bg-gray-900 py-2 mt-1 relative font-bold grid place-items-center">
        <span className="text-center text-sm">
          $
          {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
            price
          )}
        </span>
        <span
          className={
            isInProfit
              ? "text-green-500 absolute right-2 text-xs"
              : "text-red-500 absolute right-2 text-xs"
          }
        >
          {priceChangePercantage > 0
            ? "+ " + priceChangePercantage
            : priceChangePercantage}
          %
        </span>
      </div>

      <h1 className="mb-2 text-xs text-gray-200 font-bold">Price</h1>
      <div className="rounded-full w-full bg-gray-900 py-2 mt-1 relative font-bold grid place-items-center">
        <span className="text-center">
          $
          {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
            totalValueLocked
          )}
        </span>
      </div>
      <h1 className="text-xs text-gray-200 font-bold">TVL</h1>

      <div className="px-2 py-1 flex gap-1 bg-gray-900 rounded-full mt-4">
        {popularPairs.map((icon) => {
          return <img src={icon} alt="popular pair icons" />;
        })}
      </div>
      <h1 className="text-xs text-gray-200 font-bold">Popular Pairs</h1>
    </div>
  );
};
export default Card;
