import { createSignal } from "solid-js";
import "./app.css";

export default function App() {
  const [count, setCount] = createSignal(0);

  return (
    <main>
      <div class="bg-pink-500">Hello World - {count()}</div>
    </main>
  );
}
