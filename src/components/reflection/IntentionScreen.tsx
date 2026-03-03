import { Button } from "@/components/ui/button";

interface IntentionScreenProps {
  value: string;
  onChange: (value: string) => void;
  onContinue: () => void;
}

const options = [
  { icon: "🔒", label: "I would prefer to keep this reflection private." },
  { icon: "💬", label: "I may choose to share part of this with my partner." },
  { icon: "❤️", label: "I would like to share this reflection fully." },
  { icon: "📝", label: "I will save this for a later conversation." },
];

const IntentionScreen = ({ value, onChange, onContinue }: IntentionScreenProps) => {
  return (
    <div className="reflection-card space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground font-body">Step 4 of 4</p>
        <div className="flex gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-1.5 w-6 rounded-full bg-primary" />
          ))}
        </div>
      </div>

      <h2 className="text-xl font-heading font-semibold">
        How would you like to hold this reflection?
      </h2>

      <div className="space-y-3">
        {options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => onChange(opt.label)}
            className={`w-full text-left p-4 rounded-lg text-sm font-body transition-all duration-300 ${
              value === opt.label
                ? "bg-primary/15 ring-1 ring-primary/40"
                : "bg-background/60 hover:bg-background/80"
            }`}
          >
            <span className="mr-2">{opt.icon}</span>
            {opt.label}
          </button>
        ))}
      </div>

      <Button onClick={onContinue} className="w-full" disabled={!value}>
        Continue
      </Button>
    </div>
  );
};

export default IntentionScreen;
