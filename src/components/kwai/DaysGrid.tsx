import coinKwai from "@/assets/coinKwai.png";
import { cn } from "@/lib/utils";

interface DayItem {
  day: number;
  amount: string;
  isActive: boolean;
}

interface DaysGridProps {
  days: DayItem[];
  currentDay?: number;
}

const DaysGrid = ({ days, currentDay = 1 }: DaysGridProps) => {
  return (
    <div className="grid grid-cols-4 gap-2 mt-3">
      {days.map((day) => (
        <div 
          key={day.day}
          className={cn(
            "flex flex-col items-center p-3 rounded-xl border-2 transition-all",
            day.day <= currentDay 
              ? "border-primary bg-secondary" 
              : "border-border bg-card"
          )}
        >
          <img src={coinKwai} alt="K" className="w-10 h-10" />
          <strong className={cn(
            "text-sm font-bold mt-1",
            day.day <= currentDay ? "text-primary" : "text-foreground"
          )}>
            {day.amount}
          </strong>
          <span className={cn(
            "text-[10px] mt-0.5",
            day.day <= currentDay ? "text-primary" : "text-muted-foreground"
          )}>
            {day.day}º DIA
          </span>
        </div>
      ))}
    </div>
  );
};

export default DaysGrid;