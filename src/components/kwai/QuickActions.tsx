import birdImg from "@/assets/bird.png";
import neveImg from "@/assets/neve.png";
import dinheiro2Img from "@/assets/dinheiro2.png";

interface QuickAction {
  id: string;
  image: string;
  label: string;
  badge?: string;
}

const actions: QuickAction[] = [
  { id: "1", image: birdImg, label: "R$4200!", badge: "Fácil" },
  { id: "2", image: neveImg, label: "Dinheiro rá..." },
  { id: "3", image: dinheiro2Img, label: "Kwai Crédito", badge: "Fácil" },
];

const QuickActions = () => {
  return (
    <div className="bg-secondary rounded-2xl p-4 mx-4">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {actions.map((action) => (
          <div 
            key={action.id}
            className="flex flex-col items-center gap-2 min-w-[80px] relative cursor-pointer"
          >
            {action.badge && (
              <span className="absolute -top-1 right-0 bg-accent text-accent-foreground text-[10px] px-2 py-0.5 rounded-lg font-semibold z-10">
                {action.badge}
              </span>
            )}
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
              <img 
                src={action.image} 
                alt={action.label}
                className="w-16 h-16 object-cover"
              />
            </div>
            <span className="text-xs font-medium text-center max-w-[80px] truncate text-foreground">
              {action.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;