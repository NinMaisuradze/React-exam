import "./App.css";
import Parent from "./Components/Parent.jsx";
import { useMemo } from "react";

function App() {
 
  const message = useMemo(() => "Good Luck", []);

  return (
    <div>
      <Parent message={message} />
    </div>
  );
}

export default App;
