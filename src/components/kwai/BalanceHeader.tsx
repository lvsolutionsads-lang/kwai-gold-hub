import { ArrowLeft, Pencil, Maximize2, Info, ChevronRight } from "lucide-react";
import coinKwai from "@/assets/coinKwai.png";

interface BalanceHeaderProps {
  balance: number;
  golds: number;
  onBack?: () => void;
  onWalletClick?: () => void;
}

const BalanceHeader = ({ balance, golds, onBack, onWalletClick }: BalanceHeaderProps) => {
  return (
    <header className="bg-background sticky top-0 z-50">
      {/* Top bar with icons */}
      <div className="flex items-center justify-between px-4 py-3">
        <button 
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center text-foreground"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center text-foreground">
            <Pencil className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-foreground">
            <Maximize2 className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-foreground">
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Balance and Golds section - clean white background */}
      <div className="flex items-start justify-between px-4 py-4">
        {/* Saldo */}
        <button 
          onClick={onWalletClick}
          className="flex flex-col items-start"
        >
          <span className="text-sm text-muted-foreground">Saldo</span>
          <div className="flex items-center gap-1">
            <span className="text-3xl font-bold text-foreground">
              R$ {balance}
            </span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>
        </button>

        {/* Kwai Golds */}
        <button className="flex flex-col items-start">
          <div className="flex items-center gap-1">
            <span className="text-sm text-muted-foreground">Kwai Golds</span>
            <Info className="w-3 h-3 text-muted-foreground" />
          </div>
          <div className="flex items-center gap-2">
            <img src={coinKwai} alt="K" className="w-6 h-6" />
            <span className="text-3xl font-bold text-foreground">
              {golds.toLocaleString('pt-BR')}
            </span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>
        </button>
      </div>
    </header>
  );
};

export default BalanceHeader;