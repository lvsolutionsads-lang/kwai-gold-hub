import { X } from "lucide-react";
import coinKwai from "@/assets/coinKwai.png";
import dinheiroImg from "@/assets/dinheiro.png";
import topoImg from "@/assets/topo.png";
import { cn } from "@/lib/utils";

interface CheckinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReceive: () => void;
}

interface RewardItem {
  amount: string;
  day: string;
  type?: "gold" | "saldo" | "bonus";
  wide?: boolean;
}

const row1: RewardItem[] = [
  { amount: "180", day: "1º DIA", type: "gold" },
  { amount: "730", day: "2º DIA", type: "gold" },
  { amount: "1.090", day: "3º DIA", type: "gold" },
  { amount: "360", day: "4º DIA", type: "gold" },
];

const row2: RewardItem[] = [
  { amount: "R$2,11", day: "14º DIA", type: "saldo" },
  { amount: "1.090", day: "7º DIA", type: "bonus" },
  { amount: "360", day: "6º DIA", type: "gold" },
  { amount: "360", day: "5º DIA", type: "gold" },
];

const row3: RewardItem[] = [
  { amount: "R$2,11", day: "21º DIA", type: "saldo", wide: true },
  { amount: "R$2,13", day: "30º DIA", type: "saldo", wide: true },
];

const RewardCard = ({ item }: { item: RewardItem }) => (
  <div 
    className={cn(
      "flex flex-col items-center justify-center bg-white rounded-2xl border-2 border-primary/30 p-3 min-h-[100px]",
      item.wide && "min-h-[120px]"
    )}
  >
    {/* Type Badge - Saldo or Bonus */}
    {(item.type === "saldo" || item.type === "bonus") && (
      <span className="bg-primary text-white text-[10px] font-semibold px-3 py-0.5 rounded-full mb-2">
        {item.type === "saldo" ? "Saldo" : "Bonus"}
      </span>
    )}
    
    {/* Coin Image */}
    <img 
      src={item.type === "bonus" ? dinheiroImg : coinKwai} 
      alt="K" 
      className={cn("w-10 h-10", item.wide && "w-12 h-12")}
    />
    
    {/* Amount */}
    <strong className={cn(
      "font-bold text-primary mt-1",
      item.wide ? "text-lg" : "text-base"
    )}>
      {item.amount}
    </strong>
    
    {/* Day Badge */}
    <span className="bg-primary text-white text-[10px] font-medium px-3 py-1 rounded-full mt-1">
      {item.day}
    </span>
  </div>
);

const CheckinModal = ({ isOpen, onClose, onReceive }: CheckinModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center animate-fade-in px-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-[380px]">
        {/* Top Image - Calendar with coins */}
        <img 
          src={topoImg} 
          alt="Prêmio" 
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[200px] z-20 pointer-events-none"
        />
        
        {/* Modal Content */}
        <div className="relative bg-gradient-to-b from-[hsl(25,100%,75%)] to-[hsl(18,100%,60%)] rounded-3xl p-5 pt-14 animate-slide-up">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-black/20 rounded-full text-white z-10 transition-transform active:scale-90"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center text-white mb-5">
            <h2 className="text-lg font-semibold mb-1">
              Assinando por 30 dias consecutivos
            </h2>
            <p className="text-4xl font-extrabold">R$7,87</p>
          </div>

          {/* Rewards Grid Container */}
          <div className="bg-white/15 rounded-2xl p-3 space-y-2">
            {/* Row 1 - 4 items */}
            <div className="grid grid-cols-4 gap-2">
              {row1.map((item, index) => (
                <RewardCard key={index} item={item} />
              ))}
            </div>

            {/* Row 2 - 4 items */}
            <div className="grid grid-cols-4 gap-2">
              {row2.map((item, index) => (
                <RewardCard key={index} item={item} />
              ))}
            </div>

            {/* Row 3 - 2 wide items */}
            <div className="grid grid-cols-2 gap-2">
              {row3.map((item, index) => (
                <RewardCard key={index} item={item} />
              ))}
            </div>
          </div>

          {/* Receive Button */}
          <button 
            onClick={onReceive}
            className="w-full mt-4 py-4 bg-white text-primary rounded-full text-xl font-bold shadow-lg transition-transform active:scale-95 animate-pulse-soft"
          >
            Receber
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckinModal;