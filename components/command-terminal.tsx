"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type CommandResult = {
  command: string;
  output: string;
};

export function CommandTerminal() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandResult[]>([]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((v) => !v);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const commands = useMemo(
    () => ({
      help: "Commandes: help, whoami, skills, contact, projects, clear",
      whoami: "Mohammad Radwan - Étudiant BTS SIO SLAM, Développeur Full-Stack.",
      skills: "Next.js, React 19, TypeScript, PHP/Laravel, SQL, UX/UI, API REST.",
      contact: "Email: mohammadradwn804@gmail.com | GitHub: github.com/Mohammad77Radwan",
      projects: "Mindful Journal | Code Survivors | MoreFix | API Citations | TechSolutions",
    }),
    [],
  );

  const run = () => {
    const command = input.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = commands[command as keyof typeof commands] ?? "Commande inconnue. Tapez 'help'.";
    setHistory((h) => [...h, { command, output }]);
    setInput("");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            className="fixed inset-0 z-[100] bg-black/60"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Fermer terminal"
          />
          <motion.div
            className="fixed left-1/2 top-24 z-[110] w-[min(92vw,780px)] -translate-x-1/2 rounded-xl border border-emerald-500/40 bg-slate-950 p-4 font-mono text-sm text-emerald-300 shadow-2xl"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs text-emerald-400">terminal@portfolio ~ ctrl+k</p>
              <p className="text-xs text-slate-400">esc pour fermer</p>
            </div>
            <div className="max-h-64 space-y-2 overflow-y-auto pr-2">
              {history.length === 0 ? <p>Bienvenue. Tapez &quot;help&quot;.</p> : null}
              {history.map((item, idx) => (
                <div key={`${item.command}-${idx}`}>
                  <p>
                    <span className="text-cyan-300">$</span> {item.command}
                  </p>
                  <p className="text-slate-300">{item.output}</p>
                </div>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                run();
              }}
              className="mt-3 flex items-center gap-2 border-t border-slate-800 pt-3"
            >
              <span className="text-cyan-300">$</span>
              <input
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-transparent outline-none placeholder:text-slate-500"
                placeholder="help"
              />
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
