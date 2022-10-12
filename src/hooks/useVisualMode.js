import { useState } from "react";

export default function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    if (replace === true) {
      history.pop();
    }
    setHistory([...history, newMode]);
  }

  function back() {
    if (history.length === 1) {
      return;
    }
    history.pop();
    setMode(history[history.length - 1]);
  }

  return { mode, transition, back, history };
}
