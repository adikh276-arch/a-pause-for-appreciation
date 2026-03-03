import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getReflections, deleteReflection, ReflectionEntry } from "@/lib/reflections";
import { format } from "date-fns";
import { ChevronDown, Trash2 } from "lucide-react";

interface HistoryScreenProps {
  onBack: () => void;
}

const HistoryScreen = ({ onBack }: HistoryScreenProps) => {
  const [entries, setEntries] = useState<ReflectionEntry[]>(getReflections());
  const [expanded, setExpanded] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    deleteReflection(id);
    setEntries(getReflections());
    setConfirmDelete(null);
  };

  const prompts = [
    "One small moment that did not feel tense…",
    "One effort your partner has made…",
    "One quality that has remained consistent…",
  ];

  return (
    <div className="reflection-card space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-heading font-semibold">Your Reflection History</h2>
      </div>

      {entries.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-8">
          No reflections saved yet. Your completed sessions will appear here.
        </p>
      ) : (
        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          {entries.map((entry) => (
            <div key={entry.id} className="bg-background/60 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === entry.id ? null : entry.id)}
                className="w-full text-left p-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-body font-medium">
                    {format(new Date(entry.timestamp), "MMMM d, yyyy — h:mm a")}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                    {entry.checkIn}
                  </p>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                    expanded === entry.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {expanded === entry.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-3 text-sm">
                      {entry.responses.map((r, i) => (
                        <div key={i}>
                          <p className="text-xs text-muted-foreground font-medium">{prompts[i]}</p>
                          <p className="mt-1 text-foreground/85">{r}</p>
                        </div>
                      ))}
                      <div>
                        <p className="text-xs text-muted-foreground font-medium">Intention</p>
                        <p className="mt-1 text-foreground/85">{entry.intention}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium">Emotional Check-In</p>
                        <p className="mt-1 text-foreground/85">{entry.checkIn}</p>
                      </div>

                      {confirmDelete === entry.id ? (
                        <div className="flex gap-2 pt-2">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDelete(entry.id)}
                            className="text-xs"
                          >
                            Confirm Delete
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setConfirmDelete(null)}
                            className="text-xs"
                          >
                            Cancel
                          </Button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setConfirmDelete(entry.id)}
                          className="flex items-center gap-1.5 text-xs text-destructive/70 hover:text-destructive transition-colors pt-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          Delete entry
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      )}

      <Button variant="outline" onClick={onBack} className="w-full">
        Back to Start
      </Button>
    </div>
  );
};

export default HistoryScreen;
