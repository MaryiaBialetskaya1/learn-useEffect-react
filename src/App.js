import "./App.css";
import { GetAdviceWithUseEffect } from "./components/getAdviceWithUseEffect/GetAdviceWithUseEffect";
import { SpreadOperator } from "./components/spreadOperator/SpreadOperator";
import { ExampleUseEffect } from "./components/useEffect/ExapmleUseEffect";

function App() {
  return (
    <div className="App">
      <GetAdviceWithUseEffect />
      <SpreadOperator />
      <ExampleUseEffect />
    </div>
  );
}

export default App;
