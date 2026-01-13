import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        HEADER
        <main className="container flex-grow-1 d-flex flex-column">
          CONTENT
        </main>
        <footer
          className="mt-auto py-3 bg-light border-top text-center text-muted"
          style={{ width: "100%" }}
        >
          <p className="mb-0">@ 2026 React Router Demo.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
