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

const rewards = [
  { day: 1, amount: "180", type: "gold", badge: "1º DIA" },
  { day: 2, amount: "730", type: "gold", badge: "2º DIA" },
  { day: 3, amount: "1.090", type: "gold", badge: "3º DIA" },
  { day: 4, amount: "360", type: "gold", badge: "4º DIA" },
  { day: 14, amount: "R$2,11", type: "saldo", badge: "14º DIA" },
  { day: 7, amount: "1.090", type: "bonus", badge: "7º DIA" },
  { day: 6, amount: "360", type: "gold", badge: "6º DIA" },
  { day: 5, amount: "360", type: "gold", badge: "5º DIA" },
  { day: 21, amount: "R$2,11", type: "saldo", wide: true, badge: "21º DIA" },
  { day: 30, amount: "R$2,13", type: "saldo", wide: true, badge: "30º DIA" },
];

const CheckinModal = ({ isOpen, onClose, onReceive }: CheckinModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center animate-fade-in">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60" 
        onClick={onClose}
      />
      
      {/* Modal Container - para posicionar a imagem relativa ao modal */}
      <div className="relative mx-4 max-w-[360px] w-full">
        {/* Top Image - posicionada relativa ao container */}
        <img 
          src={topoImg} 
          alt="Prêmio" 
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-[180px] z-20 pointer-events-none"
        />
        
        {/* Modal Content */}
        <div className="relative bg-gradient-to-b from-[hsl(18,100%,70%)] to-primary rounded-3xl p-6 pt-16 animate-slide-up">
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/20 rounded-full text-primary-foreground z-10"
          >
            <X className="w-5 h-5" />
          </button>

        {/* Header */}
        <div className="text-center text-primary-foreground mb-4">
          <h2 className="text-base font-semibold mb-2">
            Assinando por 30 dias consecutivos
          </h2>
          <p className="text-3xl font-extrabold">R$7,87</p>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-4 gap-2 bg-white/10 rounded-2xl p-3">
          {rewards.map((reward, index) => (
            <div 
              key={index}
              className={cn(
                "flex flex-col items-center p-2 bg-card rounded-xl border-2 border-primary",
                reward.wide && "col-span-2"
              )}
            >
              {(reward.type === "saldo" || reward.type === "bonus") && (
                <span className="bg-primary text-primary-foreground text-[9px] px-2 py-0.5 rounded-full mb-1">
                  {reward.type === "saldo" ? "Saldo" : "Bonus"}
                </span>
              )}
              <img 
                src={reward.type === "bonus" ? dinheiroImg : coinKwai} 
                alt="K" 
                className="w-8 h-8"
              />
              <strong className="text-xs font-bold text-primary mt-1">
                {reward.amount}
              </strong>
              <span className="bg-primary text-primary-foreground text-[9px] px-2 py-0.5 rounded-full mt-1">
                {reward.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Receive Button */}
        <button 
          onClick={onReceive}
          className="w-full mt-4 py-4 bg-card text-primary rounded-2xl text-lg font-bold animate-pulse-soft transition-transform active:scale-95"
        >
          Receber
        </button>
        </div>
      </div>
    </div>
  );
};

export default CheckinModal;