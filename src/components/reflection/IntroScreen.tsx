import { Button } from "@/components/ui/button";

interface IntroScreenProps {
  onBegin: () => void;
  onHistory: () => void;
}

const IntroScreen = ({ onBegin, onHistory }: IntroScreenProps) => {
  return (
    <div className="reflection-card text-center space-y-6">
      <div className="space-y-2">
        <p className="text-2xl">🤍</p>
        <h1 className="text-3xl font-heading font-semibold tracking-tight">
          A Pause for Appreciation
        </h1>
        <p className="text-muted-foreground font-body text-sm">
          A 5–7 Minute Guided Reflection
        </p>
      </div>

      <div className="text-left space-y-4 text-sm leading-relaxed text-foreground/85" style={{ textAlign: "justify" }}>
        <p>
          When a relationship feels strained, it can become easy to focus only on what is not working. This reflection offers a brief pause — not to dismiss concerns, but to gently broaden perspective.
        </p>
        <p>
          There is no expectation to feel grateful. Simply notice what comes up.
        </p>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <Button onClick={onBegin} className="w-full">
          Begin
        </Button>
        <Button variant="outline" onClick={onHistory} className="w-full">
          View History
        </Button>
      </div>
    </div>
  );
};

export default IntroScreen;
