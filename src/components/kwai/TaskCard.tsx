import { cn } from "@/lib/utils";

interface TaskCardProps {
  image: string;
  title: string;
  description: string;
  countdown?: string;
  buttonText: string;
  onClick?: () => void;
  className?: string;
}

const TaskCard = ({ 
  image, 
  title, 
  description, 
  countdown, 
  buttonText, 
  onClick,
  className 
}: TaskCardProps) => {
  return (
    <div 
      className={cn(
        "flex items-center gap-3 bg-card rounded-2xl p-4 border border-border cursor-pointer transition-transform active:scale-[0.98]",
        className
      )}
      onClick={onClick}
    >
      <img src={image} alt="" className="w-14 h-14 flex-shrink-0" />
      
      <div className="flex-1 min-w-0">
        <h3 className="text-[15px] font-bold text-foreground mb-1">{title}</h3>
        <p className="text-[13px] text-muted-foreground">{description}</p>
        {countdown && (
          <p className="text-[13px] font-semibold text-accent mt-1">
            Expira em {countdown}
          </p>
        )}
      </div>
      
      <button 
        className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-transform active:scale-95"
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default TaskCard;