import { useState } from "react";
export default function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    setHistory((prev) => {
      if (replace === true) {
        prev.pop();
      }
      return [...prev, newMode];
    });
  }

  function back() {
    if (history.length === 1) {
      return;
    }
    const newHistory = [...history];

    newHistory.pop();

    setHistory(newHistory);

    setMode(newHistory[newHistory.length - 1]);
  }
  return { mode, transition, back };
}
