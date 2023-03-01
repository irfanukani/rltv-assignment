import type { FC } from "react";
import Header from "./components/Header";

// Static Assets
import ActivityIcon from "./assets/activity.svg";
import EtheriumIcon from "./assets/etherium.svg";
import BitcoinIcon from "./assets/bitcoin.svg";
import SolanaIcon from "./assets/solana.svg";
import { TrendigCard } from "./@types";
import TrendingCards from "./components/TrendingCards";

interface AppProps {}

const App: FC<AppProps> = () => {
  // Dummy Data
  const cards: TrendigCard[] = [
    {
      icon: BitcoinIcon,
      name: "Bitcoin (BTC)",
      price: 31812.8,
      priceChangePercantage: 10,
      totalValueLocked: 60000,
      popularPairs: [EtheriumIcon, SolanaIcon, BitcoinIcon],
    },
    {
      icon: SolanaIcon,
      name: "Solana (SOL)",
      price: 32.83,
      priceChangePercantage: -12.32,
      totalValueLocked: 60000,
      popularPairs: [SolanaIcon, BitcoinIcon],
    },
    {
      icon: EtheriumIcon,
      name: "Ethereum (ETH)",
      price: 1.0,
      priceChangePercantage: 0.26,
      totalValueLocked: 60000,
      popularPairs: [SolanaIcon, BitcoinIcon],
    },
    {
      icon: BitcoinIcon,
      name: "Bitcoin (BTC)",
      price: 31812.8,
      priceChangePercantage: 10,
      totalValueLocked: 60000,
      popularPairs: [EtheriumIcon, SolanaIcon, BitcoinIcon],
    },
    {
      icon: SolanaIcon,
      name: "Solana (SOL)",
      price: 32.83,
      priceChangePercantage: -12.32,
      totalValueLocked: 60000,
      popularPairs: [SolanaIcon, BitcoinIcon],
    },
  ];
  return (
    <section className="bg-[#14172B] h-screen w-full text-white px-16">
      <Header title="trending Assets" icon={ActivityIcon} />
      <TrendingCards cards={cards} />
    </section>
  );
};
export default App;
