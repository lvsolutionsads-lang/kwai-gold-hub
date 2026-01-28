import { useState, useEffect } from "react";
import BalanceHeader from "@/components/kwai/BalanceHeader";
import QuickActions from "@/components/kwai/QuickActions";
import TaskCard from "@/components/kwai/TaskCard";
import DaysGrid from "@/components/kwai/DaysGrid";
import BottomNav from "@/components/kwai/BottomNav";
import CheckinModal from "@/components/kwai/CheckinModal";
import bauImg from "@/assets/bau.png";
import birdImg from "@/assets/bird.png";
import neveImg from "@/assets/neve.png";
import dinheiroImg from "@/assets/dinheiro.png";
import { toast } from "sonner";

const daysData = [
  { day: 1, amount: "180", isActive: true },
  { day: 2, amount: "730", isActive: false },
  { day: 3, amount: "1.090", isActive: false },
  { day: 4, amount: "360", isActive: false },
];

const Index = () => {
  const [balance, setBalance] = useState(0);
  const [golds, setGolds] = useState(3410);
  const [activeTab, setActiveTab] = useState("home");
  const [isCheckinOpen, setIsCheckinOpen] = useState(false);
  const [checkinDay, setCheckinDay] = useState(1);
  
  // Countdown states
  const [countdown1, setCountdown1] = useState({ d: 3, h: 12, m: 19, s: 38 });
  const [countdown2, setCountdown2] = useState({ h: 23, m: 59, s: 23 });

  // Countdown effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown1(prev => {
        let { d, h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; d--; }
        if (d < 0) { d = 0; h = 0; m = 0; s = 0; }
        return { d, h, m, s };
      });

      setCountdown2(prev => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Open checkin modal after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCheckinOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const formatCountdown1 = () => {
    const { d, h, m, s } = countdown1;
    return `${String(d).padStart(2, '0')}:${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const formatCountdown2 = () => {
    const { h, m, s } = countdown2;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleReceiveReward = () => {
    setGolds(prev => prev + 180);
    if (checkinDay < 30) {
      setCheckinDay(prev => prev + 1);
    }
    setIsCheckinOpen(false);
    toast.success("Você recebeu 180 Kwai Golds!");
  };

  return (
    <div className="min-h-screen bg-background max-w-[480px] mx-auto relative">
      <BalanceHeader 
        balance={balance}
        golds={golds}
        onWalletClick={() => setActiveTab("wallet")}
      />

      <main className="pb-24 px-4">
        {/* Quick Actions */}
        <div className="-mx-4 mb-4">
          <QuickActions />
        </div>

        {/* Daily Tasks Section */}
        <section className="mb-4">
          <h2 className="text-xl font-bold text-foreground mb-3">Tarefas diárias</h2>
          
          <TaskCard 
            image={bauImg}
            title="Recompensa Diária"
            description="Faça check-in hoje para ganhar 180 Kwai Golds!"
            buttonText="Ir"
            onClick={() => setIsCheckinOpen(true)}
          />

          <DaysGrid days={daysData} currentDay={checkinDay} />
        </section>

        {/* Task Cards */}
        <div className="space-y-4 mt-6">
          <TaskCard 
            image={birdImg}
            title="Bônus por tempo limitado! Ganhe até R$31,00 por cada amigo convidado!"
            description="Chame seus amigos para assistir vídeos para ganhar dinheiro."
            countdown={formatCountdown2()}
            buttonText="Convidar"
            disabled
          />

          <div className="bg-card rounded-2xl p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-muted-foreground">Meu código de convite</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-bold text-foreground">Kwai 355 311 492</span>
              <button className="text-primary font-semibold">Copiar</button>
            </div>
            <div className="flex gap-3">
              <button 
                disabled 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground cursor-not-allowed opacity-60"
              >
                <span className="w-5 h-5 bg-gray-400 rounded-full" />
                WhatsApp
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-foreground">
                <span className="text-sm">🔗</span>
                Link
              </button>
            </div>
          </div>

          <TaskCard 
            image={dinheiroImg}
            title="Empréstimos Seguros para Você!"
            description="Empréstimos fáceis e rápidos! Realize seus sonhos com nossa solução financeira ideal para você!"
            buttonText="Solicite"
            disabled
          />

          <TaskCard 
            image={birdImg}
            title="Convide amigos para receber R$1.200!"
            description=""
            countdown={formatCountdown1()}
            buttonText="Ganhe Agora"
            disabled
          />
        </div>
      </main>

      <BottomNav 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <CheckinModal 
        isOpen={isCheckinOpen}
        onClose={() => setIsCheckinOpen(false)}
        onReceive={handleReceiveReward}
      />
    </div>
  );
};

export default Index;