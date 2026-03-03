import { Button } from "@/components/ui/button";

interface ClosingScreenProps {
  onSave: () => void;
  onHistory: () => void;
  onExit: () => void;
}

const ClosingScreen = ({ onSave, onHistory, onExit }: ClosingScreenProps) => {
  return (
    <div className="reflection-card text-center space-y-6">
      <div className="space-y-2">
        <p className="text-2xl">🤍</p>
        <h2 className="text-2xl font-heading font-semibold">Reflection Complete</h2>
      </div>

      <div className="text-sm leading-relaxed text-foreground/85 space-y-4" style={{ textAlign: "justify" }}>
        <p>
          This pause does not erase challenges. It simply restores balance in how the relationship is viewed.
        </p>
        <p>
          Even brief moments of noticing can gradually soften emotional rigidity and create space for healthier conversations.
        </p>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <Button onClick={onSave} className="w-full">
          Save to Reflections
        </Button>
        <Button variant="outline" onClick={onHistory} className="w-full">
          View History
        </Button>
        <Button variant="ghost" onClick={onExit} className="w-full text-muted-foreground">
          Exit
        </Button>
      </div>
    </div>
  );
};

export default ClosingScreen;
