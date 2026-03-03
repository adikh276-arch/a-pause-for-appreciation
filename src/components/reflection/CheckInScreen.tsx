import { Button } from "@/components/ui/button";

interface CheckInScreenProps {
  value: string;
  onChange: (value: string) => void;
  onFinish: () => void;
}

const statements = [
  "I feel slightly more open toward my partner right now.",
  "I do not notice much change, but I am willing to stay aware.",
  "I found this somewhat difficult to complete.",
  "I experienced a small sense of warmth during reflection.",
  "I noticed resistance, and that feels important to acknowledge.",
  "I feel a subtle softening compared to before I began.",
];

const CheckInScreen = ({ value, onChange, onFinish }: CheckInScreenProps) => {
  return (
    <div className="reflection-card space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-heading font-semibold">
          As you completed this reflection, which statement feels most accurate?
        </h2>
      </div>

      <div className="space-y-2.5">
        {statements.map((s) => (
          <button
            key={s}
            onClick={() => onChange(s)}
            className={`w-full text-left p-3.5 rounded-lg text-sm font-body transition-all duration-300 ${
              value === s
                ? "bg-primary/15 ring-1 ring-primary/40"
                : "bg-background/60 hover:bg-background/80"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <Button onClick={onFinish} className="w-full" disabled={!value}>
        Finish & Save
      </Button>
    </div>
  );
};

export default CheckInScreen;
