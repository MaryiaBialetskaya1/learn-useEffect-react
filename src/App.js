import "./App.css";
import { GetAdviceWithUseEffect } from "./components/getAdviceWithUseEffect/GetAdviceWithUseEffect";
import { GetQuoteWithUseEffect } from "./components/getQuoteWithUseEffectAPI/GetQuoteWithUseEffect";
import { SpreadOperator } from "./components/spreadOperator/SpreadOperator";
import { ExampleUseEffect } from "./components/useEffect/ExapmleUseEffect";

function App() {
  return (
    <div className="App">
      <GetQuoteWithUseEffect />
      <GetAdviceWithUseEffect />
      <SpreadOperator />
      <ExampleUseEffect />
    </div>
  );
}

export default App;
