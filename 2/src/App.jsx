import { useState, createContext, useContext, useMemo, useCallback } from "react";

const NumberContext = createContext();

function NumberProvider({ children }) {
  const [number, setNumber] = useState(0);

  const increment = useCallback(() => {
    setNumber((prev) => prev + 1);
  }, []);

  const value = useMemo(() => ({ number, increment }), [number, increment]);

  return <NumberContext.Provider value={value}>{children}</NumberContext.Provider>;
}

function useNumber() {
  return useContext(NumberContext);
}

function NumberDisplay() {
  const { number, increment } = useNumber();

  return (
    <div>
      <p>number: {number}</p>
      <button onClick={increment}>button</button>
    </div>
  );
}

function App() {
  return (
    <NumberProvider>
      <NumberDisplay />
    </NumberProvider>
  );
}

export default App;
